import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import videoTemplate1 from "@/assets/video-template-1.jpg";
import videoTemplate2 from "@/assets/video-template-2.jpg";
import videoTemplate3 from "@/assets/video-template-3.jpg";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Create Stunning
              <br />
              <span className="italic">Video Ads,</span>
              <br />
              Instantly
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              VidAds: Your platform for effortlessly creating video ad templates that convert.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg px-8">
                Browse Templates
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 bg-card">
                  <img 
                    src={videoTemplate1} 
                    alt="Professional business video ad template" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 bg-card">
                  <img 
                    src={videoTemplate3} 
                    alt="Client success story video template" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="pt-12">
                <div className="rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 bg-card">
                  <img 
                    src={videoTemplate2} 
                    alt="Social media product launch video template" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
