import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { Heart, Users, Baby, Stethoscope, Calendar, BookOpen, UserCheck } from "lucide-react";

import prenatalImage from "@/assets/prenatal-care.jpg";
import consultationImage from "@/assets/consultation.jpg";
import postpartumImage from "@/assets/postpartum.jpg";
import placeholderImage from "@/assets/rangerover.jpg";

interface Service {
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
}

const ServicesSection = () => {
  const services: Service[] = [
    {
      title: "Antenatal Care & Follow-Up",
      description: "Comprehensive monitoring and personalized support throughout your pregnancy journey",
      image: prenatalImage,
      icon: Heart,
    },
    {
      title: "Consultations",
      description: "Expert guidance and personalized advice for all your maternal health questions",
      image: consultationImage,
      icon: Stethoscope,
    },
    {
      title: "Postpartum Care & Follow-Up",
      description: "Ongoing support for mother and baby during the critical weeks after birth",
      image: postpartumImage,
      icon: Baby,
    },
    {
      title: "Preconception Care",
      description: "Preparing your body and mind for a healthy pregnancy",
      image: placeholderImage,
      icon: Calendar,
    },
    {
      title: "Partner Health Support",
      description: "Shared responsibility in preconception planning for both partners",
      image: placeholderImage,
      icon: Users,
    },
    {
      title: "Labor & Delivery Preparation",
      description: "Comprehensive childbirth education and preparation classes",
      image: placeholderImage,
      icon: UserCheck,
    },
    {
      title: "Teenage Empowerment",
      description: "Reproductive health education and empowerment programs",
      image: placeholderImage,
      icon: BookOpen,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-light-sage/30">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            What We Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive care and support for every stage of your maternal health journey
          </p>
        </div>

        {/* Only first 3 services */}
        <div className="grid md:grid-cols-3 gap-8 justify-center mx-auto">
          {services.slice(0, 3).map((service, index) => {
            const Icon = service.icon;

            return (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-none bg-white">
                
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <Button variant="ghost" asChild className="group">
                    <Link to="/services">
                      Learn More{" "}
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">
                        →
                      </span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
