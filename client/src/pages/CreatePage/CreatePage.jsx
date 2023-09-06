import React, { useContext, useState } from 'react'
import { Input } from 'antd'
import { useHttp } from '../../hooks/http.hook'
import { AuthContext } from '../../context/AuthContext'
import { LinkOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import './CreatePage.css'

export const CreatePage = () => {
  const [link, setLink] = useState('')
  const auth = useContext(AuthContext)
  const { request } = useHttp()
  const navigate = useNavigate()

  const handleChange = (event) => {
    setLink(event.target.value)
  }

  const handlePressEnter = async () => {
    try {
      const data = await request(
        '/api/link/generate',
        'POST',
        { from: link },
        {
          Authorization: `Bearer ${auth.token}`,
        }
      )
      navigate(`/detail/${data.link._id}`)
      console.log(data)
    } catch (error) {}
  }

  return (
    <div className="create-container">
      <span style={{ marginBottom: '10px' }}>Введите ссылку:</span>
      <Input
        onChange={handleChange}
        value={link}
        onPressEnter={handlePressEnter}
        prefix={<LinkOutlined />}
      />
    </div>
  )
}
