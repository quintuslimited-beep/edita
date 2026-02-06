import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import editaLogo from "@/assets/edita-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={editaLogo} alt="Edita logo" className="w-10 h-10 hue-rotate-[280deg] saturate-150" />
            <span className="text-xl font-bold text-foreground">Edita</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/templates" className="text-foreground/80 hover:text-foreground transition-colors">
              Templates
            </Link>
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
            <a href="#waitlist">
              <Button>Join Waitlist</Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
