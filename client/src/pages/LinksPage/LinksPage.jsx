import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { AuthContext } from '../../context/AuthContext'
import './LinksPage.css'
import { Loader } from '../../components/Loader/Loader'
import { LinksList } from '../../components/LinksList/LinksList'

export const LinksPage = () => {
  const [links, setLinks] = useState([])
  const { isLoading, request } = useHttp()
  const { token } = useContext(AuthContext)

  const fetchLinks = useCallback(async () => {
    try {
      const fetched = await request('/api/link', 'GET', null, {
        Authorization: `Bearer ${token}`,
      })
      setLinks(fetched)
    } catch (e) {}
  }, [token, request])

  useEffect(() => {
    fetchLinks()
  }, [fetchLinks])

  if (isLoading) {
    return <Loader />
  }

  console.log(links)

  return (
    <div className="links-container">
      {!isLoading && <LinksList links={links} />}
    </div>
  )
}
