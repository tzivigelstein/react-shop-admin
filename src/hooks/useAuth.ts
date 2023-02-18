import { useContext, useState } from 'react'
import Cookie from 'js-cookie'
import { IUser } from '@/services/types'
import services from '@/services'
import AuthContext, { LoginParameters } from '@/hooks/AuthContext'

export default function useAuth() {
  return useContext(AuthContext)
}

export function useAuthProvider() {
  const [user, setUser] = useState<IUser | null>(null)

  const login = async (...data: LoginParameters) => {
    const user = await services.auth.login(...data)

    setUser(user)
  }

  return {
    user,
    login
  }
}
