import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Priyen Mehta</h3>
            <p className="text-muted-foreground mb-4">
              Senior Software Engineer passionate about building innovative solutions with modern technologies and best
              practices.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/priyen27"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 cursor-pointer p-2 rounded-lg hover:bg-primary/10"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/priyen-mehta-4b3476189/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 cursor-pointer p-2 rounded-lg hover:bg-primary/10"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:priyenmehta27@gmail.com"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 cursor-pointer p-2 rounded-lg hover:bg-primary/10"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 cursor-pointer inline-block">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 cursor-pointer inline-block">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 cursor-pointer inline-block">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 cursor-pointer inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Full-Stack Development</li>
              <li>AI Integration</li>
              <li>Testing & QA</li>
              <li>Technical Consulting</li>
              <li>Code Reviews</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Priyen Mehta. Made with <Heart className="h-4 w-4 text-red-500" /> using Next.js & Tailwind
            CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
