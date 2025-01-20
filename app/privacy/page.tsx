'use client'

import { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const privacyPolicySections = [
  {
    title: 'Information We Collect',
    content: 'We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, and any other information you choose to provide.'
  },
  {
    title: 'How We Use Your Information',
    content: 'We use the information we collect to provide, maintain, and improve our services, to develop new features, and to protect SkillForge and our users.'
  },
  {
    title: 'Sharing of Information',
    content: 'We do not share your personal information with third parties except as described in this Privacy Policy or with your consent.'
  },
  {
    title: 'Security',
    content: 'We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.'
  },
  {
    title: 'Your Rights and Choices',
    content: 'You have the right to access, update, or delete your personal information. You can also choose to opt-out of certain data collection or use.'
  },
  {
    title: 'Changes to This Privacy Policy',
    content: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.'
  },
]

export default function PrivacyPolicyPage() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-alt">
      <Header />
      <main className="pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-8 text-center">
              Privacy Policy
            </h1>
            <div className="bg-background/50 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <p className="text-lg mb-8">
                At SkillForge, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
              <Accordion type="single" collapsible className="w-full">
                {privacyPolicySections.map((section, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>{section.title}</AccordionTrigger>
                    <AccordionContent>{section.content}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

