import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-light-sage to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                Contact Us
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-foreground">
              We'd love to hear from you. Reach out with questions or to
              schedule your consultation.
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
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-none">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">Phone</h3>
                          <a
                            href="tel:0797735027"
                            className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                          >
                            (+254) 797 735 027
                          </a>
                          <p className="text-sm text-foreground mt-1">
                            24/7 emergency line available
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Email */}
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-none">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">Email</h3>
                          <a
                            href="mailto:info@holisticfamilymidwife.com"
                            className="text-foreground hover:text-primary transition-colors duration-300 font-medium break-all"
                          >
                            info@holisticfamilymidwife.com
                          </a>
                          <p className="text-sm text-foreground mt-1">
                            We respond within 24 hours
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Location */}
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-none">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">Office Location</h3>
                          <p className="text-foreground font-medium">
                            Nairobi, Kenya <br />
                            <span className="text-sm">
                              Home-based services available
                            </span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Hours */}
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-none">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-2">Office Hours</h3>
                          <div className="space-y-1 text-sm text-foreground font-medium">
                            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                            <p>Saturday: By Appointment Only</p>
                            <p>Sunday: Closed</p>
                            <p className="text-primary font-bold pt-2 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
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
              <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-primary mb-2 text-lg">
                    Emergency Situations
                  </h3>
                  <p className="text-sm text-foreground leading-relaxed">
                    If you're experiencing a medical emergency, please call
                    emergency services immediately. For urgent but
                    non-emergency concerns after hours, call our 24/7 emergency
                    line at (+254) 797 735 027.
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
