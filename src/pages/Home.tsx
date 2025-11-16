import ServicesSection from "@/components/Services";
import TestimonialsSection from "@/components/Testimonials";
import EnquiryForm from "@/components/GeneralEnquiryForm";
import CTASection from "@/components/CallToAction";
import heroImage from "@/assets/hero-image.jpg";
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

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Safe & Evidence-Based",
      description: "Our practices are grounded in the latest research and clinical guidelines for optimal outcomes."
    },
    {
      icon: Heart,
      title: "Holistic Approach",
      description: "We care for your physical, emotional, and mental wellbeing throughout your journey."
    },
    {
      icon: Users,
      title: "Family-Centered",
      description: "Your partner and family are welcomed and encouraged to participate in your care."
    },
    {
      icon: CheckCircle,
      title: "Continuity of Care",
      description: "Build a relationship with your midwife from pregnancy through postpartum."
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            Empowering Motherhood, <span className="text-primary">Nurturing Families</span>
          </h1>

          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            Experience personalized, evidence-based midwifery care for pregnancy, birth and beyond.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
              <Link to="/booking">Book Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-black border-white/40 hover:bg-white/10">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-white/80 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-white">Certified Midwives</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              <span className="text-white">Personalized Care</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-white">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Why Families Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our approach combines clinical excellence with compassionate, individualized care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

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