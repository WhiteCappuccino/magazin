import general from '@img/Size=1440,type=general.png'

export default function ContactsPage() {
	return (
		<div className="space-y-8">
			<h1 className="text-4xl font-black">Контакты</h1>

			<section className="grid grid-cols-1 gap-6 md:grid-cols-2">
				<div className="rounded-2xl bg-white p-6 ring-1 ring-black/5">
					<div className="space-y-3">
						<div className="flex items-center gap-3 text-lg">
							<span>🏢</span>
							<span>Бухгалтерия, склад</span>
						</div>
						<a href="tel:+78214092619" className="text-emerald-700 hover:underline">+7 82140 92619</a>
					</div>
				</div>
				<div className="rounded-2xl bg-white p-6 ring-1 ring-black/5">
					<div className="space-y-3">
						<div className="flex items-center gap-3 text-lg">
							<span>%</span>
							<span>Вопросы по системе лояльности</span>
						</div>
						<a href="tel:+79087163397" className="text-emerald-700 hover:underline">+7 908 716 33 97</a>
					</div>
				</div>
			</section>

			<section className="space-y-4">
				<h2 className="text-2xl font-black">Наши магазины</h2>
				<div className="flex flex-wrap gap-2">
					{['п.Щельяюр','д.Вертеп','с.Краснобор','д.Диюр'].map((city, i) => (
						<button key={city} className={`rounded-full px-3 py-1 text-sm ${i === 0 ? 'bg-emerald-600 text-white' : 'bg-white ring-1 ring-black/5'}`}>{city}</button>
					))}
				</div>
				<div className="overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
					<img src={general} alt="Карта" className="h-[360px] w-full object-cover" />
				</div>
			</section>
		</div>
	)
} 