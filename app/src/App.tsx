import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import logo from '@img/logo.png'
import avatar from '@img/avatar.png'
import menu from '@img/menu.png'
import search from '@img/search.png'
import chevronDown from '@img/chevron-down.png'
import frame1 from '@img/Frame 1.png'
import frame21 from '@img/Frame 21.png'
import frame211 from '@img/Frame 211.png'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import ProductPage from './pages/Product'
import CartPage from './pages/Cart'
import CheckoutPage from './pages/Checkout'
import CategoryPage from './pages/Category'
import FavoritesPage from './pages/Favorites'
import OrdersPage from './pages/Orders'
import ContactsPage from './pages/Contacts'
import AboutPage from './pages/About'
import VacanciesPage from './pages/Vacancies'
import SearchPage from './pages/Search'
import DeskPage from './pages/Desk'

function Header() {
	return (
		<header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
			<div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
				<div className="flex items-center gap-4">
					<Link to="/" className="flex items-center">
						<img src={logo} alt="Северяночка" className="h-8" />
					</Link>
					<Link to="/catalog" className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition">
						<img src={menu} alt="Меню" className="h-4 w-4" />
						<span className="font-medium">Каталог</span>
					</Link>
				</div>
				
				{/* Поиск */}
				<div className="flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-3 py-2 flex-1 max-w-md mx-8">
					<img src={search} alt="Поиск" className="h-4 w-4 text-neutral-400" />
					<input 
						className="w-full outline-none text-sm" 
						placeholder="Найти товар" 
						onKeyDown={(e) => { 
							if (e.key === "Enter") { 
								const query = e.currentTarget.value; 
								if (query.trim()) window.location.href = `/search?q=${encodeURIComponent(query.trim())}`; 
							} 
						}}
					/>
				</div>
				
				<nav className="flex items-center gap-6">
					<div className="flex items-center gap-6">
						<Link to="/favorites" className="flex flex-col items-center gap-1">
							<img src={frame211} alt="Избранное" className="h-5 w-5" />
							<span className="text-xs text-neutral-600">Избранное</span>
						</Link>
						<Link to="/orders" className="flex flex-col items-center gap-1">
							<img src={frame1} alt="Заказы" className="h-5 w-5" />
							<span className="text-xs text-neutral-600">Заказы</span>
						</Link>
						<Link to="/cart" className="flex flex-col items-center gap-1 relative">
							<img src={frame21} alt="Корзина" className="h-5 w-5" />
							<span className="text-xs text-neutral-600">Корзина</span>
							<div className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">1</div>
						</Link>
					</div>
					<div className="flex items-center gap-2">
						<img src={avatar} alt="Аватар" className="h-8 w-8 rounded-full" />
						<span className="text-sm text-neutral-600">Алексей</span>
						<img src={chevronDown} alt="Меню" className="h-4 w-4 text-neutral-400" />
					</div>
				</nav>
			</div>
		</header>
	)
}

function Footer() {
	return (
		<footer className="border-t border-neutral-200 bg-neutral-50">
			<div className="mx-auto max-w-7xl px-4 py-8">
				<div className="text-center text-sm text-neutral-600">
					© 2024 Северяночка. Все права защищены.
				</div>
			</div>
		</footer>
	)
}

function Layout() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="flex-1 bg-neutral-50">
				<div className="mx-auto max-w-7xl px-4 py-8">
					<Outlet />
				</div>
			</main>
			<Footer />
		</div>
	)
}

function Page({ title }: { title: string }) {
	return (
		<div>
			<h1 className="text-4xl font-black mb-8">{title}</h1>
			<p>Страница в разработке...</p>
		</div>
	)
}

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="catalog" element={<Catalog />} />
					<Route path="category/:slug" element={<CategoryPage />} />
					<Route path="product/:id" element={<ProductPage />} />
					<Route path="favorites" element={<FavoritesPage />} />
					<Route path="cart" element={<CartPage />} />
					<Route path="checkout" element={<CheckoutPage />} />
					<Route path="orders" element={<OrdersPage />} />
					<Route path="contacts" element={<ContactsPage />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="vacancies" element={<VacanciesPage />} />
					<Route path="search" element={<SearchPage />} />
					<Route path="desk" element={<DeskPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
