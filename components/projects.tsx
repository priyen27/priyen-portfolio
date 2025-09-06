"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Brain, Zap, ShoppingCart, MessageSquare, CheckSquare, TestTube, Users, Star, Eye } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useState } from "react"

export function Projects() {
  const [expandedTechStacks, setExpandedTechStacks] = useState<Set<number>>(new Set())

  const toggleTechStack = (index: number) => {
    const newExpanded = new Set(expandedTechStacks)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedTechStacks(newExpanded)
  }

  const projects = [
    {
      title: "DocuMind",
      description:
        "An intelligent document analysis platform powered by AI that extracts insights, summarizes content, and enables natural language queries on your documents.",
      icon: Brain,
      technologies: ["Next.js", "OpenAI", "Tailwind CSS", "TypeScript", "Prisma", "PostgreSQL"],
      features: [
        "AI-powered document analysis",
        "Natural language queries",
        "Content summarization",
        "Multi-format support",
      ],
      liveUrl: "https://docu-mind-afsk.vercel.app/",
      githubUrl: "https://github.com/priyen27/DocuMind",
      recommended: true,
      gradient: "from-violet-500 via-purple-500 to-blue-500",
      bgPattern: "dots",
    },
    {
      title: "React UI Kit",
      description:
        "A comprehensive UI library built with React, Tailwind CSS, and Shadcn, featuring reusable, customizable components for rapid development.",
      icon: Zap,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Shadcn", "Storybook"],
      features: [
        "Reusable UI components",
        "Tailwind CSS integration",
        "Storybook documentation",
        "Customizable themes",
      ],
      liveUrl: "https://react-ui-kit-delta.vercel.app/",
      githubUrl: "https://github.com/priyen27/react-ui-kit",
      recommended: false,
      gradient: "from-yellow-400 via-orange-400 to-red-500",
      bgPattern: "grid",
    },
    {
      title: "MediMeet",
      description:
        "A full-stack telemedicine platform enabling patients and doctors to connect, book appointments, and conduct video consultations online.",
      icon: Users,
      technologies: ["Next.js", "Tailwind CSS", "Neon", "Vonage", "Shadcn UI"],
      features: [
        "Role-based access (patient/doctor)",
        "Doctor availability & booking",
        "Video consultations",
        "Real-time notifications",
      ],
      liveUrl: "https://medimeet-tau.vercel.app/",
      githubUrl: "https://github.com/priyen27/medimeet",
      recommended: false,
      gradient: "from-emerald-400 via-teal-400 to-blue-500",
      bgPattern: "waves",
    },
    {
      title: "React Flow Chart",
      description:
        "A visual flow chart builder for React, supporting drag-and-drop nodes, customizable edges, and real-time collaboration.",
      icon: TestTube,
      technologies: ["React", "TypeScript", "Tailwind CSS", "D3.js"],
      features: [
        "Drag-and-drop node editing",
        "Customizable edges and nodes",
        "Real-time updates",
        "Export/import diagrams",
      ],
      liveUrl: "https://react-page-hierarchy.vercel.app/",
      githubUrl: "https://github.com/priyen27/react-flow-chart",
      recommended: false,
      gradient: "from-blue-400 via-purple-400 to-indigo-600",
      bgPattern: "triangles",
    },
    {
      title: "Airbnb Clone",
      description:
        "A full-stack clone of Airbnb with property listings, booking, authentication, and responsive design.",
      icon: ShoppingCart,
      technologies: ["Next.js", "React", "TypeScript", "MongoDB", "Tailwind CSS"],
      features: [
        "Property listing and booking",
        "User authentication",
        "Responsive UI",
        "Map integration",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/priyen27/airbnb-clone",
      recommended: false,
      gradient: "from-pink-400 via-purple-400 to-indigo-500",
      bgPattern: "circles",
    },
    {
      title: "TaskFlow360",
      description:
        "A project management app for teams, featuring task boards, real-time collaboration, analytics, and productivity tools.",
      icon: CheckSquare,
      technologies: ["React", "Node.js", "GraphQL", "MongoDB", "Chart.js"],
      features: [
        "Kanban task boards",
        "Team collaboration",
        "Productivity analytics",
        "Real-time updates",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/priyen27/taskflow360-frontend",
      recommended: false,
      gradient: "from-teal-400 via-green-400 to-emerald-500",
      bgPattern: "hexagons",
    },
  ]

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-slate-950 dark:via-blue-950/30 dark:to-indigo-950/20" />
      
      {/* Animated background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 dark:from-purple-600/10 dark:to-pink-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 dark:from-blue-600/10 dark:to-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-violet-400/5 to-purple-400/5 dark:from-violet-600/5 dark:to-purple-600/5 rounded-full blur-2xl animate-bounce" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 dark:from-violet-400/20 dark:to-purple-400/20 border border-violet-200/50 dark:border-violet-800/50 mb-6">
              <Star className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              <span className="text-sm font-medium text-violet-700 dark:text-violet-300">Featured Work</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-white dark:via-purple-100 dark:to-white bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of innovative solutions I've built, demonstrating expertise in full-stack development, AI
              integration, and modern web technologies.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <Card className="group relative h-full flex flex-col overflow-hidden border-0 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] ring-1 ring-slate-200/50 dark:ring-slate-700/50 hover:ring-purple-300/50 dark:hover:ring-purple-600/50">
                
                {/* Recommended badge */}
                {project.recommended && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-xs font-semibold rounded-full shadow-lg animate-pulse">
                      <Eye className="w-3 h-3" />
                      <span>Must See</span>
                    </div>
                  </div>
                )}

                {/* Gradient background overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-all duration-700`}
                />

                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-10`} />
                </div>

                <CardHeader className="relative z-10 pb-4">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`relative p-4 bg-gradient-to-br ${project.gradient} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                    >
                      <project.icon className="h-7 w-7 text-white drop-shadow-sm" />
                      <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300" />
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 dark:group-hover:from-purple-400 dark:group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed group-hover:line-clamp-none line-clamp-3 transition-all duration-300">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col relative z-10 pt-0">
                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2">
                      <div className="w-1 h-4 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-2 relative">
                      {/* Always visible features */}
                      {project.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                          <span className="leading-relaxed">{feature}</span>
                        </div>
                      ))}
                      
                      {/* Hidden features that show on hover */}
                      {project.features.length > 4 && (
                        <>
                          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-32 overflow-hidden">
                            {project.features.slice(4).map((feature, featureIndex) => (
                              <div key={featureIndex + 4} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 mt-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300" style={{transitionDelay: `${featureIndex * 100}ms`}}>
                                <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                                <span className="leading-relaxed">{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          {/* Hover indicator */}
                          <div className="group-hover:opacity-0 opacity-100 transition-all duration-300 flex items-center gap-1.5 mt-1">
                            <div className="text-xs text-purple-600 dark:text-purple-400 font-medium flex items-center gap-1">
                              <span>+{project.features.length - 4} more</span>
                              <div className="w-3 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" />
                            </div>
                            <span className="text-xs text-slate-400 dark:text-slate-500">(hover to see)</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3 text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2">
                      <div className="w-1 h-4 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {/* Calculate how many tech items fit in 2 lines (approximately 6-8 items) */}
                      {(() => {
                        const maxInitialItems = 6
                        const isExpanded = expandedTechStacks.has(index)
                        const visibleTechs = isExpanded ? project.technologies : project.technologies.slice(0, maxInitialItems)
                        const remainingCount = project.technologies.length - maxInitialItems
                        
                        return (
                          <>
                            {visibleTechs.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="outline"
                                className="text-xs px-2.5 py-1 bg-slate-50/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-200"
                              >
                                {tech}
                              </Badge>
                            ))}
                            
                            {project.technologies.length > maxInitialItems && (
                              <Badge
                                variant="outline"
                                className="text-xs px-2.5 py-1 bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/40 cursor-pointer transition-all duration-200"
                                onClick={() => toggleTechStack(index)}
                              >
                                {isExpanded ? 'Show less' : `+${remainingCount}`}
                              </Badge>
                            )}
                          </>
                        )
                      })()}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="mt-auto flex gap-3">
                    {project.liveUrl ? (
                      <Button 
                        size="sm" 
                        className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group/btn" 
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-3.5 w-3.5 group-hover/btn:rotate-45 transition-transform duration-300" />
                          <span className="font-medium">Live Demo</span>
                        </a>
                      </Button>
                    ) : (
                      <Button 
                        size="sm" 
                        className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 cursor-not-allowed" 
                        disabled
                      >
                        <ExternalLink className="mr-2 h-3.5 w-3.5" />
                        <span>Coming Soon</span>
                      </Button>
                    )}
                    
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="px-3 bg-white/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 group/btn" 
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="View source code">
                        <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={600}>
          <div className="text-center mt-16">
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-slate-200 dark:border-slate-700 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl group" 
              asChild
            >
              <a href="https://github.com/priyen27" target="_blank" rel="noopener noreferrer">
                <Github className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold">Explore All Projects</span>
              </a>
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
