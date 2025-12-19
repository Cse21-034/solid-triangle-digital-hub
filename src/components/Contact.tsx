import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  "IT & Cyber Security Training",
  "Finance & Investment Training",
  "Business Development",
  "Personal Development",
  "HR & Business Coaching",
  "Health & Safety Training",
  "Customer Service Training",
  "Custom Training Program",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      service: selectedService,
      message: formData.get('message'),
    };

    try {
      // Create email body
      const emailBody = `
New Training Quote Request from Solidcare Website

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Company: ${data.company || 'Not provided'}
Service of Interest: ${data.service}

Message:
${data.message}

---
This message was sent from the Solidcare Training Services website contact form.
      `.trim();

      // Create mailto link with all the information
      const mailtoLink = `mailto:info@solidcaretraining.co.bw?subject=${encodeURIComponent('New Training Quote Request - ' + data.service)}&body=${encodeURIComponent(emailBody)}`;
      
      // Also create a FormSubmit.co backup
      const formSubmitResponse = await fetch('https://formsubmit.co/ajax/info@solidcaretraining.co.bw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          phone: data.phone,
          company: data.company,
          service: data.service,
          message: data.message,
          _subject: `New Training Quote Request - ${data.service}`,
          _template: 'table',
          _captcha: 'false'
        })
      }).catch(() => null);

      // Open mailto as backup
      window.location.href = mailtoLink;
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We will get back to you within 24 hours.",
      });
      
      (e.target as HTMLFormElement).reset();
      setSelectedService("");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try calling us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="w-full">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Get in touch with us to discuss your training needs. We're here to help you 
              build capacity and achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-border/50">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-lg">Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Plot 22211 Phase 4<br />
                    Gaborone, Botswana<br />
                    P.O. Box 403012, Gaborone
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-lg">Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    <a href="tel:+26776764118" className="hover:text-primary">+267 767 64118</a><br />
                    <a href="tel:+26773400400" className="hover:text-primary">+267 734 00400</a>
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    <a href="mailto:info@solidcaretraining.co.bw" className="hover:text-primary">
                      info@solidcaretraining.co.bw
                    </a>
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-lg">Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday - Sunday: Closed
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" name="firstName" required placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" name="lastName" required placeholder="Doe" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" name="email" type="email" required placeholder="john@company.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="+267 7X XXX XXXX" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input id="company" name="company" placeholder="Your company name" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service of Interest *</Label>
                      <Select 
                        name="service" 
                        required 
                        value={selectedService}
                        onValueChange={setSelectedService}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        required 
                        rows={5}
                        placeholder="Tell us about your training needs..."
                      />
                    </div>

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
