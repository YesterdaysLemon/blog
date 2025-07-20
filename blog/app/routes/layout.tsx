import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "../components/ui/navigation-menu"
  import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 bg-gray-100">
      <NavigationMenu>  
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent>
                <Link to="/">Home</Link>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuIndicator/>
        </NavigationMenuList>
        <NavigationMenuViewport />
      </NavigationMenu>
      <Outlet />
    </div>
  );
}