'use client'

import { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setFormData({name: '', email: '', message: ''});
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-alt">
      <Header />
      <main className="pt-10">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </div>
              <div>
                <div className="bg-background/50 backdrop-blur-sm rounded-lg p-8 shadow-lg mb-8">
                  <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <MapPin className="w-6 h-6 text-primary mr-2" />
                      <span>123 Learning Street, Education City, 12345</span>
                    </li>
                    <li className="flex items-center">
                      <Phone className="w-6 h-6 text-primary mr-2" />
                      <span>+1 (123) 456-7890</span>
                    </li>
                    <li className="flex items-center">
                      <Mail className="w-6 h-6 text-primary mr-2" />
                      <span>contact@skillforge.com</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-background/50 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                  <h2 className="text-2xl font-semibold mb-6">Our Location</h2>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1510579767645"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

