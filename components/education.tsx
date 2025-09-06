import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin, Star, BookOpen } from "lucide-react"

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
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
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
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
    },
  ]

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50/30 to-indigo-50/20 dark:from-slate-950 dark:via-purple-950/30 dark:to-indigo-950/20" />
      
      {/* Animated background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 dark:from-purple-600/10 dark:to-indigo-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-blue-400/10 dark:from-indigo-600/10 dark:to-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-400/5 to-pink-400/5 dark:from-purple-600/5 dark:to-pink-600/5 rounded-full blur-2xl animate-bounce" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 dark:from-purple-400/20 dark:to-indigo-400/20 border border-purple-200/50 dark:border-purple-800/50 mb-6">
            <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Academic Journey</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-white dark:via-purple-100 dark:to-white bg-clip-text text-transparent">
            Education
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Strong academic foundation in computer science and information technology, providing the theoretical
            knowledge that complements my practical experience.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {education.map((edu, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] ring-1 ring-slate-200/50 dark:ring-slate-700/50 hover:ring-purple-300/50 dark:hover:ring-purple-600/50">
              
              {/* Gradient background overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-all duration-700`}
              />

              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div className={`w-full h-full bg-gradient-to-br ${edu.gradient} opacity-10`} />
              </div>

              <CardHeader className="relative z-10">
                <div className="flex items-start gap-6">
                  <div className={`relative p-4 bg-gradient-to-br ${edu.gradient} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <GraduationCap className="h-8 w-8 text-white drop-shadow-sm" />
                    <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300" />
                  </div>
                  
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-600 dark:group-hover:from-purple-400 dark:group-hover:to-indigo-400 group-hover:bg-clip-text transition-all duration-300">
                      {edu.degree}
                    </CardTitle>
                    
                    <p className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-4">
                      {edu.field}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                          <MapPin className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        </div>
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      
                      <span className="hidden sm:inline text-slate-400 dark:text-slate-600">•</span>
                      
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                          <Calendar className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <span className="font-medium">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed text-lg">
                  {edu.description}
                </p>
                
                <div>
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
                    <Star className="h-5 w-5 text-purple-500" />
                    Key Areas of Study:
                  </h4>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="group/item flex items-start gap-3 p-3 rounded-lg bg-slate-50/50 dark:bg-slate-800/50 hover:bg-purple-50/50 dark:hover:bg-purple-900/20 transition-all duration-200 hover:scale-105">
                        <span className={`text-lg mt-1 bg-gradient-to-br ${edu.gradient} bg-clip-text text-transparent group-hover/item:scale-125 transition-transform duration-200`}>
                          •
                        </span>
                        <span className="text-slate-700 dark:text-slate-300 font-medium">
                          {achievement}
                        </span>
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
