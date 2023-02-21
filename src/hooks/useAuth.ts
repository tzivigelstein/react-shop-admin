import Fetching from '@/services/utils'
import { useContext, useState } from 'react'
import Cookie from 'js-cookie'
import { IUser } from '@/services/types'
import services from '@/services'
import AuthContext, { LoginParameters } from '@/hooks/AuthContext'

export default function useAuth() {
  return useContext(AuthContext)
}

export interface IError {
  name: string
  message: string
}

export function useAuthProvider() {
  const [user, setUser] = useState<IUser | null>(null)
  const [error, setError] = useState<IError | null>(null)
  const [loading, setLoading] = useState(false)

  const handleError = (error: Error) =>
    setError({
      name: error.name,
      message: error.message
    })

  const login = async (...data: LoginParameters) => {
    setLoading(true)
    const tokens = await services.auth
      .login(...data)
      .catch(handleError)
      .finally(() => setLoading(false))

    if (tokens) {
      const { access_token } = tokens
      Cookie.set('token', access_token, { expires: 5 })

      Fetching.headers['Authorization'] = `Bearer ${access_token}`
    }

    setLoading(true)

    const user = await services.auth
      .getProfile()
      .catch(handleError)
      .finally(() => setLoading(false))

    if (user) setUser(user)
  }

  return {
    user,
    loading,
    error,
    login
  }
}
