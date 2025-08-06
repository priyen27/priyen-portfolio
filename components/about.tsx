import { Card, CardContent } from "@/components/ui/card"
import { Code, Zap, Users, Award } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expert in modern web technologies with focus on React, Next.js, and Node.js ecosystem",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Specialized in building high-performance applications with optimal user experience",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Experience leading development teams and mentoring junior developers",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Strong advocate for testing with expertise in Cypress, Playwright, and unit testing",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-48 translate-x-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-48 -translate-x-48" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate Senior Software Engineer with expertise in full-stack development, AI integration, and
              modern web technologies.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation>
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With over 5 years of experience in software development, I specialize in building scalable web
                  applications using modern technologies like React, Next.js, and Node.js. My passion lies in
                  creating intuitive user experiences and implementing robust backend solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I have a strong foundation in AI integration, having worked on projects that leverage machine
                  learning and automation to enhance user experiences. My expertise extends to testing frameworks,
                  performance optimization, and mentoring junior developers.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source
                  projects, or sharing knowledge with the developer community.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">Available for opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">Remote work ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">Open to collaboration</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 border border-primary/20 dark:border-primary/10 shadow-2xl backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-6 text-center">Key Highlights</h3>
                  <div className="space-y-4">
                    {highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-4 group cursor-pointer">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <highlight.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                            {highlight.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{highlight.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-secondary/30 to-transparent rounded-full blur-xl" />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
