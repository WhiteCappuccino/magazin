import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductCard, type Product } from '../components/ProductCard'
import blinchiki from '@img/blinchiki.png'
import kolbasa2 from '@img/kolbasa2.png'
import moloko from '@img/moloko.png'
import sosiski from '@img/sosiski.png'

const mockProducts: Product[] = [
	{ id: '1', title: 'Г/Ц Блинчики с мясом вес, Россия', price: 44.50, oldPrice: 50.50, image: blinchiki, rating: 3, discountPercent: 50 },
	{ id: '2', title: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное 3.2% 1л', price: 44.50, oldPrice: 50.50, image: moloko, rating: 3, discountPercent: 50 },
	{ id: '3', title: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...', price: 44.50, oldPrice: 50.50, image: kolbasa2, rating: 4, discountPercent: 50 },
	{ id: '4', title: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...', price: 44.50, oldPrice: 50.50, image: sosiski, rating: 4, discountPercent: 50 },
	{ id: '5', title: 'Хлеб белый нарезной', price: 45.00, image: blinchiki, rating: 5 },
	{ id: '6', title: 'Яйца куриные С1', price: 120.00, image: moloko, rating: 4 },
	{ id: '7', title: 'Сыр Российский 45%', price: 350.00, image: kolbasa2, rating: 5 },
	{ id: '8', title: 'Колбаса Докторская', price: 280.00, image: sosiski, rating: 4 }
]

export default function CategoryPage() {
	const { slug } = useParams()
	const [priceRange, setPriceRange] = useState([0, 1000])
	const [selectedBrands, setSelectedBrands] = useState<string[]>([])
	const [sortBy, setSortBy] = useState('relevance')

	const brands = ['Северяночка', 'ПРОСТОКВАШИНО', 'МЯСНАЯ ИСТОРИЯ', 'Другие']

	const filteredProducts = mockProducts.filter(product => {
		const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
		return matchesPrice
	})

	const handleBrandToggle = (brand: string) => {
		setSelectedBrands(prev => 
			prev.includes(brand) 
				? prev.filter(b => b !== brand)
				: [...prev, brand]
		)
	}

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold">Категория: {slug}</h1>
				<div className="flex items-center gap-3">
					<select 
						value={sortBy} 
						onChange={(e) => setSortBy(e.target.value)}
						className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm"
					>
						<option value="relevance">По релевантности</option>
						<option value="price-asc">По возрастанию цены</option>
						<option value="price-desc">По убыванию цены</option>
						<option value="rating">По рейтингу</option>
					</select>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
				{/* Фильтры */}
				<div className="space-y-6">
					<div className="rounded-2xl bg-white p-6 ring-1 ring-black/5">
						<h3 className="mb-4 text-lg font-semibold">Фильтры</h3>
						
						{/* Цена */}
						<div className="mb-6">
							<h4 className="mb-3 text-sm font-medium">Цена</h4>
							<div className="space-y-2">
								<input
									type="range"
									min="0"
									max="1000"
									value={priceRange[1]}
									onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
									className="w-full"
								/>
								<div className="flex justify-between text-xs text-neutral-600">
									<span>{priceRange[0]} ₽</span>
									<span>{priceRange[1]} ₽</span>
								</div>
							</div>
						</div>

						{/* Бренды */}
						<div>
							<h4 className="mb-3 text-sm font-medium">Бренды</h4>
							<div className="space-y-2">
								{brands.map(brand => (
									<label key={brand} className="flex items-center gap-2">
										<input
											type="checkbox"
											checked={selectedBrands.includes(brand)}
											onChange={() => handleBrandToggle(brand)}
											className="rounded border-neutral-300"
										/>
										<span className="text-sm">{brand}</span>
									</label>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Товары */}
				<div className="lg:col-span-3">
					{/* Активные фильтры */}
					{selectedBrands.length > 0 && (
						<div className="mb-4 flex flex-wrap gap-2">
							{selectedBrands.map(brand => (
								<span key={brand} className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
									{brand}
									<button onClick={() => handleBrandToggle(brand)} className="ml-1 text-emerald-500 hover:text-emerald-700">×</button>
								</span>
							))}
						</div>
					)}

					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
						{filteredProducts.map(product => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>

					{/* Пагинация */}
					<div className="mt-8 flex justify-center">
						<div className="flex items-center gap-2">
							<button className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm hover:bg-neutral-50">←</button>
							<button className="rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm">1</button>
							<button className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm hover:bg-neutral-50">2</button>
							<button className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm hover:bg-neutral-50">3</button>
							<button className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm hover:bg-neutral-50">→</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
