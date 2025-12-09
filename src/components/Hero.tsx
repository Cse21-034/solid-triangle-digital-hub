import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Network, Zap, ChevronDown } from 'lucide-react';
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
        <div className="absolute inset-0 triangle-pattern opacity-30" />
      </div>

      {/* Animated Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 border border-primary/10 rotate-45 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 border border-primary/10 rotate-12 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-primary/5 rotate-45 animate-pulse-slow blur-xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">


          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white mb-8 text-center leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Building the{' '}
            <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Digital Infrastructure
            </span>
            <span className="block mt-2">of Tomorrow</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 text-center leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Comprehensive ICT solutions including network infrastructure, cybersecurity, 
            smart metering, and telecommunications for businesses across Botswana and beyond.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="xl" asChild className="group">
              <a href="#services" className="px-10 py-6 text-lg">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild className="px-10 py-6 text-lg backdrop-blur-sm">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <span className="text-4xl md:text-5xl font-display font-bold text-white mb-2">13+</span>
              <span className="text-sm md:text-base text-gray-400 text-center">Years Excellence</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
                <Network className="w-8 h-8 text-primary" />
              </div>
              <span className="text-4xl md:text-5xl font-display font-bold text-white mb-2">500+</span>
              <span className="text-sm md:text-base text-gray-400 text-center">Projects Delivered</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <span className="text-4xl md:text-5xl font-display font-bold text-white mb-2">99%</span>
              <span className="text-sm md:text-base text-gray-400 text-center">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
