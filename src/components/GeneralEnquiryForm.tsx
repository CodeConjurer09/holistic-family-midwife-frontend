import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Phone, Loader2 } from "lucide-react";
import { api } from "@/services/api";
import { toast } from "sonner";

const EnquiryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await api.submitGeneralEnquiry(formData);
      
      toast.success(response.message || 'Your message has been sent successfully! We will get back to you soon.', {
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-foreground">
            Have questions or ready to schedule? We'd love to hear from you.
          </p>
        </div>

        <Card className="shadow-medium border-none">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name..." 
                    required
                    disabled={isSubmitting}
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="phone"
                    name="phone"
                    type="tel" 
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="07..." 
                    required
                    disabled={isSubmitting}
                    className="h-12"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <Input 
                  id="email"
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email..." 
                  required
                  disabled={isSubmitting}
                  className="h-12"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your needs..." 
                  rows={4} 
                  required
                  disabled={isSubmitting}
                  className="resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-foreground">
                We'll respond within 24 hours during business days
              </p>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-foreground mb-2">Prefer to call?</p>
          <Button variant="outline" size="lg" asChild>
            <a href="tel:0797735027" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              (+254) 797 735 027
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;