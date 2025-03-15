import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CalendarIcon, Clock, Tag, User } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Best Agricultural Machinery for Small Farms in Nepal",
    excerpt:
      "Discover the most efficient and cost-effective agricultural machinery options for small-scale farming operations in Nepal.",
    date: "March 10, 2025",
    author: "Gopal Dhungel",
    readTime: "5 min read",
    category: "Farming Equipment",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
    slug: "best-agricultural-machinery-small-farms-nepal",
  },
  {
    id: 2,
    title: "How to Choose the Right Solar Panel System for Your Home",
    excerpt:
      "A comprehensive guide to selecting the perfect solar panel system based on your energy needs, budget, and location in Nepal.",
    date: "February 25, 2025",
    author: "Sita Tamang",
    readTime: "7 min read",
    category: "Solar Energy",
    image: "/Untitled.png",
    slug: "choose-right-solar-panel-system-home-nepal",
  },
  {
    id: 3,
    title: "Maintenance Tips for Agricultural Tools to Extend Their Lifespan",
    excerpt:
      "Learn essential maintenance practices to keep your agricultural tools and machinery in top condition for years to come.",
    date: "February 15, 2025",
    author: "Ramesh Sharma",
    readTime: "6 min read",
    category: "Tool Maintenance",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/electric%20grass%20cutter-UVCJ5luhI8pCWH18pV08lj9T6Nf0oZ.png",
    slug: "maintenance-tips-agricultural-tools-extend-lifespan",
  },
  {
    id: 4,
    title:
      "Modern Irrigation Systems for Efficient Water Usage in Nepali Farms",
    excerpt:
      "Explore the latest irrigation technologies that can help Nepali farmers conserve water while improving crop yields.",
    date: "January 30, 2025",
    author: "Bikash Rai",
    readTime: "8 min read",
    category: "Irrigation",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/irrigation-g6pAHyFQa8rPfAKj9n9PUkEKF45M8V.png",
    slug: "modern-irrigation-systems-efficient-water-usage-nepal",
  },
];

export const metadata = {
  title: "Blog - Om Krishi Machinery | Agricultural Equipment & Tools in Nepal",
  description:
    "Read our latest articles on agricultural machinery, farming techniques, solar energy solutions, and tool maintenance tips for Nepali farmers and businesses.",
  keywords:
    "agricultural blog Nepal, farming tips, solar energy Nepal, tool maintenance, irrigation systems, agricultural machinery blog",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Expert insights, tips, and news about agricultural machinery, farming
          techniques, and sustainable energy solutions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="relative h-48">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <CalendarIcon className="h-4 w-4" />
                <span>{post.date}</span>
                <Separator orientation="vertical" className="h-4" />
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <CardTitle className="text-xl hover:text-primary transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </CardTitle>
              <CardDescription className="line-clamp-2 mt-2">
                {post.excerpt}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {post.author}
                </span>
                <Separator orientation="vertical" className="h-4" />
                <Tag className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {post.category}
                </span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href={`/blog/${post.slug}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Stay updated with the latest agricultural tips, product releases, and
          special offers
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-2 border rounded-md flex-grow"
          />
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
}
