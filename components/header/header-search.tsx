import { Search } from "lucide-react";
import { Input } from "../ui/input";

export function HeaderSearch() {
  return (
    <form className="relative flex flex-1 self-center" action="#" method="GET">
      <Search className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-muted-foreground pl-3" />
      <Input
        className="w-full pl-10"
        placeholder="Buscar productos, pedidos..."
        type="search"
      />
    </form>
  );
}
