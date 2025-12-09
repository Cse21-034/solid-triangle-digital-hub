import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import networkImg from '@/assets/network.jpg';
import cybersecurityImg from '@/assets/cybersecurity.jpg';
import smartMeterImg from '@/assets/smart-meter.jpg';
import towerImg from '@/assets/tower.jpg';
import cloudImg from '@/assets/cloud-data.jpg';
import fiberImg from '@/assets/fiber-optic.jpg';
import wirelessImg from '@/assets/wireless.jpg';
import heroBg from '@/assets/hero-bg.jpg';

const galleryImages = [
  { src: heroBg, alt: 'Data Center Infrastructure', category: 'Infrastructure' },
  { src: networkImg, alt: 'Network Server Room', category: 'Networking' },
  { src: towerImg, alt: 'Telecommunications Tower', category: 'Towers' },
  { src: cybersecurityImg, alt: 'Cybersecurity Solutions', category: 'Security' },
  { src: smartMeterImg, alt: 'Smart Meter Installation', category: 'Smart Metering' },
  { src: fiberImg, alt: 'Fiber Optic Cabling', category: 'Cabling' },
  { src: cloudImg, alt: 'Cloud Data Center', category: 'Cloud' },
  { src: wirelessImg, alt: 'Wireless Network Equipment', category: 'Wireless' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 triangle-pattern opacity-5" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 tracking-wider uppercase">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-8">
            Project Gallery
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-xl leading-relaxed">
            Explore our portfolio of successful ICT implementations across various sectors.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer border border-gray-200 hover:border-primary/30 transition-all duration-500 ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                <ZoomIn className="w-5 h-5 text-primary" />
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-semibold mb-3 backdrop-blur-sm">
                  {image.category}
                </span>
                <h4 className="text-white font-semibold text-base">
                  {image.alt}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="fixed top-6 right-6 w-14 h-14 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Image Container */}
            <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto"
                />
              </div>
              
              {/* Image Info */}
              <div className="mt-6 text-center">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-semibold mb-3 backdrop-blur-sm">
                  {selectedImage.category}
                </span>
                <h4 className="text-white font-display text-2xl font-bold">
                  {selectedImage.alt}
                </h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
