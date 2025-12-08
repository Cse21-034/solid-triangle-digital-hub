import { Triangle, Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-6">
              <Triangle className="w-10 h-10 text-primary fill-primary/20" />
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-primary">
                  Solid Triangle
                </span>
                <span className="text-xs text-muted-foreground">Pty Ltd</span>
              </div>
            </a>
            <p className="text-muted-foreground text-sm mb-6">
              Leading provider of comprehensive ICT solutions in Botswana. 
              Building digital infrastructure for tomorrow's businesses.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-secondary-foreground font-display font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Services</a></li>
              <li><a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm">Project Gallery</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors text-sm">Testimonials</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-secondary-foreground font-display font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Network Infrastructure</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Cybersecurity</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Smart Metering</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Telecommunications</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Cloud Solutions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-secondary-foreground font-display font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">(+267) 73 400 400</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a href="mailto:lamegare@yahoo.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  lamegare@yahoo.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Phase 4 Plot 22211<br />
                  Gaborone, Botswana
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Solid Triangle Pty Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
