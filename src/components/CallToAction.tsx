import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Phone, ArrowRight, MessageCircle, Clock } from "lucide-react";

const CTASection = () => {
  const callToActions = [
    {
      tag: "Ready to Begin?",
      title: "Let's Plan Your Journey Together",
      question: "Need someone to listen and guide you?",
      description: "Schedule a personalized consultation where we'll discuss your unique needs, answer your questions, and create a care plan that feels right for you.",
      icon: Calendar,
      link: "/contact",
      buttonText: "Book Your Consultation",
      highlights: ["Free 15-min intro call", "Flexible scheduling", "No pressure, just support"]
    },
    {
      tag: "We're Always Here",
      title: "Support When You Need It",
      question: "Have an urgent question or concern?",
      description: "Day or night, our dedicated team is available to provide the guidance and reassurance you need during your maternal health journey.",
      icon: Phone,
      link: "/contact",
      buttonText: "Get in Touch",
      highlights: ["Round-the-clock availability", "Immediate response", "Expert advice anytime"]
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-light-sage via-primary/5 to-light-sage">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-2 bg-white rounded-full mb-4 shadow-sm">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Take the Next Step</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            How Can We Support You Today?
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you're just starting to explore your options or need immediate support, we're here to help.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {callToActions.map((cta, index) => {
            const Icon = cta.icon;
            return (
              <Card 
                key={index} 
                className="relative border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden group hover:-translate-y-1"
              >
                {/* Decorative Background Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                
                <CardContent className="p-8 relative z-10">
                  {/* Tag */}
                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mb-4">
                    <span className="text-primary text-xs font-semibold uppercase tracking-wide">{cta.tag}</span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl font-bold mb-2">{cta.title}</h3>
                    </div>
                  </div>

                  {/* Question */}
                  <div className="mb-4 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-lg border-l-4 border-primary">
                    <p className="text-primary font-semibold flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      {cta.question}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {cta.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6 space-y-2">
                    {cta.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <Button asChild size="lg" className="w-full group/btn bg-primary hover:bg-primary/90">
                    <Link to={cta.link} className="flex items-center justify-center gap-2">
                      {cta.buttonText}
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></div>
              </Card>
            );
          })}
        </div>

        {/* Additional Support Options */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center">
                <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold mb-2">
                  Not Sure Where to Start?
                </h3>
                <p className="text-muted-foreground mb-6">
                  No worries! We offer a complimentary 15-minute introductory call to help you understand your options and find the right path forward.
                </p>
                <Button asChild variant="outline" size="lg" className="group">
                  <Link to="/contact" className="flex items-center gap-2">
                    Request a Free Call
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTASection;