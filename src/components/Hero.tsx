import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Network, Zap } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div className="absolute inset-0 triangle-pattern" />
      </div>

      {/* Animated Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/20 rotate-45 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-accent/20 rotate-12 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-primary/5 rotate-45 animate-pulse-slow" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-primary font-medium">Trusted ICT Solutions Since 2011</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-secondary-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Building the{' '}
            <span className="text-gradient">Digital Infrastructure</span>
            {' '}of Tomorrow
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Comprehensive ICT solutions including network infrastructure, cybersecurity, 
            smart metering, and telecommunications for businesses across Botswana and beyond.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#services">
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-primary mb-2" />
              <span className="text-2xl md:text-3xl font-display font-bold text-secondary-foreground">13+</span>
              <span className="text-xs md:text-sm text-muted-foreground">Years Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <Network className="w-8 h-8 text-accent mb-2" />
              <span className="text-2xl md:text-3xl font-display font-bold text-secondary-foreground">500+</span>
              <span className="text-xs md:text-sm text-muted-foreground">Projects Completed</span>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="w-8 h-8 text-primary mb-2" />
              <span className="text-2xl md:text-3xl font-display font-bold text-secondary-foreground">99%</span>
              <span className="text-xs md:text-sm text-muted-foreground">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
