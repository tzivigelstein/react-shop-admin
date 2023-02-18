import { ReactNode } from 'react'
import { useAuthProvider } from '@/hooks/useAuth'
import AuthContext from '@/hooks/AuthContext'

interface Props {
  children: ReactNode
}

export default function AuthProvider({ children }: Props) {
  const auth = useAuthProvider()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
