import services from '@/services'
import { IUser } from '@/services/types'
import { createContext } from 'react'
import { IError } from '@/hooks/useAuth'

type Login = typeof services.auth.login
export type LoginParameters = Parameters<Login>

interface IAuthContext {
  user: IUser | null
  loading: boolean
  error: IError | null
  login: (...args: LoginParameters) => void
}

export default createContext<IAuthContext>({
  user: null,
  loading: false,
  error: null,
  login: ({ email, password }) => Promise<void>
})
