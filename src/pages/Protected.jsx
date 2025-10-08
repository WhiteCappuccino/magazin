import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api, getAuthToken } from '../api'

const Protected = ({ children }) => {
  const navigate = useNavigate()
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const token = getAuthToken()
    if (!token) {
      navigate('/login')
      return
    }
    api.me().then(() => setChecking(false)).catch(() => {
      navigate('/login')
    })
  }, [navigate])

  if (checking) return null
  return <>{children}</>
}

export default Protected


