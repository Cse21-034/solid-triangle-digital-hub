import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";
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
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const data = {
      ...formData,
      service: selectedService,
    };

    try {
      // Create email body for mailto fallback
      const emailBody = `
New Contact Request from Solid Triangle Website

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Company: ${data.company || 'Not provided'}
Service: ${data.service}

Message:
${data.message}

---
This message was sent from the Solid Triangle contact form.
      `.trim();

      // Create mailto link
      const mailtoLink = `mailto:technical@solidcareservices.com?subject=${encodeURIComponent('New Lead - ' + data.service)}&body=${encodeURIComponent(emailBody)}`;
      
      // Direct Fetch Logic (FormSubmit AJAX)
      const formSubmitResponse = await fetch('https://formsubmit.co/ajax/technical@solidcareservices.com', {
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
          _subject: `New Lead Request - ${data.service}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const result = await formSubmitResponse.json();

      if (formSubmitResponse.ok && result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. We will get back to you soon!",
        });
        
        // Reset form
        setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', message: '' });
        setSelectedService("");
        (e.target as HTMLFormElement).reset();
      } else {
        // Fallback to mailto only if the direct fetch fails
        window.location.href = mailtoLink;
      }

    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please check your connection or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Get in touch with us to discuss your needs. We're here to help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            <Card className="border-border/50">
              <CardHeader className="pb-2">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Address</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Plot 22211 Phase 4, Gaborone, Botswana</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader className="pb-2">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">+267 77524366</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader className="pb-2">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary text-sm font-medium">technical@solidcareservices.com</p>
              </CardContent>
            </Card>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-display">Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+267 7X XXX XXXX" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your company name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service of Interest *</Label>
                    <Select name="service" required value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((option) => (
                          <SelectItem key={option} value={option}>{option}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell us about your needs..." />
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full group">
                    {isSubmitting ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
                    ) : (
                      <>Send Message <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
