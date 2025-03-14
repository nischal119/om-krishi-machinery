"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { scrollToSection } from "@/lib/utils"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70 z-10" />
        <img
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop"
          alt="Agricultural machinery in Nepal"
          className="w-full h-full object-cover"
          priority="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-screen flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium tracking-wide">
              Nepal's Premier Agricultural Machinery Provider
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Powering Nepal's <br />
            <span className="text-primary">Agricultural Future</span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/90 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            From advanced farming equipment to solar solutions, we provide high-quality machinery and expert services to
            boost agricultural productivity across Nepal.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => scrollToSection("products")}
            >
              Explore Our Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              className="bg-white/10 text-white border-2 border-white hover:bg-white/20"
              onClick={() => scrollToSection("services")}
            >
              Our Services
            </Button>
          </motion.div>

          <motion.div
            className="mt-16 hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="flex items-center gap-8">
              <div className="flex -space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
                  alt="Nepali farmer testimonial"
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=400&fit=crop"
                  alt="Nepali farmer testimonial"
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
                  alt="Nepali farmer testimonial"
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
              </div>
              <div className="text-white">
                <p className="font-medium">Trusted by 500+ farmers across Nepal</p>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-sm">5.0 (120+ reviews)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 2,
        }}
      >
        <button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center text-white hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="h-6 w-6" />
        </button>
      </motion.div>
    </section>
  )
}

