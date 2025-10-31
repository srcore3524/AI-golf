import { Target, Brain, TrendingUp, Zap, ClipboardCheck, Trophy, Flag, Crosshair } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning algorithms analyze your complete golf profile, creating a comprehensive understanding of your unique game characteristics and potential.",
    gradient: "from-primary/20 to-primary/5",
    iconGradient: "from-primary to-primary-glow"
  },
  {
    icon: Crosshair,
    title: "Precision Equipment Fitting",
    description: "Receive detailed recommendations for drivers, irons, wedges, putters, and balls calibrated to your exact swing dynamics and physical measurements.",
    gradient: "from-accent/20 to-accent/5",
    iconGradient: "from-accent to-accent/80"
  },
  {
    icon: ClipboardCheck,
    title: "Structured Practice Plans",
    description: "Customized three-part training routines covering long game, short game, and putting—each designed to target your specific areas for improvement.",
    gradient: "from-primary/20 to-primary/5",
    iconGradient: "from-primary to-primary-glow"
  },
  {
    icon: Zap,
    title: "Swing Optimization",
    description: "Targeted drills and technical adjustments designed for your shot patterns and tendencies, building consistency and eliminating common misses.",
    gradient: "from-accent/20 to-accent/5",
    iconGradient: "from-accent to-accent/80"
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Track your evolution with advanced metrics, handicap calculations, and detailed scoring analysis across multiple rounds and time periods.",
    gradient: "from-primary/20 to-primary/5",
    iconGradient: "from-primary to-primary-glow"
  },
  {
    icon: Flag,
    title: "Strategic Course Management",
    description: "Smart decision-making frameworks and course management insights that help you play smarter golf and lower scores immediately.",
    gradient: "from-accent/20 to-accent/5",
    iconGradient: "from-accent to-accent/80"
  }
];

const Features = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-32 bg-gradient-to-b from-primary/5 via-background to-background relative overflow-hidden">
      {/* Background decoration - Golf themed */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        {/* Golf ball decorations */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-white rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4 border border-primary/20">
            <span className="text-xs font-bold text-primary">🏌️ Complete Golf Performance Platform</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-glow to-accent">
              Lower Your Score
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AI-driven insights for every aspect of your golf game
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleCards.includes(index);
            return (
              <Card 
                key={index}
                data-index={index}
                className={`feature-card group p-8 hover:shadow-2xl transition-all duration-500 bg-card border-border relative overflow-hidden ${
                  isVisible ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transitionDelay: `${index * 0.05}s`
                }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'var(--gradient-shine)',
                    backgroundSize: '200% 100%',
                  }}
                />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.iconGradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
