"use client"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">Om Krishi Machinery</h3>
            <p className="text-muted-foreground mb-4">
              Your trusted partner for agricultural machinery, tools, and services in Nepal.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Product Categories</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Agricultural Tools
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Carpentry Tools
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Plumbing & Irrigation
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Solar Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Spare Parts
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <address className="not-italic text-muted-foreground">
              <p className="mb-2">School Chowk, Budhabare</p>
              <p className="mb-2">Phone: 023-555-205, 9852656612</p>
              <p className="mb-2">Email: info@omkrishimachinery.com.np</p>
              <p>Business Hours: Sun-Fri, 9AM - 6PM</p>
            </address>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} Om Krishi Machinery. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-muted-foreground text-sm">
                Designed and developed by{" "}
                <a
                  href="https://dhungelnischal.com.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Nischal
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

