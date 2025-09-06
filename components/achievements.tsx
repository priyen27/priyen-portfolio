import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, TrendingUp, Users, Code, ExternalLink, Star, Zap, Target } from "lucide-react"
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
      gradient: "from-yellow-500 via-orange-500 to-red-500",
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
      gradient: "from-green-500 via-emerald-500 to-teal-500",
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
      gradient: "from-purple-500 via-indigo-500 to-blue-500",
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
      gradient: "from-pink-500 via-rose-500 to-orange-500",
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
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "React",
      description: "Covers topics like React Routing, Rendering Elements, State Management, Handling Events, ES6 and JavaScript and Form Validation",
      url: "https://www.hackerrank.com/certificates/6051e16e84b7",
      icon: Code,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "CSS",
      description: "Covers topics like Cascading and Inheritance, text styling fundamentals, layouts in CSS, and boxing of elements in CSS",
      url: "https://www.hackerrank.com/certificates/f4c914ef6f1c",
      icon: Code,
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-orange-50/30 to-yellow-50/20 dark:from-slate-950 dark:via-orange-950/30 dark:to-yellow-950/20" />
      
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-yellow-400/10 dark:from-orange-600/10 dark:to-yellow-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-orange-400/10 dark:from-pink-600/10 dark:to-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 dark:from-yellow-600/5 dark:to-orange-600/5 rounded-full blur-2xl animate-bounce" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-yellow-500/10 dark:from-orange-400/20 dark:to-yellow-400/20 border border-orange-200/50 dark:border-orange-800/50 mb-6">
            <Trophy className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Career Milestones</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-orange-900 to-slate-900 dark:from-white dark:via-orange-100 dark:to-white bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Key milestones and accomplishments that demonstrate my commitment to excellence and continuous professional
            growth.
          </p>
        </div>

        {/* Main achievements grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <Card key={index} className="group relative h-full overflow-hidden border-0 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] ring-1 ring-slate-200/50 dark:ring-slate-700/50 hover:ring-orange-300/50 dark:hover:ring-orange-600/50">
              
              {/* Gradient background overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-all duration-700`}
              />

              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div className={`w-full h-full bg-gradient-to-br ${achievement.gradient} opacity-10`} />
              </div>

              <CardHeader className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`relative p-4 bg-gradient-to-br ${achievement.gradient} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <achievement.icon className="h-6 w-6 text-white drop-shadow-sm" />
                    <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300" />
                  </div>
                  
                  <CardTitle className="text-xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-yellow-600 dark:group-hover:from-orange-400 dark:group-hover:to-yellow-400 group-hover:bg-clip-text transition-all duration-300">
                    {achievement.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <ul className="space-y-4">
                  {achievement.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 group/item">
                      <span className={`text-lg mt-1 bg-gradient-to-br ${achievement.gradient} bg-clip-text text-transparent group-hover/item:scale-125 transition-transform duration-200`}>
                        •
                      </span>
                      <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Training & Learning Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 dark:from-green-400/20 dark:to-blue-400/20 border border-green-200/50 dark:border-green-800/50 mb-6">
              <Zap className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-sm font-medium text-green-700 dark:text-green-300">Continuous Learning</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-green-900 to-slate-900 dark:from-white dark:via-green-100 dark:to-white bg-clip-text text-transparent">
              Training & Learning
            </h3>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Continuous learning and skill development to stay current with emerging technologies.
            </p>
          </div>
          
          <Card className="group relative overflow-hidden border-0 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] ring-1 ring-slate-200/50 dark:ring-slate-700/50 hover:ring-green-300/50 dark:hover:ring-green-600/50">
            
            {/* Gradient background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-all duration-700" />

            <CardHeader className="relative z-10">
              <div className="flex items-center gap-4">
                <div className="relative p-4 bg-gradient-to-br from-green-500 via-blue-500 to-indigo-500 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Award className="h-6 w-6 text-white drop-shadow-sm" />
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300" />
                </div>
                
                <CardTitle className="text-2xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-600 dark:group-hover:from-green-400 dark:group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                  Current Learning Path
                </CardTitle>
              </div>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-sm px-3 py-2 bg-slate-50/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300 hover:scale-105 cursor-pointer font-medium"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* HackerRank Certifications Section */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-400/20 dark:to-pink-400/20 border border-purple-200/50 dark:border-purple-800/50 mb-6">
              <Target className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Verified Skills</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-white dark:via-purple-100 dark:to-white bg-clip-text text-transparent">
              Certifications
            </h3>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Verified skills and competencies through certification programs.
            </p>
          </div>
          
          <Card className="group relative overflow-hidden border-0 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] ring-1 ring-slate-200/50 dark:ring-slate-700/50 hover:ring-purple-300/50 dark:hover:ring-purple-600/50">
            
            {/* Gradient background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-all duration-700" />

            <CardHeader className="relative z-10">
              <div className="flex items-center gap-4">
                <div className="relative p-4 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Award className="h-6 w-6 text-white drop-shadow-sm" />
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300" />
                </div>
                
                <CardTitle className="text-2xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 dark:group-hover:from-purple-400 dark:group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  Professional Certificates
                </CardTitle>
              </div>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <div className="space-y-6">
                {hackerRankCertificates.map((cert, index) => (
                  <div key={index} className="group/cert relative overflow-hidden p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-800/50 hover:bg-slate-100/70 dark:hover:bg-slate-700/70 transition-all duration-300 hover:scale-[1.02] border border-slate-200/50 dark:border-slate-700/50 hover:border-purple-300/50 dark:hover:border-purple-600/50">
                    
                    {/* Certificate gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover/cert:opacity-5 dark:group-hover/cert:opacity-10 transition-all duration-300 rounded-2xl`} />
                    
                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 bg-gradient-to-br ${cert.gradient} rounded-lg shadow-sm group-hover/cert:scale-110 transition-transform duration-300`}>
                            <cert.icon className="h-4 w-4 text-white" />
                          </div>
                          
                          <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 group-hover/cert:text-transparent group-hover/cert:bg-gradient-to-r group-hover/cert:from-purple-600 group-hover/cert:to-pink-600 dark:group-hover/cert:from-purple-400 dark:group-hover/cert:to-pink-400 group-hover/cert:bg-clip-text transition-all duration-300">
                            {cert.title}
                          </h4>
                        </div>
                        
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                      
                      <Button
                        size="sm"
                        variant="outline"
                        className="shrink-0 group/button relative overflow-hidden bg-white/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:scale-105"
                        asChild
                      >
                        <a href={cert.url} target="_blank" rel="noopener noreferrer">
                          <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-400/10 dark:to-pink-400/10 translate-y-full group-hover/button:translate-y-0 transition-transform duration-300" />
                          <ExternalLink className="h-4 w-4 relative z-10" />
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
