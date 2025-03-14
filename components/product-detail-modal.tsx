"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Check, ShoppingCart, Heart, Share2 } from "lucide-react"

interface ProductDetailModalProps {
  isOpen: boolean
  onClose: () => void
  product: {
    name: string
    price: string
    description: string
    image: string
    rating: number
    reviews: number
    features: string[]
    specifications: Record<string, string>
    availability: string
  }
}

export default function ProductDetailModal({ isOpen, onClose, product }: ProductDetailModalProps) {
  const [quantity, setQuantity] = useState(1)

  const increaseQuantity = () => setQuantity((prev) => prev + 1)
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative h-full">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
            <Badge className="absolute top-4 right-4" variant="secondary">
              {product.availability}
            </Badge>
          </div>

          {/* Product Details */}
          <div className="p-6 flex flex-col h-full">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
              <DialogDescription>
                <div className="flex items-center mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4">
              <span className="text-2xl font-bold text-primary">{product.price}</span>
            </div>

            <Tabs defaultValue="description" className="mt-6 flex-grow">
              <TabsList>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-4">
                <p>{product.description}</p>
              </TabsContent>

              <TabsContent value="features" className="mt-4">
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>

              <TabsContent value="specifications" className="mt-4">
                <div className="space-y-2">
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <div key={index} className="grid grid-cols-2 py-2 border-b">
                      <span className="font-medium">{key}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 pt-4 border-t">
              <div className="flex items-center mb-4">
                <span className="mr-4">Quantity:</span>
                <div className="flex items-center">
                  <Button variant="outline" size="icon" onClick={decreaseQuantity} disabled={quantity <= 1}>
                    -
                  </Button>
                  <span className="mx-4 w-8 text-center">{quantity}</span>
                  <Button variant="outline" size="icon" onClick={increaseQuantity}>
                    +
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button className="flex-1" size="lg">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

