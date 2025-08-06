import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Zap, ShoppingCart, MessageSquare, CheckSquare, TestTube, Users } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function Projects() {
  const projects = [
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
      status: "Featured",
      gradient: "from-yellow-400 to-orange-500",
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
      status: "Production",
      gradient: "from-green-400 to-blue-500",
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
      status: "Production",
      gradient: "from-blue-400 to-purple-500",
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
      status: "Open Source",
      gradient: "from-purple-400 to-pink-500",
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
      status: "Production",
      gradient: "from-teal-400 to-green-500",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Featured":
        return "bg-gradient-to-r from-yellow-500 to-orange-500"
      case "Production":
        return "bg-gradient-to-r from-green-500 to-emerald-500"
      case "Beta":
        return "bg-gradient-to-r from-blue-500 to-purple-500"
      case "Open Source":
        return "bg-gradient-to-r from-purple-500 to-pink-500"
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600"
    }
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-48 translate-x-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-48 -translate-x-48" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of innovative solutions I've built, demonstrating expertise in full-stack development, AI
              integration, and modern web technologies.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
                <Card className="h-full flex flex-col group transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 border-0 bg-white/80 dark:bg-black/60 backdrop-blur-lg relative overflow-hidden ring-1 ring-primary/10 hover:ring-primary/30">
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 bg-gradient-to-br ${project.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <project.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge className={`text-white border-0 ${getStatusColor(project.status)} shadow-lg`}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col relative z-10">
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex gap-2">
                    {project.liveUrl ? (
                      <Button size="sm" className="flex-1 group/btn cursor-pointer" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-3 w-3 group-hover/btn:animate-bounce" />
                          Live Demo
                        </a>
                      </Button>
                    ) : (
                      <div className="flex-1">
                        <Button size="sm" className="w-full cursor-not-allowed opacity-60" disabled>
                          <span title="Not deployed yet" className="cursor-not-allowed flex items-center">
                            <ExternalLink className="mr-2 h-3 w-3" />
                            Not deployed yet
                          </span>
                        </Button>
                      </div>
                    )}
                    <Button size="sm" variant="outline" className="group/btn bg-transparent cursor-pointer" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="View source code on GitHub">
                        <Github className="h-3 w-3 group-hover/btn:animate-spin" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={600}>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="hover-lift group glass-effect bg-transparent" asChild>
              <a href="https://github.com/priyen27" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4 group-hover:animate-spin" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
