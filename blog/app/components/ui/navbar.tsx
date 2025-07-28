import { Link } from "react-router";
import { Search, Mail, Rss, Sun, Moon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuViewport,
} from "./navigation-menu";
import { Button } from "./button";

export default function Navbar() {
  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-gray-900">
              Your Blog Name
            </Link>
          </div>

          {/* Main Navigation */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/blog" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/categories" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                    Categories
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuViewport />
          </NavigationMenu>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>
            
            {/* Newsletter */}
            <Button variant="ghost" size="sm">
              <Mail className="h-4 w-4" />
            </Button>
            
            {/* RSS Feed */}
            <Button variant="ghost" size="sm">
              <Rss className="h-4 w-4" />
            </Button>
            
            {/* Dark mode toggle */}
            <Button variant="ghost" size="sm">
              <Sun className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
