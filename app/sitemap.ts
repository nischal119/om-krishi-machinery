import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://omkrishimachinery.com.np",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://omkrishimachinery.com.np/products",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://omkrishimachinery.com.np/services",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://omkrishimachinery.com.np/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://omkrishimachinery.com.np/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    // Add product category pages
    {
      url: "https://omkrishimachinery.com.np/products/agricultural-tools",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://omkrishimachinery.com.np/products/carpentry-tools",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://omkrishimachinery.com.np/products/plumbing-irrigation",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://omkrishimachinery.com.np/products/solar-products",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // Add individual product pages for key products
    {
      url: "https://omkrishimachinery.com.np/products/electric-grass-cutter",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://omkrishimachinery.com.np/products/chainsaw",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://omkrishimachinery.com.np/products/tiller",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://omkrishimachinery.com.np/products/solar-panel",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Add service pages
    {
      url: "https://omkrishimachinery.com.np/services/repair-maintenance",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://omkrishimachinery.com.np/services/installation",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Add blog pages (if you add a blog)
    {
      url: "https://omkrishimachinery.com.np/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}
