import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, TrendingUp, Users, Code, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "Technical Excellence",
      items: [
        "Worked on 7+ real-time products across different domains",
        "Achieved Great Feedback from clients",
        "Reduced application load times by 30% through optimization",
        "Implemented comprehensive testing coverage (75%+)",
      ],
    },
    {
      icon: Users,
      title: "Leadership & Mentoring",
      items: [
        "Mentored 3+ junior developers throughout career",
        "Led cross-functional teams of 5-6 members",
        "Established coding standards adopted company-wide",
        "Conducted code reviews and technical interviews",
      ],
    },
    {
      icon: Code,
      title: "Innovation & Impact",
      items: [
        "Pioneered AI integration in 2 major projects",
        "Open-source contributions with active GitHub presence",
        "Developed reusable component library used across teams",
        "Automated testing processes saving 15+ hours/week",
      ],
    },
    {
      icon: TrendingUp,
      title: "Professional Growth",
      items: [
        "Promoted from Frontend Developer to Senior Engineer in 5 years",
        "Completed advanced certifications in React and Node.js",
        "Active participation in tech communities and forums",
        "Maintained 100% project delivery success rate",
      ],
    },
  ]

  const certifications = [
    "Learning AI Agents with Python & LangChain",
    "AI For Productivity",
    "Microservices Architecture",
    "AWS Cloud Practitioner",
    "Cypress/Playwright Testing",
  ]

  const hackerRankCertificates = [
    {
      title: "Problem Solving",
      description: "Covers basic topics of Data Structures (Arrays, Strings) and Algorithms (Sorting and Searching)",
      url: "https://www.hackerrank.com/certificates/3f4d348db0a3",
      icon: Code,
    },
    {
      title: "React",
      description: "Covers topics like React Routing, Rendering Elements, State Management, Handling Events, ES6 and JavaScript and Form Validation",
      url: "https://www.hackerrank.com/certificates/6051e16e84b7",
      icon: Code,
    },
    {
      title: "CSS",
      description: "Covers topics like Cascading and Inheritance, text styling fundamentals, layouts in CSS, and boxing of elements in CSS",
      url: "https://www.hackerrank.com/certificates/f4c914ef6f1c",
      icon: Code,
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Achievements & Recognition</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key milestones and accomplishments that demonstrate my commitment to excellence and continuous professional
            growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="h-full transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 border-0 dark:border-0 border-2 border-primary/20 bg-white/80 dark:bg-black/60 backdrop-blur-lg ring-1 ring-primary/10 hover:ring-primary/30">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <achievement.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {achievement.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm">
                      <span className="text-primary">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Training & Learning Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Training & Learning</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and skill development to stay current with emerging technologies.
            </p>
          </div>
          <Card className="transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 border-0 dark:border-0 border-2 border-primary/20 bg-white/80 dark:bg-black/60 backdrop-blur-lg ring-1 ring-primary/10 hover:ring-primary/30">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Current Learning Path</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="text-sm hover:bg-primary/20 transition-colors">
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* HackerRank Certifications Section */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Certifications</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Verified skills and competencies through certification program.
            </p>
          </div>
          <Card className="transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 border-0 dark:border-0 border-2 border-primary/20 bg-white/80 dark:bg-black/60 backdrop-blur-lg ring-1 ring-primary/10 hover:ring-primary/30">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Verified Skills</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {hackerRankCertificates.map((cert, index) => (
                  <div key={index} className="p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm mb-1">{cert.title}</h4>
                        <p className="text-xs text-muted-foreground mb-2">{cert.description}</p>
                      </div>
                      <Button size="sm" variant="outline" className="ml-2 cursor-pointer" asChild>
                        <a href={cert.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
