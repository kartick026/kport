import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kartick Sharma</h3>
            <p className="text-sm text-muted-foreground">
              B.Tech CSE student at VIT Vellore passionate about AI/ML, web development,
              and 3D visualization technologies.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Vellore, India</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link
                href="/projects"
                className="block text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/experience"
                className="block text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Experience
              </Link>
              <Link
                href="/about"
                className="block text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/kartick026"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/kartick-sharma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:sharmakartick026@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Kartick Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
