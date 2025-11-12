import { Zap, Users, Sparkles, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Create professional video ads in minutes, not hours."
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Smart suggestions and automated editing save you time."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with your marketing team."
  },
  {
    icon: TrendingUp,
    title: "Boost Conversions",
    description: "Templates proven to increase engagement and sales."
  }
];

const Features = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help your video ads perform better
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
