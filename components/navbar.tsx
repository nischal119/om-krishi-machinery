"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => scrollToSection("home")} className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Om%20logo%20png-axCoetxv1cvCwdzIY3mSfKA2r8joZi.png"
              alt="Om Krishi Machinery Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              ["home", "Home"],
              ["about", "About"],
              ["services", "Services"],
              ["products", "Products"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={cn(
                  "font-medium transition-colors",
                  isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary-foreground",
                )}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Button variant="default" size="sm" onClick={() => scrollToSection("contact")}>
              Get a Quote
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={cn("ml-2", !isScrolled && !isOpen ? "text-white hover:bg-white/10" : "")}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {[
              ["home", "Home"],
              ["about", "About"],
              ["services", "Services"],
              ["products", "Products"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="block w-full text-left py-2 text-foreground hover:text-primary font-medium"
              >
                {label}
              </button>
            ))}
            <Button variant="default" size="sm" className="w-full" onClick={() => scrollToSection("contact")}>
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

