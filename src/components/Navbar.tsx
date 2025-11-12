import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Play className="w-4 h-4 text-primary-foreground fill-current" />
            </div>
            <span className="text-xl font-bold text-foreground">VidAds</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#templates" className="text-foreground/80 hover:text-foreground transition-colors">
              Templates
            </a>
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#showcase" className="text-foreground/80 hover:text-foreground transition-colors">
              Showcase
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden md:inline-flex">
              Log In
            </Button>
            <Button>Sign Up Free</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
