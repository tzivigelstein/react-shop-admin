import '@/styles/tailwind.css'
import type { AppProps } from 'next/app'
import MainLayout from '@/layout/MainLayout'
import AuthProvider from '@/hooks/AuthProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AuthProvider>
  )
}
