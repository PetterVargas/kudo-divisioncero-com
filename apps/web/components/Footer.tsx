"use client";

import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function MinimalFooter() {

  return (
    <footer className="flex items-center justify-between p-4 border-b">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <span className="text-sm font-medium">Built by {" "} 
            <Link
                href="https://petervargas.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4 hover:text-primary"
              >
               Peter Vargas 
            </Link>
            . The source code is available on {" "} 
            <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4 hover:text-primary"
              >GitHub 
            </Link> 
            . 👨🏽‍💻</span>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>

          <Link
            href="https://twitter.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>

          <Link
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>

          <Link
            href="mailto:hello@example.com"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
    </footer>
  )
}

