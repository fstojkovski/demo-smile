import { createRootRoute, Outlet } from '@tanstack/react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
