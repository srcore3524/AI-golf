import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-glow rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-accent-foreground font-bold text-lg">B</span>
              </div>
              <span className="text-2xl font-bold">Birdie AI</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-6">
              Next-generation golf performance platform powered by advanced artificial intelligence and deep golf expertise.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <Mail className="w-4 h-4" />
              <a href="mailto:hello@birdieai.com" className="hover:text-accent transition-colors duration-300">
                hello@birdieai.com
              </a>
            </div>
          </div>

          {/* Platform */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-bold text-lg mb-6">Platform</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <a href="#features" className="hover:text-accent transition-colors duration-300 inline-block hover:translate-x-1 transition-transform">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-accent transition-colors duration-300 inline-block hover:translate-x-1 transition-transform">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-accent transition-colors duration-300 inline-block hover:translate-x-1 transition-transform">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300 inline-block hover:translate-x-1 transition-transform">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300 inline-block hover:translate-x-1 transition-transform">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300 inline-block hover:translate-x-1 transition-transform">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300 inline-block hover:translate-x-1 transition-transform">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300 inline-block hover:translate-x-1 transition-transform">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-bold text-lg mb-6">Legal</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300 inline-block hover:translate-x-1 transition-transform">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300 inline-block hover:translate-x-1 transition-transform">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300 inline-block hover:translate-x-1 transition-transform">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300 inline-block hover:translate-x-1 transition-transform">
                  Data Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-primary-foreground/70">
            © 2025 Birdie AI. All rights reserved. Transforming golf through intelligence.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-primary-foreground/70 hover:text-accent transition-all duration-300 hover:scale-110">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-accent transition-all duration-300 hover:scale-110">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-accent transition-all duration-300 hover:scale-110">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-accent transition-all duration-300 hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
