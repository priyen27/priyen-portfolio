"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadResume = () => {
    // Create a link element to trigger download
    const link = document.createElement('a')
    link.href = 'priyen_software_engineer.pdf'
    link.download = 'priyen_software_engineer.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 animate-gradient" />

      {/* Floating Elements - Better visibility in light theme */}
      <div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/20 dark:bg-primary/10 rounded-full animate-float"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-secondary/30 dark:bg-secondary/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-accent/25 dark:bg-accent/15 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto mt-4">
          <div className="mb-8">
            {/* Avatar with glow effect */}
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-primary/60 flex items-center justify-center text-4xl font-bold text-primary-foreground animate-pulse-glow animate-fadeInUp shadow-2xl">
              PM
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold mb-4 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              Hi, I'm <span className="gradient-text">Priyen Mehta</span>
            </h1>

            <h2
              className="text-xl sm:text-2xl text-muted-foreground mb-6 animate-fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              Senior Software Engineer
            </h2>

            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fadeInUp leading-relaxed"
              style={{ animationDelay: "0.6s" }}
            >
              Passionate full-stack developer with 5+ years of experience building scalable web applications, AI-powered
              solutions, and robust testing frameworks. Specialized in React, Next.js, and modern JavaScript ecosystem.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fadeInUp"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="w-full sm:w-auto hover-lift group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
            >
              <Mail className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto hover-lift group glass-effect transition-all duration-300 hover:bg-primary/10 bg-transparent cursor-pointer"
              onClick={downloadResume}
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12 animate-fadeInUp" style={{ animationDelay: "1s" }}>
            <a
              href="https://github.com/priyen27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/priyen-mehta-4b3476189/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:priyenmehta27@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce hover:text-primary transition-colors duration-300 animate-fadeInUp"
            style={{ animationDelay: "1.2s" }}
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
            <span className="sr-only">Scroll to about section</span>
          </button>
        </div>
      </div>
    </section>
  )
}
