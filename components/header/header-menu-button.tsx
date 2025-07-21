import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { useSidebar } from "@/store/sidebar-store";

export function HeaderMenuButton() {
  const { openSidebar } = useSidebar();
  return (
    <Button
      variant="ghost"
      size="icon"
      className="lg:hidden"
      onClick={openSidebar}
    >
      <Menu className="h-6 w-6" />
    </Button>
  );
}
