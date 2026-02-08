import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from './ui/navigation-menu'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 flex h-16 w-full justify-center bg-white shadow-sm">
      <NavigationMenu className="flex w-full max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg 
            className="text-blue-600" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="24" 
            height="24"
            aria-hidden="true"
          >
            <path 
              fill="currentColor" 
              d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z" 
            />
          </svg>
          <span className="text-xl font-semibold">Dilibe</span>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span className={`h-0.5 w-full bg-gray-800 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-full bg-gray-800 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-full bg-gray-800 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <NavigationMenuList className="hidden md:flex flex-row gap-8">
          <NavigationMenuItem>
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
          </NavigationMenuItem>
          {/* <NavigationMe enuItem> */}
          <NavigationMenuItem>
            <a 
              href="https://medium.com/@dilibe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              Blogs
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-16 bg-white md:hidden z-40">
            <NavigationMenuList className="flex flex-col gap-4 p-6">
              <NavigationMenuItem>
                <Link to="/" onClick={closeMenu} className="block py-2 text-lg hover:text-blue-600">Home</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" onClick={closeMenu} className="block py-2 text-lg hover:text-blue-600">About</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/projects" onClick={closeMenu} className="block py-2 text-lg hover:text-blue-600">Projects</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/docs" onClick={closeMenu} className="block py-2 text-lg hover:text-blue-600">Docs</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a 
                  href="https://medium.com/@dilibe" 
                  onClick={closeMenu}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block py-2 text-lg hover:text-blue-600"
                >
                  Blogs
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </div>
        )}
      </NavigationMenu>
    </header>
  )
}

export default Header