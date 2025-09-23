import { useState } from 'react'
import blinchiki from '@img/blinchiki.png'
import kolbasa2 from '@img/kolbasa2.png'
import moloko from '@img/moloko.png'
import sosiski from '@img/sosiski.png'

type DeskOrder = {
	id: string
	customerName: string
	phone: string
	items: Array<{
		id: string
		title: string
		price: number
		quantity: number
		image?: string
	}>
	total: number
	status: 'pending' | 'preparing' | 'ready' | 'completed'
	createdAt: string
}

const mockOrders: DeskOrder[] = [
	{
		id: 'D001',
		customerName: 'Иван Петров',
		phone: '+7 912 345 67 89',
		items: [
			{ id: '1', title: 'Молоко 3.2% 1л', price: 89.90, quantity: 2, image: blinchiki },
			{ id: '2', title: 'Хлеб белый нарезной', price: 45.00, quantity: 1, image: blinchiki }
		],
		total: 224.80,
		status: 'pending',
		createdAt: '2024-01-15 14:30'
	},
	{
		id: 'D002',
		customerName: 'Мария Сидорова',
		phone: '+7 912 345 67 90',
		items: [
			{ id: '3', title: 'Яйца куриные С1', price: 120.00, quantity: 1, image: blinchiki },
			{ id: '4', title: 'Сыр Российский 45%', price: 350.00, quantity: 1, image: blinchiki }
		],
		total: 470.00,
		status: 'preparing',
		createdAt: '2024-01-15 14:15'
	},
	{
		id: 'D003',
		customerName: 'Алексей Козлов',
		phone: '+7 912 345 67 91',
		items: [
			{ id: '5', title: 'Колбаса Докторская', price: 280.00, quantity: 1, image: blinchiki }
		],
		total: 280.00,
		status: 'ready',
		createdAt: '2024-01-15 13:45'
	}
]

function getStatusText(status: DeskOrder['status']): string {
	switch (status) {
		case 'pending': return 'Новый заказ'
		case 'preparing': return 'Готовится'
		case 'ready': return 'Готов к выдаче'
		case 'completed': return 'Выдан'
	}
}

function getStatusColor(status: DeskOrder['status']): string {
	switch (status) {
		case 'pending': return 'text-orange-600 bg-orange-50'
		case 'preparing': return 'text-blue-600 bg-blue-50'
		case 'ready': return 'text-emerald-600 bg-emerald-50'
		case 'completed': return 'text-neutral-600 bg-neutral-50'
	}
}

function DeskOrderCard({ order, onStatusChange }: { order: DeskOrder, onStatusChange: (id: string, status: DeskOrder['status']) => void }) {
	const nextStatus = (() => {
		switch (order.status) {
			case 'pending': return 'preparing'
			case 'preparing': return 'ready'
			case 'ready': return 'completed'
			default: return null
		}
	})()

	return (
		<div className="rounded-2xl bg-white p-6 ring-1 ring-black/5">
			<div className="flex items-start justify-between mb-4">
				<div>
					<div className="text-lg font-bold">Заказ #{order.id}</div>
					<div className="text-sm text-neutral-600">{order.customerName}</div>
					<div className="text-sm text-neutral-600">{order.phone}</div>
					<div className="text-xs text-neutral-500">{order.createdAt}</div>
				</div>
				<div className="text-right">
					<div className="text-lg font-bold">{order.total.toFixed(2)} ₽</div>
					<div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(order.status)}`}>
						{getStatusText(order.status)}
					</div>
				</div>
			</div>

			<div className="space-y-2 mb-4">
				{order.items.map(item => (
					<div key={item.id} className="flex items-center gap-3">
						<div className="h-10 w-10 overflow-hidden rounded-lg bg-neutral-100">
							{item.image ? (
								<img src={item.image} alt="" className="h-full w-full object-cover" />
							) : (
								<div className="flex h-full w-full items-center justify-center text-xs text-neutral-400">Фото</div>
							)}
						</div>
						<div className="flex-1">
							<div className="text-sm font-medium">{item.title}</div>
							<div className="text-xs text-neutral-600">{item.quantity} шт. × {item.price.toFixed(2)} ₽</div>
						</div>
						<div className="text-sm font-semibold">{(item.price * item.quantity).toFixed(2)} ₽</div>
					</div>
				))}
			</div>

			{nextStatus && (
				<button
					onClick={() => onStatusChange(order.id, nextStatus)}
					className="w-full rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
				>
					{nextStatus === 'preparing' ? 'Начать приготовление' : 
					 nextStatus === 'ready' ? 'Отметить готовым' : 
					 'Выдать заказ'}
				</button>
			)}
		</div>
	)
}

export default function DeskPage() {
	const [orders, setOrders] = useState<DeskOrder[]>(mockOrders)
	const [filter, setFilter] = useState<DeskOrder['status'] | 'all'>('all')

	const handleStatusChange = (id: string, newStatus: DeskOrder['status']) => {
		setOrders(prev => prev.map(order => 
			order.id === id ? { ...order, status: newStatus } : order
		))
	}

	const filteredOrders = filter === 'all' 
		? orders 
		: orders.filter(order => order.status === filter)

	const statusCounts = {
		pending: orders.filter(o => o.status === 'pending').length,
		preparing: orders.filter(o => o.status === 'preparing').length,
		ready: orders.filter(o => o.status === 'ready').length,
		completed: orders.filter(o => o.status === 'completed').length
	}

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<h1 className="text-4xl font-black">Стол заказов</h1>
				<div className="text-sm text-neutral-600">
					Всего заказов: {orders.length}
				</div>
			</div>

			{/* Статистика */}
			<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
				<div className="rounded-2xl bg-orange-50 p-4 text-center">
					<div className="text-2xl font-bold text-orange-600">{statusCounts.pending}</div>
					<div className="text-sm text-orange-600">Новые</div>
				</div>
				<div className="rounded-2xl bg-blue-50 p-4 text-center">
					<div className="text-2xl font-bold text-blue-600">{statusCounts.preparing}</div>
					<div className="text-sm text-blue-600">Готовятся</div>
				</div>
				<div className="rounded-2xl bg-emerald-50 p-4 text-center">
					<div className="text-2xl font-bold text-emerald-600">{statusCounts.ready}</div>
					<div className="text-sm text-emerald-600">Готовы</div>
				</div>
				<div className="rounded-2xl bg-neutral-50 p-4 text-center">
					<div className="text-2xl font-bold text-neutral-600">{statusCounts.completed}</div>
					<div className="text-sm text-neutral-600">Выданы</div>
				</div>
			</div>

			{/* Фильтры */}
			<div className="flex flex-wrap gap-2">
				<button
					onClick={() => setFilter('all')}
					className={`rounded-full px-4 py-2 text-sm font-medium transition ${
						filter === 'all' 
							? 'bg-emerald-600 text-white' 
							: 'bg-white text-neutral-600 ring-1 ring-black/5 hover:bg-neutral-50'
					}`}
				>
					Все ({orders.length})
				</button>
				<button
					onClick={() => setFilter('pending')}
					className={`rounded-full px-4 py-2 text-sm font-medium transition ${
						filter === 'pending' 
							? 'bg-orange-600 text-white' 
							: 'bg-white text-neutral-600 ring-1 ring-black/5 hover:bg-neutral-50'
					}`}
				>
					Новые ({statusCounts.pending})
				</button>
				<button
					onClick={() => setFilter('preparing')}
					className={`rounded-full px-4 py-2 text-sm font-medium transition ${
						filter === 'preparing' 
							? 'bg-blue-600 text-white' 
							: 'bg-white text-neutral-600 ring-1 ring-black/5 hover:bg-neutral-50'
					}`}
				>
					Готовятся ({statusCounts.preparing})
				</button>
				<button
					onClick={() => setFilter('ready')}
					className={`rounded-full px-4 py-2 text-sm font-medium transition ${
						filter === 'ready' 
							? 'bg-emerald-600 text-white' 
							: 'bg-white text-neutral-600 ring-1 ring-black/5 hover:bg-neutral-50'
					}`}
				>
					Готовы ({statusCounts.ready})
				</button>
			</div>

			{/* Список заказов */}
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{filteredOrders.map(order => (
					<DeskOrderCard 
						key={order.id} 
						order={order} 
						onStatusChange={handleStatusChange}
					/>
				))}
			</div>

			{filteredOrders.length === 0 && (
				<div className="rounded-2xl bg-white p-12 text-center ring-1 ring-black/5">
					<div className="text-6xl mb-4">📋</div>
					<div className="text-xl font-semibold mb-2">Нет заказов</div>
					<div className="text-neutral-600">
						{filter === 'all' 
							? 'Пока нет заказов' 
							: `Нет заказов со статусом «${getStatusText(filter as DeskOrder['status'])}»`
						}
					</div>
				</div>
			)}
		</div>
	)
}
