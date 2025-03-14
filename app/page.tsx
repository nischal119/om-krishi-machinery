import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ProductsSection from "@/components/products-section"
import FeaturedProducts from "@/components/featured-products"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import ProductCategories from "@/components/product-categories"
import AboutSection from "@/components/about-section"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <AboutSection />
      <ProductCategories />
      <ServicesSection />
      <ProductsSection />
      <FeaturedProducts />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}

