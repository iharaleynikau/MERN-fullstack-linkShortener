import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Menu.css'
import { AuthContext } from '../../context/AuthContext'

export const Menu = () => {
  const auth = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogout = (event) => {
    event.preventDefault()
    auth.logout()
    navigate('/')
  }

  return (
    <div className="menu-container">
      <nav className="menu__nav">
        <ul className="menu__ul">
          <li>
            <NavLink
              to="/create"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Создать
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/links"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Ссылки
            </NavLink>
          </li>
          <li>
            <a onClick={handleLogout} href="">
              Выйти
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
