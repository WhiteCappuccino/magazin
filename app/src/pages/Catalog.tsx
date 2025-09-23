import { Link } from 'react-router-dom'
import hero from '@img/Size=1440,type=general.png'

const categories = [
	{ slug: 'milk', title: 'Молоко, сыр, яйцо' },
	{ slug: 'bread', title: 'Хлеб' },
	{ slug: 'fruits', title: 'Фрукты и овощи' },
	{ slug: 'frozen', title: 'Замороженные продукты' },
	{ slug: 'drinks', title: 'Напитки' },
	{ slug: 'sweets', title: 'Кондитерские изделия' },
	{ slug: 'tea', title: 'Чай, кофе' },
	{ slug: 'grocery', title: 'Бакалея' },
	{ slug: 'healthy', title: 'Здоровое питание' },
	{ slug: 'pets', title: 'Зоотовары' },
	{ slug: 'kids', title: 'Детское питание' },
	{ slug: 'meat', title: 'Мясо, птица, колбаса' },
	{ slug: 'house', title: 'Непродовольственные товары' },
]

export default function Catalog() {
	return (
		<div className="space-y-6">
			<h1 className="text-4xl font-black">Каталог</h1>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{categories.map(c => (
					<Link key={c.slug} to={`/category/${c.slug}`} className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
						<img src={hero} alt="" className="h-40 w-full object-cover opacity-80 transition group-hover:scale-105" />
						<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-emerald-600/80 to-transparent p-4 text-white">
							<div className="text-lg font-semibold drop-shadow">{c.title}</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
} 