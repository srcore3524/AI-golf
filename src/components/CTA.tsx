import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-primary via-primary-glow to-primary relative overflow-hidden">
      {/* Animated decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
                         linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-5 py-2.5 bg-accent/20 backdrop-blur-sm rounded-full mb-8 animate-fade-in">
            <span className="text-sm font-semibold text-accent">Ready to Transform</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-8 leading-tight animate-fade-up">
            Experience the Future of{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Golf Intelligence</span>
              <span className="absolute inset-0 bg-accent/30 blur-2xl animate-pulse" />
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Join the next generation of golfers using AI-powered insights to elevate their performance. 
            See what Birdie AI can do for your game.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="xl" 
              variant="premium"
              className="group text-lg hover:shadow-2xl hover:scale-105"
            >
              Request Platform Demo
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button 
              size="xl" 
              variant="outline"
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg hover:border-primary-foreground hover:scale-105 transition-all duration-300"
            >
              <Mail className="mr-2" />
              Contact Sales
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 text-primary-foreground/80 text-sm animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                <Check className="w-3 h-3 text-accent-foreground" />
              </div>
              <span>Personalized analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                <Check className="w-3 h-3 text-accent-foreground" />
              </div>
              <span>Expert recommendations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                <Check className="w-3 h-3 text-accent-foreground" />
              </div>
              <span>Continuous improvement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Check = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default CTA;
