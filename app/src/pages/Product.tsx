import { useParams } from 'react-router-dom'
import item from '@img/Item.png'
import { ProductCard, type Product } from '../components/ProductCard'

const similar: Product[] = [
	{ id: 's1', title: 'Колбаса сырокопченая', price: 159.99, oldPrice: 180.0, discountPercent: 10, rating: 4, image: item },
	{ id: 's2', title: 'Молоко ПРОСТОКВАШИНО 1л', price: 49.39, rating: 4, image: item },
	{ id: 's3', title: 'Сосиски варёные', price: 44.5, oldPrice: 50.5, discountPercent: 50, rating: 5, image: item },
	{ id: 's4', title: 'Блинчики с мясом', price: 44.5, oldPrice: 50.5, discountPercent: 50, rating: 4, image: item },
]

export default function ProductPage() {
	const { id } = useParams()
	return (
		<div className="space-y-12">
			<section className="grid grid-cols-1 gap-8 md:grid-cols-2">
				<div className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
					<div className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
						<img src={item} alt="Товар" className="h-full w-full object-contain" />
					</div>
					<div className="mt-3 grid grid-cols-4 gap-2">
						{Array.from({ length: 4 }).map((_, i) => (
							<button key={i} className="aspect-square overflow-hidden rounded-lg ring-1 ring-black/5">
								<img src={item} alt="" className="h-full w-full object-cover" />
							</button>
						))}
					</div>
				</div>
				<div className="space-y-4">
					<h1 className="text-3xl font-black">Масло ПРОСТОКВАШИНО сливочное 82% — {id}</h1>
					<div className="flex items-end gap-3">
						<div className="text-3xl font-black">108,99 ₽</div>
						<div className="text-neutral-400 line-through">192,69 ₽</div>
					</div>
					<div className="flex items-center gap-2 text-sm text-neutral-600">
						<span className="text-amber-500">★★★★★</span>
						<span>3 отзыва</span>
					</div>
					<button className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-emerald-700">В корзину</button>
					<dl className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
						<dt className="text-neutral-500">Бренд</dt><dd className="font-medium">ПРОСТОКВАШИНО</dd>
						<dt className="text-neutral-500">Страна</dt><dd className="font-medium">Россия</dd>
						<dt className="text-neutral-500">Упаковка</dt><dd className="font-medium">180 г</dd>
					</dl>
				</div>
			</section>

			<section>
				<h2 className="mb-5 text-2xl font-black">С этим товаром покупают</h2>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{similar.map(p => <ProductCard key={p.id} product={p} />)}
				</div>
			</section>

			<section>
				<h2 className="mb-5 text-2xl font-black">Отзывы</h2>
				<div className="space-y-4 rounded-2xl bg-white p-6 ring-1 ring-black/5">
					<div>
						<div className="font-semibold">Татьяна</div>
						<div className="text-amber-500">★★★★☆</div>
						<p className="text-sm text-neutral-700">Приятный вкус</p>
					</div>
					<form className="mt-4 grid gap-3">
						<input className="rounded-lg border border-neutral-300 px-3 py-2" placeholder="Ваша оценка и отзыв" />
						<button className="justify-self-start rounded-lg border border-emerald-600 px-4 py-2 font-semibold text-emerald-700 hover:bg-emerald-600 hover:text-white">Отправить отзыв</button>
					</form>
				</div>
			</section>
		</div>
	)
} 