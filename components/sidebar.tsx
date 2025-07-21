import { usePathname } from "next/navigation"
import { useState } from "react"
import SidebarContent from "./sidebar-content"

export function Sidebar () {
    const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  return (
    <>
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-64 bg-background border-r">
            <SidebarContent pathname={pathname} />
          </div>
        </div>
      )}

      {/* Sidebar desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow border-r bg-background">
          <SidebarContent pathname={pathname} />
        </div>
      </div>
    </>
  )
}