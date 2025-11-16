import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  text: string;
  role: string;
  image?: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Muthoni.",
      role: "First-Time Mother",
      text: "The care I received was exceptional. My midwife made me feel safe, heard, and supported throughout my entire pregnancy and birth experience. I couldn't have asked for better guidance during this life-changing journey.",
    },
    {
      name: "Mary Njeri.",
      role: "Mother of Two",
      text: "I couldn't have asked for a better birth experience. The personalized attention and expertise gave me confidence every step of the way. The team's dedication to my wellbeing made all the difference.",
    },
    {
      name: "Catheline Katheu.",
      role: "New Mother",
      text: "From my first appointment to postpartum care, the level of compassion and professionalism was outstanding. They truly care about their patients and it shows in everything they do. Highly recommend!",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-light-sage/50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Testimonials</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            What Families Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Read stories from the families we've had the privilege to support
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative shadow-lg hover:shadow-2xl transition-all duration-500 border-none bg-white overflow-hidden group hover:-translate-y-2"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-16 h-16 text-primary" />
              </div>

              <CardContent className="pt-8 pb-8 px-6 relative z-10">
                {/* Star Rating */}
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-amber-400 text-amber-400 transition-transform duration-300 hover:scale-125" 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <div className="mb-6">
                  <p className="text-muted-foreground leading-relaxed italic text-center">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Divider */}
                <div className="w-16 h-1 bg-gradient-to-r from-primary/50 to-primary mx-auto mb-6 rounded-full"></div>

                {/* Author Info */}
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-primary font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <p className="font-bold text-lg mb-1">{testimonial.name}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                </div>
              </CardContent>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-primary/60 border-2 border-white flex items-center justify-center"
                >
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
              ))}
            </div>
            <div className="pl-2">
              <p className="text-sm font-semibold">5,000+ Happy Families</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;