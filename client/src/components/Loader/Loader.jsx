import { Spin } from 'antd'
import './Loader.css'

export const Loader = () => {
  return (
    <div className="loader-wrapper">
      <Spin size="large" />
    </div>
  )
}
