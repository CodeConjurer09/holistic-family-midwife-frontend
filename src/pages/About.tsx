import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Heart, Users, Target, Globe, Sparkles, BookOpen, Shield, TrendingUp, Home, CheckCircle, ArrowRight } from "lucide-react";
import EnquiryForm from "@/components/GeneralEnquiryForm";
import heroImage from "/assets/hero-image.jpg";
import consultationImage from "/assets/consultations.jpg";
import prenatalImage from "/assets/prenatal-care.jpg";
import postpartumImage from "/assets/postpartum.jpg";
import { Link } from "react-router-dom";

const About = () => {
  const coreValues = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every woman deserves comprehensive, personalized care delivered with empathy and understanding.",
    },
    {
      icon: Users,
      title: "Family-Centered",
      description: "We support the entire family unit, recognizing that maternal health impacts everyone.",
    },
    {
      icon: Shield,
      title: "Holistic Approach",
      description: "Addressing physical, social, psychological, and mental well-being at every stage.",
    },
    {
      icon: Sparkles,
      title: "Empowerment",
      description: "Supporting women to make informed decisions and feel confident in their journey.",
    },
  ];

  const sdgGoals = [
    { number: "3", title: "Good Health and Well-being" },
    { number: "4", title: "Quality Education" },
    { number: "5", title: "Gender Equality" },
    { number: "10", title: "Reduced Inequalities" },
    { number: "1", title: "No Poverty" },
    { number: "11", title: "Sustainable Cities and Communities" },
  ];

  const objectives = [
    {
      icon: Target,
      title: "Holistic Care",
      description: "Providing individualized, effective care that addresses diverse needs during pre-conception, antenatal, and postnatal periods.",
    },
    {
      icon: Home,
      title: "Community-Based",
      description: "Delivering care in the comfort of your home, creating a supportive and familiar environment.",
    },
    {
      icon: TrendingUp,
      title: "Health Promotion",
      description: "Enhancing physical, social, psychological, and mental well-being throughout the maternal journey.",
    },
    {
      icon: Globe,
      title: "SDG Alignment",
      description: "Contributing to sustainable development goals through our commitment to health, education, and equality.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .value-card {
          opacity: 0;
          animation: scaleIn 0.6s ease-out forwards;
        }

        .value-card:nth-child(1) { animation-delay: 0.1s; }
        .value-card:nth-child(2) { animation-delay: 0.2s; }
        .value-card:nth-child(3) { animation-delay: 0.3s; }
        .value-card:nth-child(4) { animation-delay: 0.4s; }

        .gradient-text {
          background: linear-gradient(135deg, #9b87f5 0%, #7E69AB 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Holistic Family Midwife" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20 animate-fadeInUp">
            <span className="text-white font-semibold text-sm uppercase tracking-wide">Est. August 2022</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto animate-fadeInUp" style={{animationDelay: '0.1s'}}>
            Welcome to<br />
            <span className="text-primary">Holistic Family Midwife</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Where every woman deserves comprehensive, compassionate, and personalized care throughout her journey into motherhood
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link to="/services">Explore Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 shadow-lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-b from-white to-light-sage/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">Our Story</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Community-Based Care, Delivered with Heart
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative">
                <img
                  src={consultationImage}
                  alt="Compassionate midwifery care"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl max-w-[200px] animate-float">
                  <BookOpen className="h-8 w-8 mb-2" />
                  <p className="text-sm font-semibold">Serving families since August 2022</p>
                </div>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Founded in August 2022, <strong className="text-foreground">Holistic Family Midwife (HFM)</strong> is a 
                  community-based organization committed to enhancing the well-being of expectant and postpartum women, 
                  as well as their families, in the comfort of their homes.
                </p>
                <p>
                  At HFM, our mission is simple yet profound: to provide holistic, individualized, and effective care 
                  to expectant and postpartum women and their families. We strive to enhance physical, social, 
                  psychological, and mental well-being during the pre-conception, antenatal, and postnatal periods.
                </p>
                <p>
                  We ensure that every woman feels <strong className="text-foreground">supported, empowered, and valued</strong> throughout 
                  her maternal journey, recognizing that birth is not just a medical event, but a transformative 
                  life experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 value-card">
                  <CardContent className="pt-8 pb-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Youth Empowerment Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Yjg3ZjUiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full mb-6 shadow-lg">
                <BookOpen className="h-5 w-5" />
                <span className="font-semibold text-sm uppercase tracking-wide">Youth Program</span>
              </div>
              
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
                Teenage Empowerment &<br />
                <span className="gradient-text">Reproductive Education</span>
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Building a foundation of knowledge, confidence, and healthy choices for young people through comprehensive education
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={consultationImage}
                  alt="Group education session"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold">Group Workshops</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={prenatalImage}
                  alt="One-on-one counseling"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-pink-900/40 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold">Individual Sessions</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={postpartumImage}
                  alt="School programs"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold">School Programs</p>
                </div>
              </div>
            </div>

            {/* Program Highlights */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="shadow-xl border-none bg-white/90 backdrop-blur-sm">
                <CardContent className="pt-8 pb-8 px-6">
                  <h3 className="font-serif text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    What We Offer
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Age-appropriate reproductive health education",
                      "Puberty and body changes discussions",
                      "Healthy relationships and consent education",
                      "Mental health and self-esteem support",
                      "Parent-teen communication facilitation"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-none bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                <CardContent className="pt-8 pb-8 px-6">
                  <h3 className="font-serif text-2xl font-bold mb-6">Our Approach</h3>
                  <p className="text-white/90 leading-relaxed mb-6">
                    We provide a safe, supportive environment where teenagers can learn, ask questions, and develop confidence. Our programs are comprehensive, culturally sensitive, and designed to empower young people to make informed decisions about their health and future.
                  </p>
                  <Button asChild size="lg" variant="outline" className="w-full bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                    <Link to="/services">
                      Learn More About This Program
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Objectives */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Mission & Objectives
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our mission is to offer holistic care that addresses the diverse needs of expectant and 
                postpartum women and their families, focusing on promoting health, well-being, and empowerment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {objectives.map((objective, index) => {
                const Icon = objective.icon;
                return (
                  <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                    <CardContent className="pt-6 pb-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-serif text-xl font-bold mb-2">
                            {objective.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {objective.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* SDG Commitment */}
            <Card className="border-none shadow-xl bg-gradient-to-br from-light-sage/50 to-white">
              <CardContent className="pt-8 pb-8">
                <div className="text-center mb-8">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-serif text-2xl font-bold mb-3">
                    Supporting Sustainable Development Goals
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    We are committed to supporting the achievement of the United Nations Sustainable Development Goals
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {sdgGoals.map((goal, index) => (
                    <div 
                      key={index}
                      className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 transition-colors duration-300"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-2">
                        {goal.number}
                      </div>
                      <p className="text-xs text-center text-muted-foreground font-medium leading-tight">
                        {goal.title}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="py-20 bg-gradient-to-b from-light-sage/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-2xl bg-white">
              <CardContent className="pt-12 pb-12 px-8 md:px-12">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto mb-6 shadow-xl animate-float">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold mb-4">
                    Our Commitment to You
                  </h2>
                </div>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed text-center">
                  <p>
                    At <strong className="text-primary">Holistic Family Midwife</strong>, we are dedicated to 
                    empowering women, promoting healthy families, and fostering thriving communities through 
                    compassionate and comprehensive care.
                  </p>
                  <p>
                    We believe that every woman's journey into motherhood is unique and deserves to be 
                    celebrated, supported, and honored. Our approach goes beyond clinical care we walk 
                    alongside you, providing guidance, encouragement, and unwavering support every step of the way.
                  </p>
                  <div className="pt-6">
                    <div className="inline-block px-6 py-3 bg-primary/10 rounded-full">
                      <p className="text-primary font-bold">
                        Empowering Women • Promoting Health • Fostering Community
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="py-20 bg-gradient-to-b from-white to-light-sage/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground">
              We'd love to hear from you! Whether you have questions about our services, want to schedule 
              a consultation, or simply want to learn more about how we can support you, reach out today.
            </p>
          </div>
        </div>
      </section>

      <EnquiryForm />
    </div>
  );
};

export default About;