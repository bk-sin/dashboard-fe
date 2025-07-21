import { HeaderMenuButton } from "./header/header-menu-button";
import { HeaderSearch } from "./header/header-search";
import { HeaderUserMenu } from "./header/header-user-menu";

export default function Header() {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b bg-background px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <HeaderMenuButton />
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <HeaderSearch />
        <HeaderUserMenu />
      </div>
    </div>
  );
}
