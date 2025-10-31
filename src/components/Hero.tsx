import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/golf-ball-field.jpg";
import GolfBallAnimation from "./GolfBallAnimation";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful golf course - AI-powered golf improvement"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-accent/20" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Golf Ball Animations */}
      <GolfBallAnimation />

      {/* Animated Background Elements - Golf themed */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-15">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20 animate-fade-in">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-white">AI-Powered Golf Performance Platform</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-up drop-shadow-2xl">
            Transform Your{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">Golf Game</span>
              <span className="absolute inset-0 bg-primary/30 blur-xl animate-pulse" />
            </span>
            {" "}with AI
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Personalized equipment fitting, swing analysis, practice plans, and course strategy — all powered by advanced artificial intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button
              size="default"
              variant="default"
              className="group bg-primary text-white hover:bg-primary-glow hover:shadow-xl transition-all duration-300 font-semibold"
              asChild
            >
              <Link to="/signup">
                Start Your Golf Journey
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              size="default"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 hover:border-white transition-all duration-300 font-medium"
              onClick={() => {
                const element = document.getElementById('how-it-works');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See How It Works
            </Button>
          </div>

          {/* Animated Stats - Golf themed */}
          <div className="mt-16 grid grid-cols-3 gap-6 lg:gap-12 max-w-2xl mx-auto">
            {[
              { number: "15K+", label: "Golfers Improved", delay: '0.5s' },
              { number: "4.8", label: "Strokes Reduced", delay: '0.6s' },
              { number: "AI", label: "Powered Analysis", delay: '0.7s' }
            ].map((stat, index) => (
              <div
                key={index}
                className="animate-fade-up group cursor-default"
                style={{ animationDelay: stat.delay }}
              >
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-1 group-hover:scale-105 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-xs md:text-sm text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
