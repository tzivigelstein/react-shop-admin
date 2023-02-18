import Header from '@/components/Header'
import Nav from '@/common/Nav'

interface Props {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <div className="min-h-full">
        <main>
          <Header />
          <Nav />
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
            {children}
          </div>
        </main>
      </div>
    </>
  )
}
