import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Code, Server, Languages, TestTube, Brain, Wrench, Users, Star } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Microservices", "Database Design"],
      gradient: "from-green-500 via-emerald-500 to-teal-500",
    },
    {
      title: "Programming Languages",
      icon: Languages,
      skills: ["JavaScript", "TypeScript", "Python", "SQL", "JSON"],
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
    },
    {
      title: "Testing & Quality Assurance",
      icon: TestTube,
      skills: [
        "Cypress",
        "Playwright",
        "Jest",
        "Unit Testing",
        "Integration Testing",
        "E2E Testing",
        "Test Automation",
      ],
      gradient: "from-red-500 via-pink-500 to-rose-500",
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: ["Generative AI", "AI Integration", "OpenAI API", "Machine Learning Concepts", "AI-powered Applications"],
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Git", "Docker", "AWS", "Vercel", "MongoDB", "PostgreSQL", "Redis", "Webpack"],
      gradient: "from-indigo-500 via-blue-500 to-cyan-500",
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        "Problem Solving",
        "Team Leadership",
        "Code Review",
        "Mentoring",
        "Agile Methodology",
        "Project Management",
      ],
      gradient: "from-teal-500 via-green-500 to-emerald-500",
    },
  ]

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 dark:from-slate-950 dark:via-indigo-950/30 dark:to-purple-950/20" />
      
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 dark:from-indigo-600/10 dark:to-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 dark:from-purple-600/10 dark:to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-indigo-400/5 dark:from-blue-600/5 dark:to-indigo-600/5 rounded-full blur-2xl animate-bounce" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-400/20 dark:to-purple-400/20 border border-indigo-200/50 dark:border-indigo-800/50 mb-6">
              <Star className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Technical Expertise</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 dark:from-white dark:via-indigo-100 dark:to-white bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit of modern technologies and methodologies I use to build exceptional software
              solutions.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {skillCategories.map((category, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <Card className="group relative h-full flex flex-col overflow-hidden border-0 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] ring-1 ring-slate-200/50 dark:ring-slate-700/50 hover:ring-indigo-300/50 dark:hover:ring-indigo-600/50">
                
                {/* Gradient background overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-all duration-700`}
                />

                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className={`w-full h-full bg-gradient-to-br ${category.gradient} opacity-10`} />
                </div>

                <CardHeader className="relative z-10 pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`relative p-4 bg-gradient-to-br ${category.gradient} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                    >
                      <category.icon className="h-6 w-6 text-white drop-shadow-sm" />
                      <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300" />
                    </div>
                    <CardTitle className="text-lg font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 dark:group-hover:from-indigo-400 dark:group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 relative z-10 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="text-xs px-2.5 py-1.5 bg-slate-50/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-200 hover:scale-105 cursor-pointer"
                        style={{ animationDelay: `${skillIndex * 0.05}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
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
