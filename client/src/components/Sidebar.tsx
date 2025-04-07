import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from './ui/sidebar'
import { ChevronDown, ChevronUp, Home, Laptop, LogOut, Moon, MoonStar, Sun } from 'lucide-react'

export function SidebarApp() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Daily Diet</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href='/dashboard'>
                    <Home />
                    <span>Home</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <Collapsible defaultOpen={false}>
                  <CollapsibleTrigger className='flex items-center w-full hover:bg-muted/50 group justify-between'>
                    <SidebarMenuButton className='cursor-pointer'>
                      <MoonStar className='h-4 w-4' />
                      <span>Appearance</span>
                      <ChevronDown className='h-4 w-4 transition-transform group-data-[state=open]:rotate-180' />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>

                  <CollapsibleContent className='pl-8 py-1 space-y-1'>
                    <button className='flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground block'>
                      <Moon className='h-4 w-4' /> Dark
                    </button>
                    <button className='flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground block'>
                      <Sun className='h-4 w-4' /> Light
                    </button>
                    <button className='flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground block'>
                      <Laptop className='h-4 w-4' />
                      System
                    </button>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className='p-2 h-12 cursor-pointer'>
                  <div className='flex items-center gap-1'>
                    <img src='https://github.com/maayconslv.png' alt='foto do github' className='h-8 w-8 rounded' />
                    <div className='flex flex-col ml-2 text-xs'>
                      <strong>mayconslv</strong>
                      <span
                        className='overflow-hidden whitespace-nowrap text-ellipsis text-muted-foreground'
                        style={{
                          maskImage: 'linear-gradient(to right, black 80%, transparent)',
                          WebkitMaskImage: 'linear-gradient(to right, black 80%, transparent)',
                        }}
                      >
                        mayconslv.contato@gmail.com
                      </span>
                    </div>
                  </div>
                  <ChevronUp className='ml-auto' />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent side='top' className='w-[--radix-popper-anchor-width]'>
                <DropdownMenuItem>
                  <LogOut />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
