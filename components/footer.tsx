import { Github, Linkedin, Mail, Heart, Star, ArrowUp, Code, Briefcase, User, MessageSquare } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { href: "#about", label: "About", icon: User },
    { href: "#experience", label: "Experience", icon: Briefcase },
    { href: "#projects", label: "Projects", icon: Code },
    { href: "#contact", label: "Contact", icon: MessageSquare },
  ]

  const services = [
    "Full-Stack Development",
    "AI Integration", 
    "Testing & QA",
    "Technical Consulting",
    "Code Reviews"
  ]

  const socialLinks = [
    {
      href: "https://github.com/priyen27",
      icon: Github,
      label: "GitHub",
      color: "hover:text-slate-800 dark:hover:text-slate-200",
      bgColor: "hover:bg-slate-100 dark:hover:bg-slate-800"
    },
    {
      href: "https://www.linkedin.com/in/priyen-mehta-4b3476189/",
      icon: Linkedin,
      label: "LinkedIn", 
      color: "hover:text-blue-600 dark:hover:text-blue-400",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
    },
    {
      href: "mailto:priyenmehta27@gmail.com",
      icon: Mail,
      label: "Email",
      color: "hover:text-red-600 dark:hover:text-red-400",
      bgColor: "hover:bg-red-50 dark:hover:bg-red-900/20"
    }
  ]

  return (
    <footer className="relative overflow-hidden border-t border-slate-200/50 dark:border-slate-800/50">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 dark:from-slate-950 dark:via-indigo-950/30 dark:to-purple-950/20" />
      
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-indigo-400/5 to-purple-400/5 dark:from-indigo-600/10 dark:to-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/5 to-pink-400/5 dark:from-purple-600/10 dark:to-pink-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Enhanced Brand Section */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  PM
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-indigo-900 dark:from-white dark:to-indigo-100 bg-clip-text text-transparent">
                  Priyen Mehta
                </h3>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Senior Software Engineer passionate about building innovative solutions with modern technologies and best practices.
              </p>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : "_blank"}
                  rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                  className={`group relative p-3 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg ${social.bgColor} ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-slate-600 dark:text-slate-400 group-hover:text-current transition-colors duration-300" />
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-400/10 dark:to-purple-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <Star className="h-5 w-5 text-indigo-500" />
              Quick Links
            </h4>
            
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:translate-x-2 p-2 rounded-lg hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20"
                  >
                    <div className="p-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 transition-colors duration-300">
                      <link.icon className="h-4 w-4" />
                    </div>
                    <span className="font-medium">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-purple-500" />
              Services
            </h4>
            
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
                  <span className="font-medium">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enhanced bottom section */}
        <div className="border-t border-slate-200/50 dark:border-slate-700/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-slate-600 dark:text-slate-400 flex items-center gap-2 text-center sm:text-left">
            © {currentYear} Priyen Mehta. Made with{" "}
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />{" "}
            using Next.js & Tailwind CSS
          </p>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-xl hover:border-indigo-300/50 dark:hover:border-indigo-600/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            aria-label="Back to top"
          >
            <span className="text-sm font-medium">Back to Top</span>
            <ArrowUp className="h-4 w-4 group-hover:animate-bounce" />
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-400/10 dark:to-purple-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </footer>
  )
}
