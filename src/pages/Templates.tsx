import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Play, Star } from "lucide-react";
import videoTemplate1 from "@/assets/video-template-1.jpg";
import videoTemplate2 from "@/assets/video-template-2.jpg";
import videoTemplate3 from "@/assets/video-template-3.jpg";

const categories = ["All", "Real Estate", "E-commerce", "App Launch", "Social Media", "Corporate"];

const templates = [
  {
    id: 1,
    title: "Luxury Property Showcase",
    category: "Real Estate",
    image: videoTemplate1,
    rating: 4.9,
    downloads: "2.3k"
  },
  {
    id: 2,
    title: "Modern Home Tour",
    category: "Real Estate",
    image: videoTemplate3,
    rating: 4.8,
    downloads: "1.8k"
  },
  {
    id: 3,
    title: "Product Launch Promo",
    category: "E-commerce",
    image: videoTemplate2,
    rating: 5.0,
    downloads: "3.1k"
  },
  {
    id: 4,
    title: "Flash Sale Banner",
    category: "E-commerce",
    image: videoTemplate1,
    rating: 4.7,
    downloads: "2.5k"
  },
  {
    id: 5,
    title: "App Store Feature",
    category: "App Launch",
    image: videoTemplate3,
    rating: 4.9,
    downloads: "1.9k"
  },
  {
    id: 6,
    title: "Mobile App Demo",
    category: "App Launch",
    image: videoTemplate2,
    rating: 4.8,
    downloads: "2.7k"
  },
  {
    id: 7,
    title: "Instagram Story Ad",
    category: "Social Media",
    image: videoTemplate1,
    rating: 5.0,
    downloads: "4.2k"
  },
  {
    id: 8,
    title: "TikTok Video Template",
    category: "Social Media",
    image: videoTemplate2,
    rating: 4.9,
    downloads: "3.8k"
  },
  {
    id: 9,
    title: "Company Overview",
    category: "Corporate",
    image: videoTemplate3,
    rating: 4.7,
    downloads: "1.6k"
  },
];

const Templates = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTemplates = selectedCategory === "All" 
    ? templates 
    : templates.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Video Ad Templates
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse our collection of professional templates designed to boost your conversions
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Templates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => (
              <div 
                key={template.id}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all hover:shadow-xl"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={template.image} 
                    alt={template.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button size="lg" className="gap-2">
                      <Play className="w-5 h-5" />
                      Preview
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-background/90 text-foreground">
                    {template.category}
                  </Badge>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span>{template.rating}</span>
                      </div>
                      <span>{template.downloads} downloads</span>
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    Use Template
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-secondary/30 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Can't find what you need?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Request a custom template or let our AI create one for you
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">Request Custom Template</Button>
              <Button size="lg" variant="outline">Contact Sales</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Templates;
