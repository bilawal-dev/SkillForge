'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign-in logic here
    console.log('Sign in with:', email, password)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-alt">
      <Header />
      <main className="pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h1 className="text-3xl font-bold mb-6 text-center">Welcome Back</h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </form>
              <div className="mt-4 text-center">
                <Link href="/forgot-password" className="text-primary hover:underline">
                  Forgot your password?
                </Link>
              </div>
              <div className="mt-6 text-center">
                <p>Don't have an account?{' '}
                  <Link href="/signup" className="text-primary hover:underline">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

