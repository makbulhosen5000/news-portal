
import Link from 'next/link'
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { FiMenu } from "react-icons/fi";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"

function Navbar() {
  return (
    <header className="py-4 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">
            NewsPortal
          </Link>
        </div>

        {/* Desktop Menu */}
        <NavigationMenu className='hidden lg:flex'>
        <NavigationMenuList>
           <NavigationMenuLink href='/news'>News</NavigationMenuLink>
            <NavigationMenuItem>
            <NavigationMenuLink href='/services'>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            </NavigationMenuLink>
            <NavigationMenuContent>
                <ul>
                    <li>
                    <NavigationMenuLink href='/services/lara-react'>Laravel api & React Full-Stack</NavigationMenuLink>
                    </li>
                    <li>
                    <NavigationMenuLink href='/services/next'>NextJs Full-Stack</NavigationMenuLink>
                    </li>
                   <li>
                    <NavigationMenuLink href='/services/seo'>SEO Optimization</NavigationMenuLink>
                   </li>
                </ul>
            </NavigationMenuContent>
            </NavigationMenuItem>
        <NavigationMenuLink href='/about'>About</NavigationMenuLink>
        <NavigationMenuLink href='/contact'>Contract</NavigationMenuLink>
        </NavigationMenuList>
        </NavigationMenu>

        {/* Right Section: Color switcher & login */}
        <div className='hidden lg:flex items-center space-x-4'>
            <div className='flex items-center'>
                <span className='mr-2'>Dark Mode</span>
                <Switch/>
            </div>
           <div><Button className='ml-2' variant="default">Login</Button></div>
           {/* mobile humber menu */}
           <div className='lg:hidden'>
              <Button variant="outline"><FiMenu size={24} /></Button>
           </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
