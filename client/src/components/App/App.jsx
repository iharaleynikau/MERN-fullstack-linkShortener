import React from 'react'
import { useRoutes } from '../../routes'
import { useAuth } from '../../hooks/auth.hook'
import { AuthContext } from '../../context/AuthContext'
import { Menu } from '../Menu/Menu'
import { BrowserRouter } from 'react-router-dom'
import { Loader } from '../Loader/Loader'
import './App'

export const App = () => {
  const { token, login, logout, userId, isReady } = useAuth()

  const isAuthenticated = !!token

  const routes = useRoutes(isAuthenticated)

  if (!isReady) {
    return <Loader />
  }

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
