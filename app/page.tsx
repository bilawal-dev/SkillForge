import Header from './components/header'
import Hero from './components/hero'
import Features from './components/features'
import HowItWorks from './components/how-it-works'
import Footer from './components/footer'
import LearningJourney from './components/learning-journey'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-alt">
      <Header />
      <main>
        <Hero />
        <LearningJourney />
        <HowItWorks />
        <Features />
      </main>
      <Footer />
    </div>
  )
}