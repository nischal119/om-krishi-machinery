"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ramesh Sharma",
    role: "Farmer, Jhapa",
    content:
      "The quality of agricultural tools from Om Krishi Machinery is exceptional. Their after-sales service is prompt and reliable. I've been their customer for over 5 years now.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    name: "Sita Tamang",
    role: "Farm Owner, Budhabare",
    content:
      "I purchased a solar panel system from Om Krishi Machinery, and their installation service was professional and quick. The system has been working flawlessly for the past 2 years.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    name: "Bikash Rai",
    role: "Carpenter, Damak",
    content:
      "Their carpentry tools are of high quality and reasonably priced. Whenever I need any repairs, they provide excellent service. Highly recommended for all your tool needs.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8 md:p-12">
              <Quote className="h-12 w-12 text-primary/20 mb-6" />

              <p className="text-lg md:text-xl mb-8 italic">{testimonials[currentIndex].content}</p>

              <div className="flex items-center">
                <img
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 gap-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"}`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <span className="sr-only">Testimonial {index + 1}</span>
                </button>
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

