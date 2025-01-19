'use client'

import { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useRouter } from 'next/navigation'

const pricingPlans = [
  {
    name: 'Basic',
    monthlyPrice: 9.99,
    yearlyPrice: 99.99,
    features: ['Personalized learning path', 'Access to 100+ courses', 'Monthly skill assessment'],
  },
  {
    name: 'Pro',
    monthlyPrice: 19.99,
    yearlyPrice: 199.99,
    features: ['Everything in Basic', 'Unlimited course access', 'Weekly 1-on-1 mentoring', 'Career planning tools'],
  },
  {
    name: 'Enterprise',
    monthlyPrice: 49.99,
    yearlyPrice: 499.99,
    features: ['Everything in Pro', 'Custom learning tracks', 'Team progress analytics', 'Dedicated account manager'],
  },
]

const faqs = [
  {
    question: 'Can I switch plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. The changes will be reflected in your next billing cycle.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'We offer a 7-day free trial for all our plans. You can explore all features during this period without any commitment.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers.',
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'You can cancel your subscription at any time. There are no long-term contracts or cancellation fees.',
  },
]

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-alt">
      <Header />
      <main className="pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-8">
              Choose Your Learning Journey
            </h1>
            <div className="flex items-center justify-center mb-12">
              <span className={`mr-3 ${isYearly ? 'text-foreground/60' : 'text-foreground'}`}>Monthly</span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
              />
              <span className={`ml-3 ${isYearly ? 'text-foreground' : 'text-foreground/60'}`}>Yearly <span className="text-primary">(Save 20%)</span></span>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative bg-background/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    index === 1 ? 'border-2 border-primary' : 'border border-primary'
                  }`}
                >
                  {index === 1 && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-6">
                    ${isYearly ? plan.yearlyPrice.toFixed(2) : plan.monthlyPrice.toFixed(2)}
                    <span className="text-lg font-normal text-foreground/60">/{isYearly ? 'year' : 'month'}</span>
                  </div>
                  <ul className="text-left mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center mb-2">
                        <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button onClick={() => router.push('/signup')} className="w-full" variant={index === 1 ? 'default' : 'outline'}>
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full text-lg">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

