import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Phone } from "lucide-react";

const EnquiryForm = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">

        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground">
            Have questions or ready to schedule? We'd love to hear from you.
          </p>
        </div>

        <Card className="shadow-medium">
          <CardContent className="pt-6">
            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input placeholder="Jane Kimani" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="0700000000" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input type="email" placeholder="jane@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea placeholder="Tell us about your needs..." rows={4} />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-2">Prefer to call?</p>
          <Button variant="outline" size="lg" asChild>
            <a href="tel:0797735027" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              (+254)797735027
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
