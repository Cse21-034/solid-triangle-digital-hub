import { 
  Network, 
  Shield, 
  Gauge, 
  Radio, 
  Cloud, 
  Cable, 
  Wifi, 
  Battery 
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
    <section id="services" className="py-24 section-dark">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-foreground mb-6">
            Comprehensive ICT Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From network infrastructure to cybersecurity, we deliver end-to-end technology 
            solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-secondary/50 rounded-2xl overflow-hidden border border-border/20 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6 -mt-16">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-secondary-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 rounded-md bg-primary/5 text-primary text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">Request a Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
