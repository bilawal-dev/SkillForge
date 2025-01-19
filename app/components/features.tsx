import { Cpu, BookOpen, Award, TrendingUp, Zap } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: 'AI-Powered Skill Mapping',
    description: 'Our advanced AI analyzes your skills and experience to create a comprehensive skill map.'
  },
  {
    icon: BookOpen,
    title: 'Personalized Learning Plans',
    description: 'Tailored learning paths that adapt to your progress and changing goals.'
  },
  {
    icon: Award,
    title: 'Gamified Progress Tracking',
    description: 'Stay motivated with gamified elements that make learning engaging and fun.'
  },
  {
    icon: TrendingUp,
    title: 'Career Growth Insights',
    description: 'Get data-driven insights into career trends and opportunities based on your skill set.'
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-background-alt relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">Unlock Your Potential</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {features.map((feature, index) => (
            <div key={index} className={`bg-background/50 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${index % 2 === 0 ? 'md:translate-y-8' : ''}`}>
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-gradient-conic from-primary/30 via-secondary/30 to-primary/30 animate-spin-slow opacity-30 blur-3xl" />
    </section>
  )
}

