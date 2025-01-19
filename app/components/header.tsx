'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

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
        <nav className={`flex items-center justify-between h-16 rounded-full my-4 px-10 ${isScrolled ? 'bg-background/50 backdrop-blur-md shadow-md' : ''}`}>
          <Link href="/" className="text-3xl font-bold text-primary">
            SkillForge
          </Link>
          <div className="hidden md:ps-20 md:flex gap-8 items-center font-semibold">
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
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </nav>
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