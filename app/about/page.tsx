'use client'

import { useEffect, useRef } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const timelineRef = useRef<HTMLDivElement>(null)

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

    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item')
    timelineItems?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-alt">
      <Header />
      <main className="pt-32">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Our Mission
            </h1>
            <p className="mt-6 text-xl text-foreground/80">
              At SkillForge, we're on a mission to revolutionize learning by creating personalized pathways to success. We believe that everyone has the potential to excel, and our AI-powered platform is designed to unlock that potential.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
            <div ref={timelineRef} className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary" />
              <div className="space-y-24">
                {[
                  { year: '2018', title: 'The Idea', content: 'SkillForge was born from a simple idea: learning should be personalized and accessible to everyone.' },
                  { year: '2019', title: 'AI Integration', content: 'We integrated cutting-edge AI to create truly adaptive learning experiences.' },
                  { year: '2020', title: 'Global Expansion', content: 'SkillForge went global, reaching learners in over 100 countries.' },
                  { year: '2021', title: 'Industry Partnerships', content: 'We partnered with leading companies to offer industry-relevant certifications.' },
                  { year: '2022', title: 'Mobile Launch', content: 'Our mobile app launched, making learning possible anytime, anywhere.' },
                  { year: '2023', title: 'AI 2.0', content: 'We introduced our next-generation AI, offering even more personalized learning paths.' },
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`timeline-item relative opacity-0 flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                        <h3 className="text-2xl font-bold mb-2">{item.year}</h3>
                        <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                        <p className="text-foreground/80">{item.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

