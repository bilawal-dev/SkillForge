'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"

const steps = [
  { title: 'Personal Info', fields: ['name', 'email'] },
  { title: 'Account Setup', fields: ['password', 'confirm Password'] },
  { title: 'Preferences', fields: ['interests'] },
]

export default function SignUpPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    interests: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Handle sign-up logic here
      console.log('Sign up with:', formData)
    }
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-alt">
      <Header />
      <main className="pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h1 className="text-3xl font-bold mb-6 text-center">Create Your Account</h1>
              <Progress value={progress} className="mb-6" />
              <form onSubmit={handleSubmit} className="space-y-4">
                {steps[currentStep].fields.map((field) => (
                  <div key={field}>
                    <Label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
                    <Input
                      id={field}
                      name={field}
                      type={field.includes('password') ? 'password' : 'text'}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                ))}
                <Button type="submit" className="w-full">
                  {currentStep < steps.length - 1 ? 'Next' : 'Sign Up'}
                </Button>
              </form>
              {currentStep > 0 && (
                <Button
                  variant="link"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="mt-4"
                >
                  Back
                </Button>
              )}
              <div className="mt-6 text-center">
                <p>Already have an account?{' '}
                  <Link href="/signin" className="text-primary hover:underline">
                    Sign in
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

