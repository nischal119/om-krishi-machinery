"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, ShoppingBag, Hammer, ArrowRight, Settings, Zap } from "lucide-react"
import { scrollToSection } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

const services = [
  {
    title: "Sales & Distribution",
    description:
      "We offer a comprehensive range of high-quality agricultural machinery, tools, and equipment sourced from trusted manufacturers worldwide.",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop",
    features: [
      "Wide range of agricultural machinery",
      "Carpentry and construction tools",
      "Plumbing pipes and irrigation systems",
      "Solar panels and renewable energy solutions",
      "Genuine spare parts and accessories",
    ],
  },
  {
    title: "Repair & Maintenance",
    description:
      "Our expert technicians provide reliable repair and maintenance services for all types of agricultural machinery and tools to keep your equipment running smoothly.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
    features: [
      "Diagnostic and troubleshooting services",
      "Engine repair and overhaul",
      "Electrical system repairs",
      "Hydraulic system maintenance",
      "Preventive maintenance programs",
    ],
  },
  {
    title: "Installation & Setup",
    description:
      "Professional installation services for agricultural equipment, solar panels, irrigation systems, and more, ensuring optimal performance and longevity.",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2071&auto=format&fit=crop",
    features: [
      "Solar panel system installation",
      "Irrigation system setup",
      "Equipment assembly and configuration",
      "On-site testing and calibration",
      "User training and operation guidance",
    ],
  },
  {
    title: "Consultation & Support",
    description:
      "Our agricultural experts provide personalized consultation to help you choose the right equipment and solutions for your specific farming needs.",
    icon: Settings,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Equipment selection guidance",
      "Farm mechanization planning",
      "Irrigation system design",
      "Solar energy solution planning",
      "After-sales technical support",
    ],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function ServicesSection() {
  const { toast } = useToast()

  const handleLearnMore = (title: string) => {
    toast({
      title: `${title} Service`,
      description: `You've selected our ${title} service. Contact us for more information.`,
      duration: 3000,
    })
    scrollToSection("contact")
  }

  const handleCustomServiceRequest = () => {
    toast({
      title: "Custom Service Request",
      description: "Thank you for your interest! Please fill out the contact form below.",
      duration: 3000,
    })
    scrollToSection("contact")
  }

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Comprehensive Services</h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide end-to-end solutions for all your agricultural machinery and equipment needs, from sales and
            installation to repair and maintenance.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-primary text-white p-3 rounded-full">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>

                <div className="flex flex-col flex-grow p-6">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <div className="flex-grow">
                    <h4 className="font-medium mb-3 text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Zap className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className="w-full mt-6 group bg-primary hover:bg-primary/90 text-white"
                    onClick={() => handleLearnMore(service.title)}
                  >
                    Learn More About {service.title}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-3xl mx-auto bg-primary/10 rounded-lg p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Need Custom Services?</h3>
            <p className="text-muted-foreground mb-6">
              We understand that every farm has unique requirements. Contact us for customized solutions tailored to
              your specific needs.
            </p>
            <Button size="lg" onClick={handleCustomServiceRequest}>
              Request Custom Service
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

