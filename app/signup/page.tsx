'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const steps = [
  { title: 'Personal Info', fields: ['name', 'email'] },
  { title: 'Account Setup', fields: ['password', 'confirm password'] },
  { title: 'Preferences', fields: ['interests'] },
]

export default function SignUpPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
    interests: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name)
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (currentStep === steps.length - 2 && formData.password !== formData.confirmpassword) {
      toast.error("Passwords Don't Match");
      return;
    }

    setCurrentStep((prev) => prev + 1);

    if (currentStep >= steps.length - 1) {
      setTimeout(() => {
        toast.success("Account Created Successfully");
      }, 1500)

      setTimeout(() => {
        router.push('/');
      }, 2500)
    }
  }

  const progress = ((currentStep) / steps.length) * 100

  console.log(currentStep);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-alt">
      <Header />

      <Toaster />

      <main className="pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h1 className="text-3xl font-bold mb-6 text-center">Create Your Account</h1>
              <Progress value={progress || 5} className="mb-6 border border-blue-300" />
              <form onSubmit={handleSubmit} className="space-y-4">
                {progress >= 100 ? (
                  <div className='flex flex-col gap-3 my-5 justify-center items-center'>
                    <span className='text-slate-700 font-semibold text-xl font-sans'>Signing In</span>
                    <div className="w-12 h-12 border-[3px] border-t-[3px] border-t-blue-500 border-solid rounded-full animate-spin"></div>
                  </div>
                ) : (
                  <>
                    {steps[currentStep].fields.map((field) => (
                      <div key={field}>
                        <Label htmlFor={field} className='capitalize' >{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
                        <Input
                          id={field}
                          name={field.split(' ').join('')}
                          type={field.includes('password') ? 'password' : 'text'}
                          value={formData[field as keyof typeof formData]}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                    ))}
                  </>
                )}
                <Button type="submit" className="w-full" disabled={currentStep >= steps.length}>
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