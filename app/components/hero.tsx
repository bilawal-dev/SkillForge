import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6 animate-fade-up">
            SkillForge: Your Personalized Path to Success
          </h1>
          <p className="text-xl text-foreground/80 mb-8 animate-fade-up animation-delay-200">
            Unlock your potential with AI-powered learning paths tailored to your unique skills and career goals.
          </p>
          <Button asChild size="lg" className="animate-fade-up animation-delay-400">
            <Link href="/signup">Start Learning Today</Link>
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-30 animate-pulse" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

