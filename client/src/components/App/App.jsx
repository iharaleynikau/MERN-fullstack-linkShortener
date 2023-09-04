import React from 'react'
import { useRoutes } from '../../routes'
import { useAuth } from '../../hooks/auth.hook'
import { AuthContext } from '../../context/AuthContext'
import { Menu } from '../Menu/Menu'
import './App'
import { BrowserRouter } from 'react-router-dom'

export const App = () => {
  const { token, login, logout, userId } = useAuth()

  const isAuthenticated = !!token

  const routes = useRoutes(isAuthenticated)
  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isAuthenticated,
      }}
    >
      <BrowserRouter>
        {isAuthenticated && <Menu />}
        <div className="container">{routes}</div>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
