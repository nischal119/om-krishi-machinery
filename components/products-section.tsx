// Remove parallax effects but keep other animations
"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Check, Star } from "lucide-react"
import { toast } from "react-toastify"
import { productData } from "@/lib/product-data"
import { motion } from "framer-motion"

// Group products by category
const productCategories = [
  {
    id: "agricultural",
    name: "Agricultural Tools",
    products: productData.filter((p) => p.category === "agricultural"),
  },
  {
    id: "carpentry",
    name: "Carpentry Tools",
    products: productData.filter((p) => p.category === "carpentry"),
  },
  {
    id: "plumbing",
    name: "Plumbing & Irrigation",
    products: productData.filter((p) => p.category === "plumbing"),
  },
  {
    id: "solar",
    name: "Solar Products",
    products: productData.filter((p) => p.category === "solar"),
  },
]

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof productData)[0] | null>(null)

  const handleViewDetails = (product: any) => {
    setSelectedProduct(product)
    toast.info(`Viewing details for ${product.name}`)
  }

  return (
    <section id="products" className="section-padding">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of high-quality agricultural machinery and tools
          </p>
        </motion.div>

        <Tabs defaultValue="agricultural" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            {productCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {productCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {category.products.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                      <div className="relative h-[200px]">
                        {" "}
                        {/* Increased height and made it consistent */}
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-contain p-4" // Changed to object-contain and added padding
                        />
                        {product.isNew && (
                          <Badge className="absolute top-2 right-2" variant="default">
                            New
                          </Badge>
                        )}
                        {product.isPopular && !product.isNew && (
                          <Badge className="absolute top-2 right-2" variant="secondary">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="font-semibold text-primary">{product.price}</p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          className="w-full hover:bg-primary hover:text-white"
                          onClick={() => handleViewDetails(product)}
                        >
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg font-medium mb-6">And many more products with all spare parts & reasonable pricing</p>
          <Button
            size="lg"
            onClick={() => {
              toast.success("Our complete product catalog will be available soon!")
            }}
          >
            View All Products
          </Button>
        </motion.div>
      </div>

      {/* Product Details Dialog */}
      <Dialog open={selectedProduct !== null} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="sm:max-w-[600px]">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProduct.name}</DialogTitle>
                <DialogDescription className="text-lg mt-2">{selectedProduct.description}</DialogDescription>
              </DialogHeader>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    className="w-full h-auto rounded-md"
                  />
                  <p className="text-xl font-bold text-primary mt-4">{selectedProduct.price}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(selectedProduct.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Key Features:</h3>
                    <ul className="space-y-1">
                      {selectedProduct.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Specifications:</h3>
                    <div className="space-y-1">
                      {Object.entries(selectedProduct.specifications).map(([key, value], i) => (
                        <div key={i} className="grid grid-cols-2 text-sm">
                          <span className="text-muted-foreground">{key}:</span>
                          <span>{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button
                  onClick={() => {
                    setSelectedProduct(null)
                    toast.success(`Your inquiry about ${selectedProduct.name} has been sent. We'll contact you soon.`)
                  }}
                >
                  Request Quote
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

