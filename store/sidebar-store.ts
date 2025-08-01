import { create } from "zustand";

export type SidebarState = {
  isOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
};

export const useSidebar = create<SidebarState>((set) => ({
  isOpen: false,
  openSidebar: () => set({ isOpen: true }),
  closeSidebar: () => set({ isOpen: false }),
}));
