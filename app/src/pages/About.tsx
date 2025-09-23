import about from '@img/Size=1440, type=about-us.png'

export default function AboutPage() {
	return (
		<div className="space-y-8">
			<h1 className="text-4xl font-black">О компании</h1>
			<div className="overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
				<img src={about} alt="О компании" className="h-72 w-full object-cover" />
			</div>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
				<div className="rounded-2xl bg-white p-6 ring-1 ring-black/5">
					<div className="text-sm text-neutral-600">Мы занимаемся розничной торговлей</div>
					<div className="mt-2 text-2xl font-extrabold">Более 20 лет.</div>
				</div>
				<div className="rounded-2xl bg-white p-6 ring-1 ring-black/5">
					<div className="text-sm text-neutral-600">Основная миссия компании</div>
					<div className="mt-2 text-2xl font-extrabold">Максимальное качество по доступной цене.</div>
				</div>
				<div className="rounded-2xl bg-white p-6 ring-1 ring-black/5">
					<div className="text-sm text-neutral-600">Отличительная черта сети</div>
					<div className="mt-2 text-2xl font-extrabold">Здоровая продукция местного производства.</div>
				</div>
			</div>
		</div>
	)
} 