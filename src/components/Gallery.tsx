import { useState } from 'react';
import { X } from 'lucide-react';
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
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Project Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our portfolio of successful ICT implementations across various sectors.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-xl cursor-pointer ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-1 rounded-md bg-primary/20 text-primary text-xs font-medium mb-2">
                  {image.category}
                </span>
                <h4 className="text-secondary-foreground font-medium text-sm">
                  {image.alt}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-secondary/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="mt-4 text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-2">
                  {selectedImage.category}
                </span>
                <h4 className="text-secondary-foreground font-display text-xl font-semibold">
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
