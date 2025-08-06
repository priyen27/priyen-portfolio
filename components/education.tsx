import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Master of Science (MSC)",
      field: "Computer Applications & Information Technology",
      institution: "KS School of Business Management",
      period: "2019 - 2021",
      description:
        "Advanced studies in computer applications with focus on software development, database management, and information systems. Specialized coursework in web technologies, software engineering principles, and project management.",
      achievements: [
        "Specialized in Advanced Software Development",
        "Database Management and Design",
        "Information Systems Architecture",
        "Project Management Methodologies",
      ],
    },
    {
      degree: "Bachelor of Science (BSC)",
      field: "Computer Applications & Information Technology",
      institution: "KS School of Business Management",
      period: "2016 - 2019",
      description:
        "Comprehensive foundation in computer science fundamentals, programming languages, and information technology. Strong emphasis on practical application and problem-solving skills.",
      achievements: [
        "Programming Fundamentals and Data Structures",
        "Web Development Technologies",
        "Software Engineering Principles",
        "Computer Networks and Security",
      ],
    },
  ]

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation in computer science and information technology, providing the theoretical
            knowledge that complements my practical experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="relative transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 border-0 dark:border-0 border-2 border-primary/20 bg-white/80 dark:bg-black/60 backdrop-blur-lg ring-1 ring-primary/10 hover:ring-primary/30">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                    <p className="text-lg font-medium text-muted-foreground mb-2">{edu.field}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.institution}</span>
                      </div>
                      <span className="hidden sm:inline">•</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">{edu.description}</p>
                <div>
                  <h4 className="font-semibold mb-3">Key Areas of Study:</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-2">•</span>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
