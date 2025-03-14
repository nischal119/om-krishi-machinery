"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function AboutSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const contentY = useTransform(scrollYProgress, [0, 1], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-muted/20 overflow-hidden" ref={ref}>
      <motion.div className="container mx-auto px-4" style={{ opacity }}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Om Krishi Machinery</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="order-2 lg:order-1" style={{ y: imageY }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-lg"></div>
              <div className="relative max-w-lg mx-auto">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about%20-ikABpEd1Fa5kl0HRY8oEXBbkbl5i01.png"
                  alt="Mr. Gopal Dhungel - Founder of Om Krishi Machinery"
                  className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-8 rounded-b-lg">
                  <h3 className="text-2xl font-semibold text-white mb-2">Mr. Gopal Dhungel</h3>
                  <p className="text-white/90 text-lg">Founder & CEO</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="order-1 lg:order-2 space-y-6" style={{ y: contentY }}>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <motion.p
                className="text-lg leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Under the visionary leadership of Mr. Gopal Dhungel, Om Krishi Machinery has grown to become a trusted
                name in Nepal's agricultural and industrial equipment sector. Our commitment to quality and customer
                satisfaction has made us the preferred choice for farmers and professionals across the country.
              </motion.p>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To empower Nepal's agricultural and industrial sectors by providing reliable machinery, expert
                    services, and innovative solutions that enhance productivity and sustainability.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <span className="h-6 w-6 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                          ✓
                        </span>
                        <span>15+ years of experience</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="h-6 w-6 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                          ✓
                        </span>
                        <span>Premium quality products</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="h-6 w-6 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                          ✓
                        </span>
                        <span>Expert technical support</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <span className="h-6 w-6 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                          ✓
                        </span>
                        <span>Competitive pricing</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="h-6 w-6 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                          ✓
                        </span>
                        <span>Genuine parts guarantee</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="h-6 w-6 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                          ✓
                        </span>
                        <span>Comprehensive warranty</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

