import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin, Briefcase, TrendingUp } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function Experience() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Upforcetech",
      period: "Aug 2025 - Present",
      location: "Current Position",
      description: [
        "Leading full-stack development initiatives with focus on scalable architecture and performance optimization",
        "Implementing AI-powered features and integrations to enhance user experience and business value",
        "Mentoring junior developers and establishing best practices for code quality and testing",
        "Collaborating with cross-functional teams to deliver high-impact software solutions",
        "Driving technical decisions and architectural improvements across multiple projects",
      ],
      technologies: ["React.js", "Next.js", "Node.js", "TypeScript", "TailwindCSS", "Shadcn UI", "Python", "AI Integration", "Unit Testing"],
      gradient: "from-violet-500 via-purple-500 to-indigo-500",
      current: true,
    },
    {
      title: "Senior Frontend Engineer",
      company: "Visilean",
      period: "Aug 2024 - Aug 2025",
      location: "1 Year",
      description: [
        "Spearheaded frontend development for complex web applications using React and Next.js",
        "Implemented comprehensive testing strategies using Cypress and Playwright for reliable deployments",
        "Optimized application performance resulting in 40% improvement in load times",
        "Led code reviews and established frontend development standards and guidelines",
        "Collaborated with UX/UI teams to create intuitive and responsive user interfaces",
      ],
      technologies: ["React.js", "TypeScript", "material-ui", "SCSS", "Performance Optimization"],
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      current: false,
    },
    {
      title: "Frontend Developer",
      company: "Upforcetech",
      period: "Aug 2020 - Aug 2024",
      location: "4 Years",
      description: [
        "Developed and maintained multiple client-facing web applications using React.js and modern JavaScript",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Collaborated with backend teams to integrate RESTful APIs and optimize data flow",
        "Participated in agile development processes and contributed to sprint planning and retrospectives",
        "Gained expertise in testing methodologies and quality assurance practices",
      ],
      technologies: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS/SCSS", "TailwindCSS", "API Integration", "Responsive Design"],
      gradient: "from-emerald-500 via-green-500 to-teal-500",
      current: false,
    },
  ]

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-blue-50/20 dark:from-slate-950 dark:via-emerald-950/30 dark:to-blue-950/20" />
      
      {/* Animated background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 dark:from-emerald-600/10 dark:to-blue-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-violet-400/10 dark:from-blue-600/10 dark:to-violet-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-teal-400/5 to-emerald-400/5 dark:from-teal-600/5 dark:to-emerald-600/5 rounded-full blur-2xl animate-bounce" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10 dark:from-emerald-400/20 dark:to-blue-400/20 border border-emerald-200/50 dark:border-emerald-800/50 mb-6">
              <Briefcase className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Career Journey</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-emerald-900 to-slate-900 dark:from-white dark:via-emerald-100 dark:to-white bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A journey of continuous growth and learning in software development, from frontend specialist to full-stack
              engineer.
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-5xl mx-auto space-y-8 lg:space-y-12">
          {experiences.map((exp, index) => (
            <ScrollAnimation key={index} delay={index * 150}>
              <Card className="group relative overflow-hidden border-0 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] ring-1 ring-slate-200/50 dark:ring-slate-700/50 hover:ring-emerald-300/50 dark:hover:ring-emerald-600/50">
                
                {/* Current position badge */}
                {exp.current && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-semibold rounded-full shadow-lg animate-pulse">
                      <TrendingUp className="w-3 h-3" />
                      <span>Current</span>
                    </div>
                  </div>
                )}

                {/* Gradient background overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-all duration-700`}
                />

                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className={`w-full h-full bg-gradient-to-br ${exp.gradient} opacity-10`} />
                </div>

                <CardHeader className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex items-start gap-4 flex-1">
                      <div
                        className={`relative p-4 bg-gradient-to-br ${exp.gradient} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                      >
                        <Briefcase className="h-7 w-7 text-white drop-shadow-sm" />
                        <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-blue-600 dark:group-hover:from-emerald-400 dark:group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                          {exp.title}
                        </CardTitle>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                            <Building className="h-4 w-4 text-emerald-500" />
                            <span className="font-semibold text-lg">{exp.company}</span>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-blue-500" />
                              <span className="font-medium">{exp.period}</span>
                            </div>
                            <span className="hidden sm:inline text-slate-400">•</span>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-purple-500" />
                              <span className="font-medium">{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10 pt-0">
                  {/* Description */}
                  <div className="mb-6">
                    <h4 className="font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-2">
                      <div className="w-1 h-5 bg-gradient-to-b from-emerald-500 to-blue-500 rounded-full" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200/30 dark:border-slate-700/30 hover:border-emerald-300/50 dark:hover:border-emerald-600/50 transition-all duration-300 group/item">
                          <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                          <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-2">
                      <div className="w-1 h-5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs px-3 py-1.5 bg-white/60 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-200 hover:scale-105"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
