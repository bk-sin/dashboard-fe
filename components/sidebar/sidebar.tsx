"use client";

import { usePathname } from "next/navigation";
import SidebarContent from "./sidebar-content";
import { useSidebar } from "@/store/sidebar-store";

export function Sidebar() {
  const { isOpen, closeSidebar } = useSidebar();
  const pathname = usePathname();
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={closeSidebar} />
          <div className="fixed left-0 top-0 h-full w-64 bg-background border-r">
            <SidebarContent pathname={pathname} />
          </div>
        </div>
      )}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col grow border-r bg-background">
          <SidebarContent pathname={pathname} />
        </div>
      </div>
    </>
  );
}
