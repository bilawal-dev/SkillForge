'use client'

import { useEffect, useRef } from 'react'
import { UserPlus, ClipboardList, Lightbulb, Target } from 'lucide-react'

const steps = [
  { icon: UserPlus, title: 'Sign Up', description: 'Create your account and start your journey.' },
  { icon: ClipboardList, title: 'Assess Skills', description: 'Take a quick quiz to map your current abilities.' },
  { icon: Lightbulb, title: 'Get Recommendations', description: 'Receive personalized courses tailored to your goals.' },
  { icon: Target, title: 'Achieve Goals', description: 'Track progress and earn certifications.' },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    const stepElements = sectionRef.current?.querySelectorAll('.step-item')
    stepElements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary" />
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={index} className="step-item relative opacity-0">
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="w-1/2" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-6 z-10">
                    <div className="w-12 h-12 rounded-full border-4 border-background bg-primary flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="w-1/2 p-4">
                    <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                      <h3 className="text-xl font-semibold mb-2 line-clamp-2">{step.title}</h3>
                      <p className="text-foreground/80">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

