"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "react-toastify";
import { productData } from "@/lib/product-data";

// Get specific products for featured section
const chainsaw =
  productData.find((p) => p.name === "Chainsaw") || productData[1];
const sprinkler =
  productData.find((p) => p.name === "Sprinkler System") || productData[5];
const tiller = productData.find((p) => p.name === "Tiller") || productData[3];

const featuredProducts = [
  {
    ...chainsaw,
    badge: "Best Seller",
  },
  {
    ...sprinkler,
    badge: "New Arrival",
  },
  {
    ...tiller,
    badge: "Popular",
  },
];

export default function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof featuredProducts)[0] | null
  >(null);

  return (
    <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Products
            </h2>
            <p className="text-muted-foreground mt-2">
              Our most popular and high-quality offerings
            </p>
          </div>
          <Button
            variant="link"
            className="mt-4 md:mt-0 group"
            onClick={() => {
              toast.info("Scroll down to see all our product categories");
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View all products{" "}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-lg group"
            >
              <div className="relative h-64 bg-muted/30">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge className="absolute top-4 right-4" variant="secondary">
                  {product.badge}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-primary">
                    {product.price}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-white transition-colors"
                    onClick={() => setSelectedProduct(product)}
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-muted rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">
            Need Help Finding the Right Product?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our experts can help you choose the perfect equipment for your
            specific agricultural needs. Get personalized recommendations based
            on your farm size, crop type, and budget.
          </p>
          <Button
            size="lg"
            onClick={() => {
              toast.info(
                "Please contact us using the form below for personalized recommendations."
              );
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Product Recommendations
          </Button>
        </div>
      </div>

      {/* Product Details Dialog */}
      <Dialog
        open={selectedProduct !== null}
        onOpenChange={() => setSelectedProduct(null)}
      >
        <DialogContent className="sm:max-w-[600px]">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {selectedProduct.name}
                </DialogTitle>
                <DialogDescription className="text-lg mt-2">
                  {selectedProduct.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    className="w-full h-auto rounded-md"
                  />
                  <p className="text-xl font-bold text-primary mt-4">
                    {selectedProduct.price}
                  </p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(selectedProduct.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      {selectedProduct.rating} ({selectedProduct.reviews}{" "}
                      reviews)
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
                      {Object.entries(selectedProduct.specifications).map(
                        ([key, value], i) => (
                          <div key={i} className="grid grid-cols-2 text-sm">
                            <span className="text-muted-foreground">
                              {key}:
                            </span>
                            <span>{value}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button
                  onClick={() => {
                    setSelectedProduct(null);
                    toast.success(
                      `Your inquiry about ${selectedProduct.name} has been sent. We'll contact you soon.`
                    );
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
  );
}
