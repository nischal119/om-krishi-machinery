import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, SlidersHorizontal } from "lucide-react"
import ProductCard from "@/components/product-card"
import { productData } from "@/lib/product-data"

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">All Products</h1>
          <p className="text-muted-foreground">Browse our complete collection of agricultural machinery and tools</p>
        </div>

        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search products..." className="pl-10" />
          </div>

          <Button variant="outline" size="icon">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="md:col-span-1">
          <div className="sticky top-24 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  "All Products",
                  "Agricultural Tools",
                  "Carpentry Tools",
                  "Plumbing & Irrigation",
                  "Solar Products",
                ].map((category, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        defaultChecked={index === 0}
                      />
                      <span>{category}</span>
                    </label>
                    <Badge variant="outline">{index === 0 ? "124" : Math.floor(Math.random() * 40) + 10}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Price Range</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Input placeholder="Min" className="w-[45%]" defaultValue="0" />
                    <span className="flex items-center">-</span>
                    <Input placeholder="Max" className="w-[45%]" defaultValue="100000" />
                  </div>
                  <Button className="w-full">Apply Filter</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {["In Stock", "Out of Stock", "Pre-order"].map((status, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`status-${index}`}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      defaultChecked={index === 0}
                    />
                    <label htmlFor={`status-${index}`} className="cursor-pointer">
                      {status}
                    </label>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="md:col-span-3">
          <Tabs defaultValue="all" className="w-full mb-8">
            <TabsList>
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="new">New Arrivals</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="sale">On Sale</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productData.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" disabled>
                &lt;
              </Button>
              <Button variant="default" size="icon">
                1
              </Button>
              <Button variant="outline" size="icon">
                2
              </Button>
              <Button variant="outline" size="icon">
                3
              </Button>
              <span>...</span>
              <Button variant="outline" size="icon">
                8
              </Button>
              <Button variant="outline" size="icon">
                &gt;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

