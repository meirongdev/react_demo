import { Header } from './Header.jsx'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className='container'>
      <Header />
      <Outlet />
    </div>
  )
}
