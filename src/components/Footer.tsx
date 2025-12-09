import { Triangle, Phone, Mail, MapPin, Linkedin, Twitter, Facebook, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 triangle-pattern opacity-5" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <Triangle className="relative w-12 h-12 text-primary fill-primary/20 group-hover:fill-primary/40 transition-all" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold text-white">
                  Solid Triangle
                </span>
                <span className="text-xs text-gray-400">Pty Ltd</span>
              </div>
            </a>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Leading provider of comprehensive ICT solutions in Botswana. 
              Building digital infrastructure for tomorrow's businesses.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 flex items-center justify-center text-white hover:text-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 flex items-center justify-center text-white hover:text-primary transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 flex items-center justify-center text-white hover:text-primary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                About Us
              </a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                Our Services
              </a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                Project Gallery
              </a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                Testimonials
              </a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                Contact Us
              </a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-display font-semibold mb-6 text-lg">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                Network Infrastructure
              </a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                Cybersecurity
              </a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                Smart Metering
              </a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                Telecommunications
              </a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                Cloud Solutions
              </a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-semibold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-gray-400 text-sm block">(+267) 73 400 400</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a href="mailto:lamegare@yahoo.com" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  lamegare@yahoo.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-400 text-sm">
                  Phase 4 Plot 22211<br />
                  Gaborone, Botswana
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Solid Triangle Pty Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/20 flex items-center justify-center transition-all hover:scale-110 z-50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
