import { ProductCard, type Product } from '../components/ProductCard'
import blinchiki from '@img/blinchiki.png'
import kolbasa2 from '@img/kolbasa2.png'
import moloko from '@img/moloko.png'
import sosiski from '@img/sosiski.png'

const products: Product[] = Array.from({ length: 6 }).map((_, i) => ({
	id: String(i + 1),
	title: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
	price: 69.99,
	oldPrice: 140.5,
	discountPercent: 50,
	rating: 4,
	image: blinchiki,
}))

export default function FavoritesPage() {
	return (
		<div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
			<aside className="space-y-4 rounded-2xl bg-white p-4 ring-1 ring-black/5">
				<div className="font-bold">Фильтр</div>
				<div className="space-y-2">
					<div className="text-sm text-neutral-600">Цена</div>
					<input type="range" min={1} max={100} defaultValue={30} className="w-full" />
				</div>
				<div className="space-y-2">
					<label className="flex items-center gap-2 text-sm"><input type="checkbox" /> Молоко</label>
					<label className="flex items-center gap-2 text-sm"><input type="checkbox" /> Сливки</label>
					<label className="flex items-center gap-2 text-sm"><input type="checkbox" /> Яйцо</label>
				</div>
				<label className="mt-2 flex items-center gap-2 text-sm"><input type="checkbox" defaultChecked /> В наличии</label>
				<button className="w-full rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white">Применить</button>
			</aside>

			<section className="space-y-5">
				<h1 className="text-4xl font-black">Избранное</h1>
				<div className="flex flex-wrap gap-2">
					<span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-700">Цена от 99 до 2599 <button className="text-emerald-700">×</button></span>
				</div>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{products.map(p => <ProductCard key={p.id} product={p} />)}
				</div>
				<div className="flex items-center justify-center gap-2">
					{Array.from({ length: 8 }).map((_, i) => (
						<button key={i} className={`h-9 w-9 rounded-md border ${i === 0 ? 'border-emerald-600 text-emerald-700' : 'border-neutral-300 text-neutral-700'}`}>{i + 1}</button>
					))}
				</div>
			</section>
		</div>
	)
} 