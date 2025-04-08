import { SidebarApp } from '@/components/Sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <SidebarProvider>
      <SidebarApp />
      <main className='bg-stone-200 w-full p-4'>
        {/* <SidebarTrigger /> */}
        <Outlet />
      </main>
    </SidebarProvider>
  )
}
