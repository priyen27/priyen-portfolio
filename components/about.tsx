import { Card, CardContent } from "@/components/ui/card"
import { Code, Zap, Users, Award, User, CheckCircle } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expert in modern web technologies with focus on React, Next.js, and Node.js ecosystem",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Specialized in building high-performance applications with optimal user experience",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Experience leading development teams and mentoring junior developers",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Strong advocate for testing with expertise in Cypress, Playwright, and unit testing",
      gradient: "from-purple-500 to-violet-500",
    },
  ]

  const statusItems = [
    {
      icon: CheckCircle,
      text: "Available for opportunities",
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-500",
    },
    {
      icon: CheckCircle,
      text: "Remote work ready",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-500",
    },
    {
      icon: CheckCircle,
      text: "Open to collaboration",
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-500",
    },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-green-50/30 to-blue-50/20 dark:from-slate-950 dark:via-green-950/30 dark:to-blue-950/20" />
      
      {/* Animated background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-400/10 to-blue-400/10 dark:from-green-600/10 dark:to-blue-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-400/5 to-green-400/5 dark:from-cyan-600/5 dark:to-green-600/5 rounded-full blur-2xl animate-bounce" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 dark:from-green-400/20 dark:to-blue-400/20 border border-green-200/50 dark:border-green-800/50 mb-6">
              <User className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-sm font-medium text-green-700 dark:text-green-300">Get to Know Me</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-green-900 to-slate-900 dark:from-white dark:via-green-100 dark:to-white bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A passionate Senior Software Engineer with expertise in full-stack development, AI integration, and
              modern web technologies.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                    With over 5 years of experience in software development, I specialize in building scalable web
                    applications using modern technologies like React, Next.js, and Node.js. My passion lies in
                    creating intuitive user experiences and implementing robust backend solutions.
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                    I have a strong foundation in AI integration, having worked on projects that leverage machine
                    learning and automation to enhance user experiences. My expertise extends to testing frameworks,
                    performance optimization, and mentoring junior developers.
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source
                    projects, or sharing knowledge with the developer community.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {statusItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
                    <div className={`w-2 h-2 ${item.bgColor} rounded-full animate-pulse`} />
                    <span className={`text-sm font-medium ${item.color}`}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="relative">
              {/* Main highlights card */}
              <Card className="relative overflow-hidden border-0 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-700/50">
                {/* Gradient background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5 dark:from-green-600/10 dark:via-blue-600/10 dark:to-purple-600/10" />
                
                <CardContent className="p-8 relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-slate-900 to-green-900 dark:from-white dark:to-green-100 bg-clip-text text-transparent">
                      Key Highlights
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto" />
                  </div>
                  
                  <div className="space-y-6">
                    {highlights.map((highlight, index) => (
                      <div key={index} className="group flex items-start gap-4 p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-800/50 hover:bg-white/70 dark:hover:bg-slate-700/70 transition-all duration-300 cursor-pointer border border-slate-200/30 dark:border-slate-700/30 hover:border-slate-300/50 dark:hover:border-slate-600/50">
                        <div className={`p-3 bg-gradient-to-br ${highlight.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <highlight.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-2 text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-600 dark:group-hover:from-green-400 dark:group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                            {highlight.title}
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-500/20 to-blue-500/20 dark:from-green-600/30 dark:to-blue-600/30 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 dark:from-blue-600/30 dark:to-purple-600/30 rounded-full blur-xl" />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
