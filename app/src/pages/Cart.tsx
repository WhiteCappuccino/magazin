import { Link } from 'react-router-dom'
import blinchiki from '@img/blinchiki.png'
import kolbasa2 from '@img/kolbasa2.png'
import moloko from '@img/moloko.png'
import sosiski from '@img/sosiski.png'

function CartRow() {
	return (
		<div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl bg-white p-3 ring-1 ring-black/5">
			<img src={item} alt="" className="h-16 w-16 rounded-lg object-cover" />
			<div>
				<div className="font-medium">Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</div>
				<div className="text-sm text-neutral-500">44,50 ₽ за шт.</div>
			</div>
			<div className="flex items-center gap-3">
				<div className="flex items-center gap-2 rounded-lg border border-neutral-300 px-2 py-1">
					<button className="px-2">−</button>
					<div>2</div>
					<button className="px-2">+</button>
				</div>
				<div className="w-20 text-right font-semibold">89,00 ₽</div>
			</div>
		</div>
	)
}

export default function CartPage() {
	return (
		<div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
			<div className="space-y-3">
				<h1 className="text-4xl font-black">Корзина</h1>
				<CartRow />
				<CartRow />
				<CartRow />
			</div>
			<aside className="h-max space-y-4 rounded-2xl bg-white p-4 ring-1 ring-black/5">
				<div className="flex items-center justify-between text-sm text-neutral-600">
					<span>3 товара</span>
					<span>1 059,10 ₽</span>
				</div>
				<div className="flex items-center justify-between text-sm text-neutral-600">
					<span>Скидка</span>
					<span className="text-rose-600">−8,01 ₽</span>
				</div>
				<div className="flex items-center justify-between text-lg font-bold">
					<span>Итог</span>
					<span>1 051,09 ₽</span>
				</div>
				<Link to="/checkout" className="block rounded-xl bg-emerald-600 px-6 py-3 text-center font-semibold text-white hover:bg-emerald-700">Оформить заказ</Link>
			</aside>
		</div>
	)
} 