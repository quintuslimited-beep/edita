import { FileVideo, Palette, Download } from "lucide-react";

const steps = [
  {
    icon: FileVideo,
    title: "Choose Template",
    description: "Browse our library of professional video ad templates designed to convert."
  },
  {
    icon: Palette,
    title: "Customize Design",
    description: "Easily personalize colors, text, images, and branding to match your style."
  },
  {
    icon: Download,
    title: "Export & Share",
    description: "Download your video ad in any format and share it across all platforms."
  }
];

const HowItWorks = () => {
  return (
    <section id="features" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create professional video ads in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground mb-4">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
