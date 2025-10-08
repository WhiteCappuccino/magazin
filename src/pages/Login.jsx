import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { api, setAuthToken } from '../api'
import Header from '../components/Header'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await api.login({ email, password })
      if (res?.token) setAuthToken(res.token)
      navigate('/admin')
    } catch (err) {
      setError(err.message || 'Ошибка авторизации')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <div className="sale-head" style={{marginTop: '24px'}}>
        <h1>Вход</h1>
      </div>
      <form onSubmit={onSubmit} style={{maxWidth:480, margin:'16px auto', background:'#FFF', padding:16}}>
        {error && <div style={{color:'#FF6633', marginBottom:12}}>{error}</div>}
        <div style={{display:'flex', flexDirection:'column', gap:8}}>
          <label>
            Email
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="search-input" style={{width:'100%'}} required />
          </label>
          <label>
            Пароль
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="search-input" style={{width:'100%'}} required />
          </label>
          <button className="checkout-btn" type="submit" disabled={loading}>{loading ? 'Входим...' : 'Войти'}</button>
          <div>Нет аккаунта? <Link to="/register">Регистрация</Link></div>
        </div>
      </form>
    </>
  )
}

export default Login


