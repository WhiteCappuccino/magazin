import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ProductCard, type Product } from '../components/ProductCard'
import blinchiki from '@img/blinchiki.png'
import kolbasa2 from '@img/kolbasa2.png'
import moloko from '@img/moloko.png'
import sosiski from '@img/sosiski.png'

const mockProducts: Product[] = [
	{ id: '1', title: 'Молоко 3.2% 1л', price: 89.90, oldPrice: 99.90, image: blinchiki, rating: 4, discountPercent: 10 },
	{ id: '2', title: 'Хлеб белый нарезной', price: 45.00, image: blinchiki, rating: 5 },
	{ id: '3', title: 'Яйца куриные С1', price: 120.00, image: blinchiki, rating: 4 },
	{ id: '4', title: 'Сыр Российский 45%', price: 350.00, image: blinchiki, rating: 5 },
	{ id: '5', title: 'Колбаса Докторская', price: 280.00, image: blinchiki, rating: 4 },
	{ id: '6', title: 'Мясо говядина', price: 450.00, image: blinchiki, rating: 5 },
	{ id: '7', title: 'Молоко 2.5% 1л', price: 79.90, image: blinchiki, rating: 4 },
	{ id: '8', title: 'Хлеб ржаной', price: 55.00, image: blinchiki, rating: 4 },
	{ id: '9', title: 'Яйца перепелиные', price: 180.00, image: blinchiki, rating: 5 },
	{ id: '10', title: 'Сыр Гауда', price: 420.00, image: blinchiki, rating: 4 },
	{ id: '11', title: 'Колбаса Сервелат', price: 320.00, image: blinchiki, rating: 5 },
	{ id: '12', title: 'Мясо свинина', price: 380.00, image: blinchiki, rating: 4 }
]

export default function SearchPage() {
	const [searchParams] = useSearchParams()
	const query = searchParams.get('q') || ''
	
	const [priceRange, setPriceRange] = useState([0, 1000])
	const [selectedCategories, setSelectedCategories] = useState<string[]>([])
	const [sortBy, setSortBy] = useState('relevance')

	const categories = ['Молочные продукты', 'Хлебобулочные', 'Мясо и колбасы', 'Яйца', 'Сыры']

	const filteredProducts = mockProducts.filter(product => {
		const matchesQuery = product.title.toLowerCase().includes(query.toLowerCase())
		const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
		return matchesQuery && matchesPrice
	})

	const handleCategoryToggle = (category: string) => {
		setSelectedCategories(prev => 
			prev.includes(category) 
				? prev.filter(c => c !== category)
				: [...prev, category]
		)
	}

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-2xl font-bold">Результаты поиска</h1>
					{query && (
						<p className="text-neutral-600">По запросу «{query}» найдено {filteredProducts.length} товаров</p>
					)}
				</div>
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

						{/* Категории */}
						<div>
							<h4 className="mb-3 text-sm font-medium">Категории</h4>
							<div className="space-y-2">
								{categories.map(category => (
									<label key={category} className="flex items-center gap-2">
										<input
											type="checkbox"
											checked={selectedCategories.includes(category)}
											onChange={() => handleCategoryToggle(category)}
											className="rounded border-neutral-300"
										/>
										<span className="text-sm">{category}</span>
									</label>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Товары */}
				<div className="lg:col-span-3">
					{filteredProducts.length > 0 ? (
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
							{filteredProducts.map(product => (
								<ProductCard key={product.id} product={product} />
							))}
						</div>
					) : (
						<div className="rounded-2xl bg-white p-12 text-center ring-1 ring-black/5">
							<div className="text-6xl mb-4">🔍</div>
							<div className="text-xl font-semibold mb-2">Ничего не найдено</div>
							<div className="text-neutral-600">
								{query ? `По запросу «${query}» товары не найдены` : 'Введите поисковый запрос'}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
