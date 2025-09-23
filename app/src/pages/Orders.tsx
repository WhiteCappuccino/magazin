import { useState } from 'react'
import blinchiki from '@img/blinchiki.png'
import kolbasa2 from '@img/kolbasa2.png'
import moloko from '@img/moloko.png'
import sosiski from '@img/sosiski.png'

type OrderStatus = 'delivered' | 'in-progress' | 'cancelled'

type Order = {
	id: string
	date: string
	status: OrderStatus
	total: number
	items: Array<{
		id: string
		title: string
		price: number
		quantity: number
		image?: string
	}>
}

const mockOrders: Order[] = [
	{
		id: '12345',
		date: '2024-01-15',
		status: 'delivered',
		total: 1250.50,
		items: [
			{ id: '1', title: 'Молоко 3.2% 1л', price: 89.90, quantity: 2, image: blinchiki },
			{ id: '2', title: 'Хлеб белый нарезной', price: 45.00, quantity: 1, image: blinchiki },
			{ id: '3', title: 'Яйца куриные С1', price: 120.00, quantity: 1, image: blinchiki }
		]
	},
	{
		id: '12344',
		date: '2024-01-10',
		status: 'in-progress',
		total: 890.30,
		items: [
			{ id: '4', title: 'Сыр Российский 45%', price: 350.00, quantity: 1, image: blinchiki },
			{ id: '5', title: 'Колбаса Докторская', price: 280.00, quantity: 1, image: blinchiki }
		]
	},
	{
		id: '12343',
		date: '2024-01-05',
		status: 'cancelled',
		total: 450.00,
		items: [
			{ id: '6', title: 'Мясо говядина', price: 450.00, quantity: 1, image: blinchiki }
		]
	}
]

function getStatusText(status: OrderStatus): string {
	switch (status) {
		case 'delivered': return 'Доставлен'
		case 'in-progress': return 'В обработке'
		case 'cancelled': return 'Отменен'
	}
}

function getStatusColor(status: OrderStatus): string {
	switch (status) {
		case 'delivered': return 'text-emerald-600 bg-emerald-50'
		case 'in-progress': return 'text-blue-600 bg-blue-50'
		case 'cancelled': return 'text-red-600 bg-red-50'
	}
}

function OrderCard({ order }: { order: Order }) {
	const [isExpanded, setIsExpanded] = useState(false)

	return (
		<div className="rounded-2xl bg-white p-6 ring-1 ring-black/5">
			<div className="flex items-center justify-between">
				<div>
					<div className="text-lg font-bold">Заказ #{order.id}</div>
					<div className="text-sm text-neutral-600">{new Date(order.date).toLocaleDateString('ru-RU')}</div>
				</div>
				<div className="text-right">
					<div className="text-lg font-bold">{order.total.toFixed(2)} ₽</div>
					<div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(order.status)}`}>
						{getStatusText(order.status)}
					</div>
				</div>
			</div>
			
			<div className="mt-4 flex items-center justify-between">
				<div className="text-sm text-neutral-600">
					{order.items.length} товар{order.items.length === 1 ? '' : order.items.length < 5 ? 'а' : 'ов'}
				</div>
				<button 
					onClick={() => setIsExpanded(!isExpanded)}
					className="text-sm text-emerald-600 hover:underline"
				>
					{isExpanded ? 'Скрыть детали' : 'Показать детали'}
				</button>
			</div>

			{isExpanded && (
				<div className="mt-4 space-y-3 border-t pt-4">
					{order.items.map(item => (
						<div key={item.id} className="flex items-center gap-3">
							<div className="h-12 w-12 overflow-hidden rounded-lg bg-neutral-100">
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
			)}
		</div>
	)
}

export default function OrdersPage() {
	return (
		<div className="space-y-8">
			<h1 className="text-4xl font-black">Мои заказы</h1>
			
			<div className="space-y-4">
				{mockOrders.map(order => (
					<OrderCard key={order.id} order={order} />
				))}
			</div>

			{mockOrders.length === 0 && (
				<div className="rounded-2xl bg-white p-12 text-center ring-1 ring-black/5">
					<div className="text-6xl mb-4">📦</div>
					<div className="text-xl font-semibold mb-2">У вас пока нет заказов</div>
					<div className="text-neutral-600">Сделайте первый заказ, чтобы увидеть его здесь</div>
				</div>
			)}
		</div>
	)
}
