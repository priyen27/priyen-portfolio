import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollAnimation } from "@/components/scroll-animation"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Microservices", "Database Design"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "SQL", "JSON"],
      color: "from-purple-500 to-violet-500",
    },
    {
      title: "Testing & Quality Assurance",
      skills: [
        "Cypress",
        "Playwright",
        "Jest",
        "Unit Testing",
        "Integration Testing",
        "E2E Testing",
        "Test Automation",
      ],
      color: "from-red-500 to-pink-500",
    },
    {
      title: "AI & Machine Learning",
      skills: ["Generative AI", "AI Integration", "OpenAI API", "Machine Learning Concepts", "AI-powered Applications"],
      color: "from-orange-500 to-yellow-500",
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Vercel", "MongoDB", "PostgreSQL", "Redis", "Webpack"],
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem Solving",
        "Team Leadership",
        "Code Review",
        "Mentoring",
        "Agile Methodology",
        "Project Management",
      ],
      color: "from-teal-500 to-green-500",
    },
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and methodologies I use to build exceptional software
              solutions.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <Card className="h-full hover-lift transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 border border-primary/20 dark:border-primary/10 bg-white/90 dark:bg-black/60 backdrop-blur-lg ring-1 ring-primary/10 hover:ring-primary/30">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl shadow-lg flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">{category.title.charAt(0)}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs hover:bg-primary/20 transition-all duration-300 hover:scale-105 cursor-pointer"
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
