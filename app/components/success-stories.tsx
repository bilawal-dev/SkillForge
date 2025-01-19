'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const statistics = [
  { label: 'Users', value: '10,000+' },
  { label: 'Career Goals Achieved', value: '500+' },
  { label: 'Courses Completed', value: '50,000+' },
]

const successStories = [
  { name: 'Sarah J.', role: 'UX Designer', story: 'SkillForge helped me transition from graphic design to UX. The personalized learning path was spot-on!' },
  { name: 'Michael C.', role: 'Data Scientist', story: 'The AI-powered recommendations were crucial in helping me upskill and land my dream job in machine learning.' },
  { name: 'Emily R.', role: 'Product Manager', story: 'SkillForge\'s career forecasting gave me the insights I needed to pivot my career successfully. Highly recommended!' },
]

export default function SuccessStories() {
  const [currentStory, setCurrentStory] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-background-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-lg text-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">Success Stories</h3>
          <div className="bg-background/50 backdrop-blur-sm rounded-lg p-8 shadow-lg relative h-64">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <p className="text-lg italic mb-4">"{successStories[currentStory].story}"</p>
                <p className="text-right">
                  <span className="font-semibold">{successStories[currentStory].name}</span> - {successStories[currentStory].role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

