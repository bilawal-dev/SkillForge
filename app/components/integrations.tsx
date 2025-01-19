import Image from 'next/image'

const integrations = [
  { name: 'LinkedIn', logo: '/linkedin-logo.svg' },
  { name: 'Coursera', logo: '/coursera-logo.svg' },
  { name: 'Udemy', logo: '/udemy-logo.svg' },
  { name: 'edX', logo: '/edx-logo.svg' },
  { name: 'GitHub', logo: '/github-logo.svg' },
]

export default function Integrations() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Integrations</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {integrations.map((integration) => (
            <div key={integration.name} className="bg-background/50 backdrop-blur-sm rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300">
              <Image
                src={integration.logo || "/placeholder.svg"}
                alt={`${integration.name} logo`}
                width={100}
                height={50}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

