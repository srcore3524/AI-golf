import { UserCircle, Activity, Target, LineChart } from "lucide-react";

const steps = [
  {
    icon: UserCircle,
    step: "01",
    title: "Build Your Profile",
    description: "Complete our comprehensive questionnaire covering physical measurements, swing characteristics, equipment details, and performance history."
  },
  {
    icon: Activity,
    step: "02",
    title: "AI Processing",
    description: "Our advanced algorithms analyze thousands of data points, comparing your profile against elite performance patterns and biomechanical models."
  },
  {
    icon: Target,
    step: "03",
    title: "Receive Insights",
    description: "Get personalized equipment specifications, swing optimization techniques, practice routines, and strategic recommendations."
  },
  {
    icon: LineChart,
    step: "04",
    title: "Track Evolution",
    description: "Monitor your progress with detailed analytics, performance metrics, and continuously refined recommendations as your game develops."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-32 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">The Process</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            From Profile to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              Performance
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            A streamlined journey to unlock your golf potential
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index} 
                  className="relative animate-fade-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 left-full w-full h-1 -translate-x-6 z-0">
                      <div className="w-full h-full bg-gradient-to-r from-accent via-primary to-accent/50 animate-pulse" 
                        style={{ animationDelay: `${index * 0.3}s` }}
                      />
                    </div>
                  )}
                  
                  <div className="relative text-center group">
                    {/* Icon Container */}
                    <div className="relative mx-auto mb-8">
                      <div className="w-36 h-36 bg-gradient-to-br from-primary via-primary-glow to-accent rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-all duration-500 group-hover:rotate-6">
                        <Icon className="w-16 h-16 text-primary-foreground" />
                      </div>
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                    </div>
                    
                    {/* Step Number Badge */}
                    <div className="absolute top-0 right-0 lg:right-auto lg:left-0 bg-gradient-to-br from-accent to-accent/80 text-accent-foreground text-lg font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
                      {step.step}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
