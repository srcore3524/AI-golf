import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Golf themed */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-base">⛳</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                Birdie AI
              </span>
              <span className="hidden md:inline-block text-[10px] font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded-full">
                Golf
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('features')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              How It Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection('showcase')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              Platform
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hover:text-primary font-medium text-sm" asChild>
              <a href="/login">Sign In</a>
            </Button>
            <Button
              variant="default"
              size="sm"
              className="bg-primary hover:bg-primary-glow text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300"
              asChild
            >
              <a href="/signup">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-left text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors duration-300 py-2"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-left text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors duration-300 py-2"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('showcase')}
                className="text-left text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors duration-300 py-2"
              >
                Platform
              </button>
              <div className="flex flex-col gap-2 pt-3 border-t border-border">
                <Button variant="ghost" size="sm" className="font-medium" asChild>
                  <a href="/login">Sign In</a>
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="bg-primary hover:bg-primary-glow text-white font-semibold"
                  asChild
                >
                  <a href="/signup">Get Started</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
