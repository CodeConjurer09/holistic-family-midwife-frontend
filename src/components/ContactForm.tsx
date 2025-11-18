import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2 } from "lucide-react";
import { api } from "@/services/api";
import { toast } from "sonner";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dueDate: "",
    reason: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await api.submitContactEnquiry(formData);
      
      toast.success(response.message || 'Your message has been sent successfully! We will respond within 24 hours.', {
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        dueDate: "",
        reason: "",
        message: "",
      });

    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-lg border-none">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Full Name <span className="text-destructive">*</span>
            </label>
            <Input 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Kimani" 
              required 
              disabled={isSubmitting}
              className="h-12"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email <span className="text-destructive">*</span>
              </label>
              <Input 
                id="email" 
                name="email"
                type="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@example.com" 
                required 
                disabled={isSubmitting}
                className="h-12"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                Phone Number <span className="text-destructive">*</span>
              </label>
              <Input 
                id="phone" 
                name="phone"
                type="tel" 
                value={formData.phone}
                onChange={handleChange}
                placeholder="+254700000000" 
                required 
                disabled={isSubmitting}
                className="h-12"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="dueDate" className="block text-sm font-semibold mb-2">
              Expected Due Date (if applicable)
            </label>
            <Input 
              id="dueDate" 
              name="dueDate"
              type="date" 
              value={formData.dueDate}
              onChange={handleChange}
              disabled={isSubmitting}
              className="h-12"
            />
          </div>
          
          <div>
            <label htmlFor="reason" className="block text-sm font-semibold mb-2">
              Reason for Contact <span className="text-destructive">*</span>
            </label>
            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
              required
              disabled={isSubmitting}
            >
              <option value="">Select an option</option>
              <option value="new-patient">New Patient Consultation</option>
              <option value="prenatal">Prenatal Care Question</option>
              <option value="postpartum">Postpartum Support</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Message <span className="text-destructive">*</span>
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us how we can help you..."
              rows={5}
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
          
          <p className="text-xs text-foreground text-center">
            We'll respond within 24 hours during business days
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;