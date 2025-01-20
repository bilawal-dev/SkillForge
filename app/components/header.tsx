'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className={`flex items-center justify-between h-16 rounded-full my-2 sm:my-4 px-4 sm:px-10 ${isScrolled ? 'bg-background/50 backdrop-blur-md shadow-md' : ''}`}>
          <Link href="/" className="h-18">
            <Image src={'/Logo.PNG'} alt='Skill Forge' height={110} width={110} className='h-16 w-24 sm:w-28 sm:h-18'/>
          </Link>
          <div className="hidden md:flex gap-8 items-center font-semibold">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/privacy">Privacy Policy</NavLink>
          </div>
          <div className="hidden md:flex gap-3">
            <Button asChild variant="outline">
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="h-10 w-10" /> : <Menu className="h-10 w-10" />}
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </nav>
        
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden backdrop-blur-md absolute top-20 left-0 right-0 bg-white shadow-lg flex flex-col items-center gap-6 py-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/privacy">Privacy Policy</NavLink>
            <Button asChild variant="outline" className="w-3/4">
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button asChild className="w-3/4">
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-foreground/80 hover:text-foreground transition-colors">
      {children}
    </Link>
  )
}