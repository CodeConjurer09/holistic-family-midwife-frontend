import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-light-sage">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              We'd love to hear from you. Reach out with questions or to schedule your consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold mb-6">
                Send Us a Message
              </h2>
              
              <Card className="shadow-medium">
                <CardContent className="pt-6">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <Input id="name" placeholder="Jane Kimani" required />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email <span className="text-destructive">*</span>
                        </label>
                        <Input id="email" type="email" placeholder="jane@example.com" required />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number <span className="text-destructive">*</span>
                        </label>
                        <Input id="phone" type="tel" placeholder="+254700000000" required />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="due-date" className="block text-sm font-medium mb-2">
                        Expected Due Date (if applicable)
                      </label>
                      <Input id="due-date" type="date" />
                    </div>
                    
                    <div>
                      <label htmlFor="reason" className="block text-sm font-medium mb-2">
                        Reason for Contact <span className="text-destructive">*</span>
                      </label>
                      <select
                        id="reason"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        required
                      >
                        <option value="">Select an option</option>
                        <option value="new-patient">New Patient Consultation</option>
                        <option value="prenatal">Prenatal Care Question</option>
                        <option value="postpartum">Postpartum Support</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message <span className="text-destructive">*</span>
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      We'll respond within 24 hours during business days
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <Card className="shadow-soft">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Phone</h3>
                          <a
                            href="tel:0797735027"
                            className="text-muted-foreground hover:text-primary transition-smooth"
                          >
                            0797735027
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">
                            24/7 emergency line available
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-soft">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Email</h3>
                          <a
                            href="mailto:care@midwiferycare.com"
                            className="text-muted-foreground hover:text-primary transition-smooth"
                          >
                            care@midwiferycare.com
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">
                            We respond within 24 hours
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-soft">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Office Location</h3>
                          <p className="text-muted-foreground">
                            Nairobi<br />
                            Kenya<br />
                            ***
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-soft">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Office Hours</h3>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                            <p>Saturday: By Appointment Only</p>
                            <p>Sunday: Closed</p>
                            <p className="text-primary font-medium pt-2">
                              24/7 Emergency Support Available
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Emergency Notice */}
              <Card className="shadow-soft bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-primary mb-2">
                    Emergency Situations
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    If you're experiencing a medical emergency, please call 911 immediately. 
                    For urgent but non-emergency concerns after hours, call our 24/7 emergency line.
                  </p>
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
