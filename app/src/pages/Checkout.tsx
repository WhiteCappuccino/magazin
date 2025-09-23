export default function CheckoutPage() {
	return (
		<div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
			<div className="space-y-8">
				<h1 className="text-4xl font-black">Доставка</h1>

				<section className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
					<h2 className="mb-4 text-xl font-bold">Куда</h2>
					<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
						<select className="rounded-lg border border-neutral-300 px-3 py-2">
							<option>Усть-Ижма</option>
							<option>Сыктывкар</option>
						</select>
						<input className="rounded-lg border border-neutral-300 px-3 py-2" placeholder="Улица" />
						<input className="rounded-lg border border-neutral-300 px-3 py-2" placeholder="Дом" />
						<input className="rounded-lg border border-neutral-300 px-3 py-2" placeholder="Квартира" />
						<input className="rounded-lg border border-neutral-300 px-3 py-2" placeholder="Подъезд" />
					</div>
				</section>

				<section className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
					<h2 className="mb-4 text-xl font-bold">Когда</h2>
					<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
						<input type="date" className="rounded-lg border border-neutral-300 px-3 py-2" />
						<div className="flex flex-wrap gap-2">
							{['8:00–14:00','14:00–18:00','18:00–20:00','20:00–22:00'].map(t => (
								<button key={t} className="rounded-lg border border-neutral-300 px-3 py-2 hover:border-emerald-600">{t}</button>
							))}
						</div>
					</div>
				</section>

				<section className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
					<h2 className="mb-4 text-xl font-bold">Вход</h2>
					<div className="grid max-w-sm grid-cols-1 gap-3">
						<input className="rounded-lg border border-emerald-600 px-3 py-2" placeholder="Телефон" />
						<button className="rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white">Получить код</button>
					</div>
				</section>
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
				<div className="grid gap-2">
					<button className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600">Оплатить на сайте</button>
					<button className="rounded-xl border border-emerald-600 px-6 py-3 font-semibold text-emerald-700 hover:bg-emerald-600 hover:text-white">Оплатить при получении</button>
				</div>
			</aside>
		</div>
	)
} 