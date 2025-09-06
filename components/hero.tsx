"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, ArrowDown, Star, Sparkles } from "lucide-react"
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
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 dark:from-slate-950 dark:via-indigo-950/30 dark:to-purple-950/20" />
      
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 dark:from-indigo-600/10 dark:to-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 dark:from-purple-600/10 dark:to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-indigo-400/5 dark:from-blue-600/5 dark:to-indigo-600/5 rounded-full blur-2xl animate-bounce" />

      {/* Floating particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-indigo-500/30 rounded-full animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute top-40 right-20 w-3 h-3 bg-purple-500/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-pink-500/40 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-60 left-1/3 w-2 h-2 bg-blue-500/30 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-12">
            {/* Enhanced badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-400/20 dark:to-purple-400/20 border border-indigo-200/50 dark:border-indigo-800/50 mb-8 animate-fadeInUp backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400 animate-pulse" />
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Available for new opportunities</span>
            </div>

            {/* Enhanced Avatar */}
            <div className="relative w-40 h-40 mx-auto mb-8 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow" />
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-5xl font-bold text-white shadow-2xl backdrop-blur-sm">
                PM
              </div>
              <div className="absolute -top-2 -right-2">
                <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-slate-900 animate-pulse" />
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fadeInUp bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 dark:from-white dark:via-indigo-100 dark:to-white bg-clip-text text-transparent" style={{ animationDelay: "0.2s" }}>
              Hi, I'm <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Priyen Mehta</span>
            </h1>

            <h2
              className="text-2xl sm:text-3xl text-slate-600 dark:text-slate-300 mb-8 animate-fadeInUp font-medium"
              style={{ animationDelay: "0.4s" }}
            >
              Senior Software Engineer
            </h2>

            <p
              className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12 animate-fadeInUp leading-relaxed"
              style={{ animationDelay: "0.6s" }}
            >
              Passionate full-stack developer with 5+ years of experience building scalable web applications, AI-powered
              solutions, and robust testing frameworks. Specialized in React, Next.js, and modern JavaScript ecosystem.
            </p>
          </div>

          {/* Enhanced action buttons */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fadeInUp"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="w-full sm:w-auto group relative overflow-hidden px-8 py-4 text-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25 dark:hover:shadow-indigo-400/25"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce relative z-10" />
              <span className="relative z-10">Get In Touch</span>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto group relative overflow-hidden px-8 py-4 text-lg bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-500 hover:scale-105 hover:shadow-xl"
              onClick={downloadResume}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-400/10 dark:to-purple-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </Button>
          </div>

          {/* Enhanced social links */}
          <div className="flex justify-center space-x-8 mb-16 animate-fadeInUp" style={{ animationDelay: "1s" }}>
            {[
              { icon: Github, href: "https://github.com/priyen27", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/priyen-mehta-4b3476189/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:priyenmehta27@gmail.com", label: "Email" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : "_blank"}
                rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                className="group relative p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 hover:border-indigo-300/50 dark:hover:border-indigo-600/50 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6 text-slate-600 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300" />
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-400/10 dark:to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </div>

          {/* Enhanced scroll indicator */}
          <button
            onClick={scrollToAbout}
            className="group relative animate-bounce hover:animate-none transition-all duration-300 animate-fadeInUp p-2 rounded-full bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm border border-slate-200/30 dark:border-slate-700/30 hover:border-indigo-300/50 dark:hover:border-indigo-600/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20"
            style={{ animationDelay: "1.2s" }}
          >
            <ArrowDown className="h-6 w-6 text-slate-600 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300" />
            <span className="sr-only">Scroll to about section</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-400/10 dark:to-purple-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}
