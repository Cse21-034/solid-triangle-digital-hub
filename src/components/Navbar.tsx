import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Triangle } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <Triangle className={`relative w-10 h-10 ${isScrolled ? 'text-primary' : 'text-white'} fill-primary/20 group-hover:fill-primary/40 transition-all duration-300 group-hover:rotate-180`} />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-display font-bold ${isScrolled ? 'text-primary' : 'text-white'} transition-colors`}>
                Solid Triangle
              </span>
              <span className={`text-xs ${isScrolled ? 'text-muted-foreground' : 'text-white/70'} transition-colors`}>
                Pty Ltd
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-xl ${
                  isScrolled
                    ? 'text-foreground hover:text-primary hover:bg-primary/5'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                } transition-all duration-300 text-sm font-medium`}
              >
                {link.label}
              </a>
            ))}
            <Button 
              variant={isScrolled ? "hero" : "heroOutline"} 
              size="lg" 
              asChild 
              className="ml-4"
            >
              <a href="#contact">Get Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-xl ${
              isScrolled 
                ? 'text-foreground hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            } transition-colors`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-gray-200 shadow-2xl animate-fade-in-up">
            <div className="flex flex-col p-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 text-lg font-medium py-3 px-4 rounded-xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" size="lg" className="mt-4 w-full" asChild>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Quote
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
