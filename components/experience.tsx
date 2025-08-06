import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"

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
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey of continuous growth and learning in software development, from frontend specialist to full-stack
            engineer.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="relative transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 border-0 bg-white/80 dark:bg-black/60 backdrop-blur-lg ring-1 ring-primary/10 hover:ring-primary/30">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Building className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  {/* {index === 0 && (
                    <Badge variant="default" className="w-fit">
                      Current
                    </Badge>
                  )} */}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
