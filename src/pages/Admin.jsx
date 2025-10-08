import React, { useEffect, useMemo, useState } from 'react'
import Header from '../components/Header'
import { api, clearAuthToken } from '../api'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  const [me, setMe] = useState(null)
  const [error, setError] = useState('')
  const [products, setProducts] = useState([])
  const [form, setForm] = useState({ name:'', price:'', image:'', description:'' })
  const [editingId, setEditingId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [productQuery, setProductQuery] = useState('')
  const [userQuery, setUserQuery] = useState('')
  const [roleFilter, setRoleFilter] = useState('all')
  const navigate = useNavigate()

  useEffect(() => {
    api.me().then(setMe).catch(e => setError(e.message))
    api.products().then(setProducts).catch(() => {})
    api.users().then(setUsers).catch(() => {})
  }, [])

  const logout = () => {
    clearAuthToken()
    navigate('/login')
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const payload = { name: form.name, price: form.price, image: form.image, description: form.description }
      if (editingId) {
        const updated = await api.updateProduct(editingId, payload)
        setProducts(prev => prev.map(p => p.id === editingId ? updated : p))
        setEditingId(null)
      } else {
        const created = await api.createProduct(payload)
        setProducts(prev => [created, ...prev])
      }
      setForm({ name:'', price:'', image:'', description:'' })
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const onEdit = (p) => {
    setEditingId(p.id)
    setForm({ name: p.name || '', price: p.price || '', image: p.image || '', description: p.description || '' })
  }

  const onDelete = async (id) => {
    if (!confirm('Удалить товар?')) return
    try {
      await api.deleteProduct(id)
      setProducts(prev => prev.filter(p => p.id !== id))
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <>
      <Header />
      <div className="sale-head" style={{marginTop: '24px'}}>
        <h1>Админ панель</h1>
      </div>
      <div style={{maxWidth: 960, margin:'16px auto', background:'#FFF', padding:16, textAlign:'left'}}>
        {error && <div style={{color:'#FF6633'}}>{error}</div>}
        {me ? (
          <>
            <p><b>Пользователь:</b> {me.name || me.email}</p>
            <p><b>Email:</b> {me.email}</p>
            <button className="back-btn" onClick={logout}>Выйти</button>

            <h2 style={{marginTop:24}}>Товары</h2>
            <div style={{display:'flex', gap:12, alignItems:'center', margin:'8px 0'}}>
              <input placeholder="Поиск по названию" className="search-input" value={productQuery} onChange={e=>setProductQuery(e.target.value)} style={{flex:1}} />
            </div>
            <form onSubmit={onSubmit} style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, margin:'12px 0'}}>
              <input placeholder="Название" className="search-input" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
              <input placeholder="Цена" className="search-input" value={form.price} onChange={e=>setForm({...form, price:e.target.value})} required />
              <input placeholder="URL изображения" className="search-input" value={form.image} onChange={e=>setForm({...form, image:e.target.value})} />
              <input placeholder="Описание" className="search-input" value={form.description} onChange={e=>setForm({...form, description:e.target.value})} />
              <button className="checkout-btn" type="submit" disabled={loading}>{editingId ? 'Сохранить' : 'Создать'}</button>
              {editingId && <button type="button" className="back-btn" onClick={()=>{setEditingId(null); setForm({ name:'', price:'', image:'', description:'' })}}>Отмена</button>}
            </form>

            <div style={{overflowX:'auto'}}>
              <table style={{width:'100%', borderCollapse:'collapse'}}>
                <thead>
                  <tr>
                    <th style={{textAlign:'left', borderBottom:'1px solid #eee', padding:'8px'}}>Название</th>
                    <th style={{textAlign:'left', borderBottom:'1px solid #eee', padding:'8px'}}>Цена</th>
                    <th style={{textAlign:'left', borderBottom:'1px solid #eee', padding:'8px'}}>Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {products.filter(p => p.name?.toLowerCase().includes(productQuery.toLowerCase())).map(p => (
                    <tr key={p.id}>
                      <td style={{padding:'8px'}}>{p.name}</td>
                      <td style={{padding:'8px'}}>{p.price}</td>
                      <td style={{padding:'8px', display:'flex', gap:8}}>
                        <button className="qty-btn" onClick={()=>onEdit(p)}>Редакт.</button>
                        <button className="remove-btn" onClick={()=>onDelete(p.id)} title="Удалить">×</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 style={{marginTop:32}}>Пользователи</h2>
            <div style={{display:'flex', gap:12, alignItems:'center', margin:'8px 0'}}>
              <input placeholder="Поиск по имени или email" className="search-input" value={userQuery} onChange={e=>setUserQuery(e.target.value)} style={{flex:1}} />
              <select className="search-input" value={roleFilter} onChange={e=>setRoleFilter(e.target.value)} style={{width:220}}>
                <option value="all">Все роли</option>
                <option value="admin">Администраторы</option>
                <option value="user">Пользователи</option>
              </select>
            </div>
            <div style={{overflowX:'auto'}}>
              <table style={{width:'100%', borderCollapse:'collapse'}}>
                <thead>
                  <tr>
                    <th style={{textAlign:'left', borderBottom:'1px solid #eee', padding:'8px'}}>Имя</th>
                    <th style={{textAlign:'left', borderBottom:'1px solid #eee', padding:'8px'}}>Email</th>
                    <th style={{textAlign:'left', borderBottom:'1px solid #eee', padding:'8px'}}>Роль</th>
                    <th style={{textAlign:'left', borderBottom:'1px solid #eee', padding:'8px'}}>Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {users
                    .filter(u => {
                      const q = userQuery.toLowerCase()
                      const matchesQuery = !q || u.name?.toLowerCase().includes(q) || u.email?.toLowerCase().includes(q)
                      const matchesRole = roleFilter === 'all' || (u.role || 'user') === roleFilter
                      return matchesQuery && matchesRole
                    })
                    .map(u => (
                    <tr key={u.id}>
                      <td style={{padding:'8px'}}>{u.name || '-'}</td>
                      <td style={{padding:'8px'}}>{u.email}</td>
                      <td style={{padding:'8px'}}>{u.role || 'user'}</td>
                      <td style={{padding:'8px', display:'flex', gap:8}}>
                        <button className="qty-btn" onClick={async()=>{
                          const nextRole = (u.role === 'admin') ? 'user' : 'admin'
                          try {
                            const updated = await api.updateUser(u.id, { role: nextRole })
                            setUsers(prev => prev.map(x => x.id === u.id ? updated : x))
                          } catch(e){ setError(e.message) }
                        }}>Сменить роль</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <p>Загрузка...</p>
        )}
      </div>
    </>
  )
}

export default Admin


