import React from 'react'
import './LinkCard.css'

export const LinkCard = ({ link }) => {
  return (
    <div className="link-container">
      <h2>Данные о ссылке:</h2>
      <p>
        Ваша ссылка:{' '}
        <a href={link.to} target="_blank" rel="noreferrer noopener">
          {link.to}
        </a>
      </p>
      <p>
        Откуда:{' '}
        <a href={link.from} target="_blank" rel="noreferrer noopener">
          {link.from}
        </a>
      </p>
      <p>
        Количество кликов по ссылке: <strong>{link.clicks}</strong>
      </p>
      <p>
        Дата создания:{' '}
        <strong>{new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </div>
  )
}
