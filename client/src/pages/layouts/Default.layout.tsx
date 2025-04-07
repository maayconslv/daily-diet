import { Sidebar } from '@/components/Sidebar'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  )
}
