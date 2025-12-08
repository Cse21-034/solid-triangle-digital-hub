import { Building2, Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Your Trusted ICT Partner
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Established in 2011, Solid Triangle Pty Ltd has built a reputation for excellence 
            in delivering cutting-edge technology solutions.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-semibold text-foreground">
              Driving Innovation in Botswana's ICT Landscape
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              In an increasingly interconnected world, businesses rely heavily on robust ICT 
              infrastructure to operate efficiently and securely. At Solid Triangle Pty Ltd, 
              we understand the critical role that technology plays in modern enterprises.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a commitment to excellence and a focus on innovation, we provide tailored 
              ICT solutions to meet the diverse needs of our clients. Driven by a passion for 
              technology and a dedication to customer satisfaction, we take pride in our ability 
              to deliver cutting-edge solutions that empower businesses to thrive in today's 
              digital landscape.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We specialize in Network Infrastructure Design, Installation and Support, including 
              Voice and Data Systems, Fiber Optic Networks, Network Equipment Installation, 
              Distributed Antenna Systems (DAS), and Wireless Systems in Commercial facilities. 
              We deliver quality solutions on time and on budget.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Client-Centric Approach</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">Quality Assurance</span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border card-hover">
              <Building2 className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-3xl font-display font-bold text-foreground mb-2">2011</h4>
              <p className="text-muted-foreground text-sm">Year Established</p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary text-secondary-foreground card-hover">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-3xl font-display font-bold mb-2">100+</h4>
              <p className="text-secondary-foreground/70 text-sm">Happy Clients</p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary text-secondary-foreground card-hover">
              <Target className="w-12 h-12 text-accent mb-4" />
              <h4 className="text-3xl font-display font-bold mb-2">500+</h4>
              <p className="text-secondary-foreground/70 text-sm">Projects Delivered</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border card-hover">
              <Award className="w-12 h-12 text-accent mb-4" />
              <h4 className="text-3xl font-display font-bold text-foreground mb-2">24/7</h4>
              <p className="text-muted-foreground text-sm">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
