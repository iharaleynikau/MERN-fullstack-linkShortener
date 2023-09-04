import { useCallback } from 'react'
import { notification } from 'antd'

export const useMessage = () => {
  return useCallback((text, type = 'success') => {
    if (text) {
      return notification.info({
        message: text,
        placement: 'top',
      })
    }
  }, [])
}
