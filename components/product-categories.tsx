"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import { toast } from "react-toastify";

const categories = [
  {
    name: "Agricultural Tools",
    image: "/electric grass cutter.png",
    count: 45,
    color: "from-green-900/80 to-green-700/80",
    description:
      "Complete range of agricultural machinery and tools for modern farming needs.",
    items: [
      "Power Tillers",
      "Grass Cutters",
      "Spraying Equipment",
      "Harvesting Tools",
      "Irrigation Systems",
    ],
  },
  {
    name: "Carpentry Tools",
    image: "/Router.png",
    count: 32,
    color: "from-amber-900/80 to-amber-700/80",
    description:
      "Professional-grade carpentry tools for precision woodworking.",
    items: [
      "Wood Routers",
      "Power Planers",
      "Electric Drills",
      "Sanders",
      "Saw Machines",
    ],
  },
  {
    name: "Plumbing & Irrigation",
    image: "/sprinkler.png",
    count: 28,
    color: "from-blue-900/80 to-blue-700/80",
    description:
      "Complete plumbing solutions and irrigation systems for agriculture.",
    items: [
      "Water Pumps",
      "Pipe Systems",
      "Sprinklers",
      "Drip Irrigation Kits",
      "Plumbing Tools",
    ],
  },
  {
    name: "Construction Tools",
    image: "/marble cutter.jpg",
    count: 19,
    color: "from-yellow-900/80 to-yellow-700/80",
    description: "Heavy-duty construction tools for professional use.",
    items: [
      "Marble Cutters",
      "Concrete Tools",
      "Measuring Equipment",
      "Safety Gear",
      "Power Tools",
    ],
  },
];

export default function ProductCategories() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Product Categories
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a wide range of high-quality products to meet all your
            agricultural and construction needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-lg group h-80 cursor-pointer"
              onClick={() => setSelectedCategory(index)}
            >
              <div className="relative h-full w-full">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${category.color}`}
                ></div>

                <CardContent className="relative z-10 h-full flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white/80 mb-4">
                    {category.count} products
                  </p>
                  <Button
                    variant="outline"
                    className="w-full bg-white/10 text-white border-white/20 hover:bg-white/20 group-hover:bg-primary group-hover:border-primary transition-colors"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog
        open={selectedCategory !== null}
        onOpenChange={() => setSelectedCategory(null)}
      >
        <DialogContent className="sm:max-w-[600px]">
          {selectedCategory !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {categories[selectedCategory].name}
                </DialogTitle>
                <DialogDescription className="text-lg mt-2">
                  {categories[selectedCategory].description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <div className="mb-6">
                  <img
                    src={
                      categories[selectedCategory].image || "/placeholder.svg"
                    }
                    alt={categories[selectedCategory].name}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
                <h4 className="font-semibold mb-3">Available Products:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categories[selectedCategory].items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <p className="text-muted-foreground mb-4">
                    We offer a wide range of{" "}
                    {categories[selectedCategory].name.toLowerCase()} from
                    trusted manufacturers with warranty and after-sales service.
                  </p>
                  <div className="text-center">
                    <Button
                      onClick={() => {
                        setSelectedCategory(null);
                        toast.success(
                          `You've selected ${categories[selectedCategory].name} category. Contact us for more details.`
                        );
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Contact Us For More Details
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
