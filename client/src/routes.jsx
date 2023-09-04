import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LinksPage } from './pages/LinksPage/LinksPage'
import { CreatePage } from './pages/CreatePage/CreatePage'
import { DetailPage } from './pages/DetailPage/DetailPage'
import { AuthPage } from './pages/AuthPage/AuthPage'

export const useRoutes = (isAuthenticated) => {
  console.log(isAuthenticated)
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/" exact element={<LinksPage />} />
        <Route path="/links" exact element={<LinksPage />} />
        <Route path="/create" exact element={<CreatePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
    </Routes>
  )
}
