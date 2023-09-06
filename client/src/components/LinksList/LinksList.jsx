import React from 'react'
import { NavLink } from 'react-router-dom'

export const LinksList = ({ links }) => {
  if (!links.lenght) {
    return <p>Нет ссылок</p>
  }

  return (
    <div className="links-list-container">
      {links.map((link, index) => {
        return (
          <div key={link._id}>
            <span>{index + 1}.</span>
            <span>Оригинальная: {link.from}</span>
            <span>Сокращённая: {link.to}</span>
            <NavLink to={`/detail/${link._id}`}>Открыть ссылку</NavLink>
          </div>
        )
      })}
    </div>
  )
}
