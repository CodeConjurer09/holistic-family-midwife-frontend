import ServicesSection from "@/components/Services";
import TestimonialsSection from "@/components/Testimonials";
import EnquiryForm from "@/components/GeneralEnquiryForm";
import CTASection from "@/components/CallToAction";
import HeroCarousel from "@/components/HeroCarousel";
import WhyChooseUsSection from "@/components/WhyChooseUs";
import BlogComponent from "@/components/BlogPost";
import heroImage from "/assets/hero-image.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Clock, Users, CheckCircle, TrendingUp, Shield, Baby, ArrowRight, Phone, Calendar } from "lucide-react";

const Home = () => {
  const stats = [
    { number: "50+", label: "Certified Members", icon: Users },
    { number: "15+", label: "Years Leading", icon: Award },
    { number: "500+", label: "Mothers Supported", icon: Heart },
    { number: "99.8%", label: "Excellence Rate", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Impact Story Section */}
      <section className="py-20 bg-gradient-to-b from-white to-light-sage">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">Our Impact Story</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Transforming Maternal Care
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over 3 years, we've been dedicated to revolutionizing the childbirth experience. 
              Our commitment to personalized, compassionate care has helped thousands of families 
              welcome their babies in a safe, supportive environment. We believe every mother deserves 
              expert guidance, unwavering support, and the confidence to make informed decisions about 
              their birth journey.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center align-center gap-4">
            <Button asChild size="lg" className="bg-primary text-white">
              <Link to="/about">
                Learn Our Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <ServicesSection />
      <BlogComponent />
      {/* Why Choose Us Section */}
      < WhyChooseUsSection />
      {/* Birth Philosophy Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                  Our Birth Philosophy
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We believe birth is a natural, empowering experience. Our role is to provide expert 
                  guidance while honoring your choices and preferences. Whether you envision a home birth, 
                  birth center delivery, or hospital birth with midwifery care, we're here to support your vision.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Informed Decision Making</h4>
                      <p className="text-sm text-muted-foreground">
                        We provide evidence-based information so you can make confident choices.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Minimal Intervention</h4>
                      <p className="text-sm text-muted-foreground">
                        We support natural birth while being prepared for any situation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Continuous Support</h4>
                      <p className="text-sm text-muted-foreground">
                        We stay with you throughout labor, providing comfort and guidance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={heroImage} 
                    alt="Birth Philosophy" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl max-w-[200px]">
                  <Baby className="h-8 w-8 mb-2" />
                  <p className="text-sm font-semibold">Supporting natural birth for over 3 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialsSection /> 
      <CTASection />
      <EnquiryForm />
    </div>
  );
};

export default Home;