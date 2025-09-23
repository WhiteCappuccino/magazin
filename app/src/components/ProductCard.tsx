import { Link } from 'react-router-dom'

export type Product = {
	id: string
	title: string
	price: number
	oldPrice?: number
	image?: string
	rating?: number
	discountPercent?: number
}

export function ProductCard({ product }: { product: Product }) {
	const hasDiscount = product.oldPrice && product.oldPrice > product.price
	return (
		<div className="group relative rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-md">
			{product.discountPercent ? (
				<div className="absolute left-3 top-3 rounded bg-orange-500 px-2 py-0.5 text-xs font-semibold text-white">
					-{product.discountPercent}%
				</div>
			) : null}
			<button className="absolute right-3 top-3 rounded-full border border-neutral-200 bg-white p-1 text-neutral-500 hover:text-rose-500" aria-label="В избранное">
				❤
			</button>
			<Link to={`/product/${product.id}`} className="block">
				<div className="aspect-[4/3] overflow-hidden rounded-t-xl bg-neutral-100">
					{product.image ? (
						<img src={product.image} alt="" className="h-full w-full object-cover" />
					) : (
						<div className="flex h-full w-full items-center justify-center text-neutral-400">Фото</div>
					)}
				</div>
				<div className="space-y-2 p-4">
					<div className="flex items-baseline gap-2">
						<div className="text-lg font-bold">{product.price.toFixed(2)} ₽</div>
						{hasDiscount ? (
							<div className="text-sm text-neutral-400 line-through">{product.oldPrice!.toFixed(2)} ₽</div>
						) : null}
					</div>
					<div className="line-clamp-2 min-h-[3.25rem] text-sm text-neutral-800">{product.title}</div>
					<div className="flex items-center justify-between">
						<div className="text-amber-500">{'★'.repeat(product.rating ?? 4)}</div>
						<button className="rounded-lg border border-emerald-600 px-3 py-1.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-600 hover:text-white">
							В корзину
						</button>
					</div>
				</div>
			</Link>
		</div>
	)
} 