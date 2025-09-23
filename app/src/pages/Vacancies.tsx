function VacancyCard() {
	return (
		<div className="space-y-3 rounded-2xl bg-white p-5 ring-1 ring-black/5">
			<h3 className="text-lg font-bold">Должность</h3>
			<div>
				<div className="text-sm font-semibold">Требования</div>
				<p className="text-sm text-neutral-600">Текст про требования текст про требования текст...</p>
			</div>
			<div>
				<div className="text-sm font-semibold">Обязанности</div>
				<p className="text-sm text-neutral-600">Текст про обязанности текст про обязанности...</p>
			</div>
			<div>
				<div className="text-sm font-semibold">Условия</div>
				<p className="text-sm text-neutral-600">Текст про условия текст про условия...</p>
			</div>
			<div className="text-sm">Звоните: <a className="text-emerald-700" href="tel:+79042713590">+7 904 271 35 90</a></div>
		</div>
	)
}

export default function VacanciesPage() {
	return (
		<div className="space-y-8">
			<h1 className="text-4xl font-black">Вакансии</h1>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
				{Array.from({ length: 9 }).map((_, i) => (
					<VacancyCard key={i} />
				))}
			</div>
		</div>
	)
} 