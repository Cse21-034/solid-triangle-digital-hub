import { 
  Network, 
  Shield, 
  Gauge, 
  Radio, 
  Cloud, 
  Cable, 
  Wifi, 
  Battery,
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import networkImg from '@/assets/network.jpg';
import cybersecurityImg from '@/assets/cybersecurity.jpg';
import smartMeterImg from '@/assets/smart-meter.jpg';
import towerImg from '@/assets/tower.jpg';
import cloudImg from '@/assets/cloud-data.jpg';
import fiberImg from '@/assets/fiber-optic.jpg';
import wirelessImg from '@/assets/wireless.jpg';

const services = [
  {
    icon: Gauge,
    title: 'Smart Metering Solutions',
    description: 'Assembly and installation of water and electricity smart meters with AMR/AMI integration for utilities and municipalities.',
    image: smartMeterImg,
    features: ['Water & Electricity Meters', 'AMR/AMI Integration', 'Quality Assurance'],
  },
  {
    icon: Radio,
    title: 'Towers & Telecommunications',
    description: 'End-to-end telecommunication infrastructure including 4G/5G networks, tower design, installation, and maintenance.',
    image: towerImg,
    features: ['Tower Design & Engineering', '4G/5G Networks', 'Signal Boosting'],
  },
  {
    icon: Network,
    title: 'Network Infrastructure',
    description: 'Comprehensive network design, installation, and support including voice and data systems, fiber optic networks, and DAS.',
    image: networkImg,
    features: ['Fiber Optics', 'Voice & Data Systems', 'DAS Solutions'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity Services',
    description: 'Complete cybersecurity solutions from vulnerability assessments to incident response and security awareness training.',
    image: cybersecurityImg,
    features: ['Penetration Testing', 'Incident Response', 'Security Training'],
  },
  {
    icon: Cloud,
    title: 'Cloud & Data Center',
    description: 'State-of-the-art data center solutions with IaaS, PaaS, and SaaS options for scalable business growth.',
    image: cloudImg,
    features: ['Cloud Storage', 'Server Maintenance', 'Domain Services'],
  },
  {
    icon: Wifi,
    title: 'Wireless Networks',
    description: 'Robust wireless solutions including WiFi, cellular networks, RFID, and Zigbee for smart applications.',
    image: wirelessImg,
    features: ['WiFi Solutions', 'Cellular Networks', 'IoT Integration'],
  },
  {
    icon: Cable,
    title: 'Cabling & Fiber Solutions',
    description: 'Structured cabling and fiber optic connectivity optimized for office environments with full installation and maintenance.',
    image: fiberImg,
    features: ['Structured Cabling', 'Fiber Optics', 'WAP Integration'],
  },
  {
    icon: Battery,
    title: 'Battery Solutions',
    description: 'High-performance battery technologies for tower operations including lithium-ion and lead-acid solutions.',
    image: towerImg,
    features: ['Lithium-Ion', 'Energy Efficiency', 'Eco-Friendly Options'],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 triangle-pattern opacity-5" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 tracking-wider uppercase">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-8">
            Comprehensive ICT Solutions
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-xl leading-relaxed">
            From network infrastructure to cybersecurity, we deliver end-to-end technology 
            solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-primary/30 hover:shadow-2xl transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-medium hover:bg-primary/10 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* Learn More Link */}
                <button className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12 border border-primary/20">
          <h3 className="text-3xl font-display font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our ICT solutions can help you achieve your goals.
          </p>
          <Button variant="hero" size="lg" asChild className="group">
            <a href="#contact" className="px-8">
              Request a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
