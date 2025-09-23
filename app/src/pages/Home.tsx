import type { Product } from '../components/ProductCard'
import { ProductCard } from '../components/ProductCard'
import hero from '@img/Size=1440,type=general.png'
import blinchiki from '@img/blinchiki.png'
import kolbasa2 from '@img/kolbasa2.png'
import moloko from '@img/moloko.png'
import sosiski from '@img/sosiski.png'
import aboutBanner from '@img/Size=1440, type=about-us.png'
import general from '@img/Size=1440,type=general.png'
import { useState } from 'react'

const mock: Product[] = [
	{ id: '1', title: 'Г/Ц Блинчики с мясом вес, Россия', price: 44.50, oldPrice: 50.50, image: blinchiki, rating: 3, discountPercent: 50 },
	{ id: '2', title: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное 3.2% 1л', price: 44.50, oldPrice: 50.50, image: moloko, rating: 3, discountPercent: 50 },
	{ id: '3', title: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...', price: 44.50, oldPrice: 50.50, image: kolbasa2, rating: 4, discountPercent: 50 },
	{ id: '4', title: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...', price: 44.50, oldPrice: 50.50, image: sosiski, rating: 4, discountPercent: 50 }
]

const stores = [
	{ id: 1, name: 'п.Щельяюр', address: 'ул. Центральная, 15', phone: '+7 82140 92619', hours: '8:00 - 22:00' },
	{ id: 2, name: 'д.Вертеп', address: 'ул. Лесная, 8', phone: '+7 82140 92620', hours: '8:00 - 22:00' },
	{ id: 3, name: 'с.Краснобор', address: 'ул. Школьная, 22', phone: '+7 82140 92621', hours: '8:00 - 22:00' },
	{ id: 4, name: 'д.Диюр', address: 'ул. Полевая, 3', phone: '+7 82140 92622', hours: '8:00 - 22:00' }
]

function MapComponent() {
	const [selectedStore, setSelectedStore] = useState(1)

	return (
		<div className="space-y-4">
			{/* Кнопки выбора магазинов - прямоугольные как в оригинале */}
			<div className="flex flex-wrap gap-3">
				{stores.map(store => (
					<button
						key={store.id}
						onClick={() => setSelectedStore(store.id)}
						className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
							selectedStore === store.id
								? 'bg-emerald-600 text-white'
								: 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
						}`}
					>
						{store.name}
					</button>
				))}
			</div>

			{/* Карта на всю ширину */}
			<div className="relative">
				<div className="h-96 w-full bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-lg border border-neutral-200 overflow-hidden">
					<div className="relative h-full w-full">
						{/* Фон карты с более реалистичным видом */}
						<div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50"></div>
						
						{/* Имитация дорог */}
						<div className="absolute inset-0">
							{/* Горизонтальные дороги */}
							<div className="absolute top-1/4 left-0 right-0 h-1 bg-neutral-300"></div>
							<div className="absolute top-1/2 left-0 right-0 h-1 bg-neutral-300"></div>
							<div className="absolute top-3/4 left-0 right-0 h-1 bg-neutral-300"></div>
							
							{/* Вертикальные дороги */}
							<div className="absolute left-1/4 top-0 bottom-0 w-1 bg-neutral-300"></div>
							<div className="absolute left-1/2 top-0 bottom-0 w-1 bg-neutral-300"></div>
							<div className="absolute left-3/4 top-0 bottom-0 w-1 bg-neutral-300"></div>
						</div>
						
						{/* Маркеры магазинов */}
						{stores.map((store, index) => (
							<div 
								key={store.id}
								className={`absolute group cursor-pointer transition-all duration-300 ${
									selectedStore === store.id ? 'z-10' : 'z-0'
								}`}
								style={{
									left: `${15 + (index * 25)}%`,
									top: `${25 + (index % 2) * 35}%`
								}}
								onClick={() => setSelectedStore(store.id)}
							>
								{/* Маркер - красный как в оригинале */}
								<div className="relative">
									<div className={`w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center transition-all duration-300 ${
										selectedStore === store.id 
											? 'bg-red-600 scale-125' 
											: 'bg-red-500 hover:scale-110'
									}`}>
										<div className="w-3 h-3 bg-white rounded-full"></div>
									</div>
									
									{/* Всплывающая подсказка */}
									<div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 transition-all duration-300 pointer-events-none ${
										selectedStore === store.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
									}`}>
										<div className="bg-white rounded-lg shadow-lg p-3 border border-neutral-200 min-w-48">
											<div className="text-sm font-semibold text-neutral-800">{store.name}</div>
											<div className="text-xs text-neutral-600">{store.address}</div>
											<div className="text-xs text-neutral-600">{store.phone}</div>
											<div className="text-xs text-emerald-600">{store.hours}</div>
										</div>
										{/* Стрелка */}
										<div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
									</div>
								</div>
							</div>
						))}
						
						{/* Легенда карты */}
						<div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-lg p-3 shadow-sm">
							<div className="text-sm font-semibold text-neutral-800 mb-2">Наши магазины</div>
							<div className="flex items-center gap-2">
								<div className="w-3 h-3 bg-red-500 rounded-full"></div>
								<span className="text-xs text-neutral-600">Магазин</span>
							</div>
						</div>
						
						{/* Информация о выбранном магазине */}
						{selectedStore && (
							<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur rounded-lg p-3 shadow-sm max-w-xs">
								<div className="text-sm font-semibold text-neutral-800">
									{stores.find(s => s.id === selectedStore)?.name}
								</div>
								<div className="text-xs text-neutral-600">
									{stores.find(s => s.id === selectedStore)?.address}
								</div>
								<div className="text-xs text-neutral-600">
									{stores.find(s => s.id === selectedStore)?.phone}
								</div>
								<div className="text-xs text-emerald-600">
									{stores.find(s => s.id === selectedStore)?.hours}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default function Home() {
	return (
		<div className="space-y-12">
			<section className="relative overflow-hidden rounded-2xl bg-white">
				<img src={hero} alt="Баннер" className="absolute inset-0 h-full w-full object-cover opacity-80" />
				<div className="relative z-10 p-12">
					<h2 className="text-4xl font-black text-white mb-4">Добро пожаловать в Северяночку!</h2>
					<p className="text-xl text-white/90 mb-6">Свежие продукты каждый день</p>
					<button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">
						Перейти в каталог
					</button>
				</div>
			</section>

			<section>
				<div className="flex items-center justify-between mb-5">
					<h3 className="text-3xl font-black">Акции</h3>
					<a href="#" className="text-emerald-600 hover:underline">Все акции →</a>
				</div>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{mock.map(p => <ProductCard key={p.id} product={p} />)}
				</div>
			</section>

			<section>
				<div className="flex items-center justify-between mb-5">
					<h3 className="text-3xl font-black">Новинки</h3>
					<a href="#" className="text-emerald-600 hover:underline">Все новинки →</a>
				</div>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{mock.map(p => <ProductCard key={`new-${p.id}`} product={{...p, id: `new-${p.id}`}} />)}
				</div>
			</section>

			<section>
				<h3 className="mb-5 text-3xl font-black">Специальные предложения</h3>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					<div className="rounded-2xl bg-white p-8 ring-1 ring-black/5">
						<h4 className="text-xl font-bold mb-3">Бесплатная доставка</h4>
						<p className="text-neutral-600 mb-4">При заказе от 2000 рублей</p>
						<button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition">
							Подробнее
						</button>
					</div>
					<div className="rounded-2xl bg-white p-8 ring-1 ring-black/5">
						<h4 className="text-xl font-bold mb-3">Карта лояльности</h4>
						<p className="text-neutral-600 mb-4">Накопительные бонусы и скидки</p>
						<button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition">
							Оформить
						</button>
					</div>
				</div>
			</section>

			<section>
				<h3 className="mb-5 text-3xl font-black">Наши магазины</h3>
				<MapComponent />
			</section>

			<section>
				<h3 className="mb-5 text-3xl font-black">Статьи</h3>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="rounded-2xl bg-white overflow-hidden ring-1 ring-black/5">
						<img src={aboutBanner} alt="Статья" className="h-48 w-full object-cover" />
						<div className="p-6">
							<h4 className="text-lg font-bold mb-2">Как выбрать свежие продукты</h4>
							<p className="text-neutral-600 text-sm">Полезные советы по выбору качественных продуктов</p>
						</div>
					</div>
					<div className="rounded-2xl bg-white overflow-hidden ring-1 ring-black/5">
						<img src={aboutBanner} alt="Статья" className="h-48 w-full object-cover" />
						<div className="p-6">
							<h4 className="text-lg font-bold mb-2">Здоровое питание</h4>
							<p className="text-neutral-600 text-sm">Рекомендации по составлению здорового рациона</p>
						</div>
					</div>
					<div className="rounded-2xl bg-white overflow-hidden ring-1 ring-black/5">
						<img src={aboutBanner} alt="Статья" className="h-48 w-full object-cover" />
						<div className="p-6">
							<h4 className="text-lg font-bold mb-2">Сезонные продукты</h4>
							<p className="text-neutral-600 text-sm">Что покупать в разное время года</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
