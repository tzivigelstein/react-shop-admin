import services from '@/services'
import { IUser } from '@/services/types'
import { createContext } from 'react'

type Login = typeof services.auth.login
export type LoginParameters = Parameters<Login>

interface IAuthContext {
  user: IUser | null
  login: (...args: LoginParameters) => void
}

export default createContext<IAuthContext>({
  user: null,
  login: ({ email, password }) => Promise<void>
})
