import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Thabo Mogale',
    role: 'IT Director',
    company: 'Botswana Telecom',
    content: 'Solid Triangle delivered exceptional network infrastructure for our new headquarters. Their attention to detail and commitment to quality is unmatched. The project was completed on time and exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Keabetswe Moeti',
    role: 'Operations Manager',
    company: 'First National Bank Botswana',
    content: 'The cybersecurity assessment and implementation by Solid Triangle has significantly improved our security posture. Their team is highly professional and responsive to our needs.',
    rating: 5,
  },
  {
    name: 'Lesego Kgosi',
    role: 'CEO',
    company: 'Gaborone Water Utilities',
    content: 'The smart metering solution implemented by Solid Triangle has transformed our operations. We now have real-time insights into consumption patterns and have significantly reduced water losses.',
    rating: 5,
  },
  {
    name: 'Mpho Setlhabi',
    role: 'Technical Manager',
    company: 'Orange Botswana',
    content: 'Working with Solid Triangle on our tower infrastructure project was seamless. Their expertise in telecommunications is evident in every aspect of their work.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 section-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 triangle-pattern opacity-50" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hear from the businesses we've helped transform with our technology solutions.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-secondary/50 rounded-3xl p-8 md:p-12 border border-border/20">
            <Quote className="absolute top-8 left-8 w-16 h-16 text-primary/10" />
            
            <div className="relative">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-lg md:text-xl text-secondary-foreground leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-display font-semibold text-secondary-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
