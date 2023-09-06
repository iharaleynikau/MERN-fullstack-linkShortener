import React, { useState, useEffect, useContext } from 'react'
import './AuthPage.css'
import { Button, Input } from 'antd'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export const AuthPage = () => {
  const { isLoading, error, request, clearError } = useHttp()
  const auth = useContext(AuthContext)

  const navigate = useNavigate()

  const message = useMessage()

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form })
      message(data.message)
    } catch (error) {}
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form })
      auth.login(data.token, data.userId)
      navigate('/create')
    } catch (error) {}
  }

  return (
    <div className="auth-container">
      <h1 className="auth-h1">Link-Shortener / авторизация</h1>
      <form className="auth-form">
        <div>
          <label>
            Введите почту:
            <Input name="email" value={form.email} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Введите пароль:
            <Input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="auth-form__buttons-container">
          <Button
            onClick={loginHandler}
            size="large"
            type="primary"
            style={{ marginRight: '15px' }}
            loading={isLoading}
          >
            Войти
          </Button>
          <Button onClick={registerHandler} loading={isLoading} size="large">
            Регистрация
          </Button>
        </div>
      </form>
    </div>
  )
}
