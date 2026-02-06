import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Image, Sparkles, BarChart3 } from "lucide-react";
import videoTemplate1 from "@/assets/video-template-1.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Create High-Converting
              <br />
              Video Ads in Minutes
            </h1>
            
            <p className="text-lg text-muted-foreground font-medium">
              Built for Entrepreneurs, Creators & Online Stores
            </p>

            <p className="text-muted-foreground max-w-lg leading-relaxed">
              Edita gives you the power to produce studio-quality ads, fast. From eye-catching templates to marketing intelligence, everything you need in one platform.
            </p>

            <div className="pt-2">
              <Link to="/templates">
                <Button size="lg" className="text-lg px-8 py-6 rounded-lg">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card rounded-2xl border border-border shadow-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-semibold text-foreground">IGta</span>
              </div>
              <div className="h-px bg-border mb-4" />
              
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src={videoTemplate1} 
                  alt="Video ad template preview" 
                  className="w-full h-auto aspect-[4/3] object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-foreground/90 text-background rounded-lg p-3 text-right">
                  <p className="font-semibold text-sm">Celebrate the</p>
                  <p className="font-bold text-lg">Summer Sale</p>
                  <Button size="sm" className="mt-2 text-xs">
                    Shop Now
                  </Button>
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <Button variant="outline" size="sm" className="flex-1 gap-2">
                  <Image className="w-4 h-4" />
                  Templates
                </Button>
                <Button variant="outline" size="sm" className="flex-1 gap-2">
                  <Sparkles className="w-4 h-4" />
                  Editing
                </Button>
                <Button variant="outline" size="sm" className="flex-1 gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Analytics
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
