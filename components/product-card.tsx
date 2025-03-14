"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, ShoppingCart } from "lucide-react"
import ProductDetailModal from "@/components/product-detail-modal"
import { useToast } from "@/hooks/use-toast"

interface ProductCardProps {
  product: {
    id: string
    name: string
    image: string
    price: string
    isNew?: boolean
    isSale?: boolean
    isPopular?: boolean
    rating: number
    reviews: number
    description: string
    features: string[]
    specifications: Record<string, string>
    availability: string
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { toast } = useToast()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <>
      <Card
        className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
          {product.isNew && (
            <Badge className="absolute top-2 right-2" variant="default">
              New
            </Badge>
          )}
          {product.isSale && (
            <Badge className="absolute top-2 right-2" variant="destructive">
              Sale
            </Badge>
          )}
          {product.isPopular && !product.isNew && !product.isSale && (
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
          <div className="flex items-center mt-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
          </div>
        </CardContent>
        <CardFooter className="grid grid-cols-2 gap-2">
          <Button variant="outline" className="w-full">
            <Eye className="mr-2 h-4 w-4" />
            Details
          </Button>
          <Button className="w-full" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add
          </Button>
        </CardFooter>
      </Card>

      {isModalOpen && (
        <ProductDetailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product={product} />
      )}
    </>
  )
}

