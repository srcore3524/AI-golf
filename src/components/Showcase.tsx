import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Flag } from "lucide-react";

const capabilities = [
  "🏌️ Complete biomechanical swing analysis",
  "⛳ Equipment optimization algorithms",
  "📋 Personalized practice routine generation",
  "📊 Real-time performance tracking",
  "🎯 Strategic course management tips",
  "📈 Progress analytics & handicap tracking"
];

const Showcase = () => {
  return (
    <section id="showcase" className="py-32 bg-gradient-to-b from-accent/5 via-background to-primary/5 relative overflow-hidden">
      {/* Background Elements - Golf themed */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-transparent to-accent" />
        {/* Golf course elements */}
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left: Visual */}
          <div className="animate-slide-in-left">
            <Card className="p-12 bg-gradient-to-br from-primary/5 to-card border-2 border-primary/30 shadow-2xl relative overflow-hidden group">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                    <Flag className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-1">⛳ Golf Performance</div>
                    <div className="text-3xl font-bold text-foreground">Birdie AI Platform</div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {capabilities.map((capability, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-background/60 rounded-xl hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 hover:translate-x-2 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground font-medium text-sm">{capability}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-accent mb-1">250+</div>
                      <div className="text-xs text-muted-foreground">Data Points</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">AI</div>
                      <div className="text-xs text-muted-foreground">Powered</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent mb-1">24/7</div>
                      <div className="text-xs text-muted-foreground">Access</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right: Content */}
          <div className="animate-slide-in-right">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4 border border-primary/20">
              <span className="text-xs font-bold text-primary">🏆 Professional-Grade Analysis</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
              The Complete{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-glow to-accent">
                Golf Intelligence
              </span>
              {" "}Platform
            </h2>

            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
              Birdie AI combines cutting-edge artificial intelligence with professional golf expertise to deliver comprehensive insights. Our platform analyzes your swing, equipment, practice habits, and course strategy to help you play your best golf.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 border border-primary/10 hover:border-primary/20 transition-all duration-300">
                <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground mb-1 text-sm flex items-center gap-2">
                    <span>🧠 AI-Powered Intelligence</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Machine learning trained on thousands of golf profiles for accurate recommendations</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-accent/5 rounded-lg hover:bg-accent/10 border border-accent/10 hover:border-accent/20 transition-all duration-300">
                <div className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground mb-1 text-sm flex items-center gap-2">
                    <span>🎯 100% Personalized</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Every insight calibrated to your unique swing, body type, and skill level</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 border border-primary/10 hover:border-primary/20 transition-all duration-300">
                <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground mb-1 text-sm flex items-center gap-2">
                    <span>📈 Track Your Progress</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Watch your game improve with data-driven insights and performance tracking</div>
                </div>
              </div>
            </div>

            <Button
              size="default"
              variant="default"
              className="group bg-primary hover:bg-primary-glow text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Start Your Analysis
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
