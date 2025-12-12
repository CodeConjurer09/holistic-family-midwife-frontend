import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Heart, Baby, Users, Stethoscope, Calendar, BookOpen, UserCheck, CheckCircle, ArrowRight, Shield, Award, Clock, Sparkles } from "lucide-react";
import prenatalImage from "/assets/prenatal-care.jpg";
import postpartumImage from "/assets/postpartum.jpg";
import consultationImage from "/assets/consultations.jpg";

const Services = () => {
  const mainServices = [
    {
      icon: Heart,
      title: "Antenatal Care & Follow-Up",
      image: prenatalImage,
      description: "Comprehensive care throughout your pregnancy journey",
      details: [
        "Complete physical examinations and health assessments",
        "Routine lab work, screening tests, and ultrasound coordination",
        "Nutritional counseling and lifestyle guidance",
        "Fetal growth and development monitoring",
        "Birth plan development and discussion",
        "Regular prenatal education and support",
        "Management of minor pregnancy discomforts",
      ],
      frequency: "Monthly visits until 28 weeks, bi-weekly until 36 weeks, then weekly until birth",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: Stethoscope,
      title: "Consultations",
      image: consultationImage,
      description: "Expert guidance for all your maternal health needs",
      details: [
        "One-on-one personalized consultation sessions",
        "Pre-pregnancy health optimization advice",
        "Discussion of birth options and preferences",
        "Second opinion consultations",
        "Fertility and conception guidance",
        "Maternal health concerns and questions",
        "Family planning discussions",
      ],
      frequency: "Available by appointment - single sessions or ongoing support packages",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Partner Health: A Shared Responsibility",
      image: consultationImage,
      description: "Preconception planning for both partners",
      details: [
        "Comprehensive preconception health assessments for partners",
        "Male fertility evaluation and optimization",
        "Lifestyle and nutrition guidance for both partners",
        "Genetic counseling and family planning",
        "Sexual health education and screening",
        "Stress management and mental health support",
        "Joint preparation for parenthood",
      ],
      frequency: "Flexible scheduling based on couple's needs - typically 2-4 sessions",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Baby,
      title: "Postpartum Care & Follow-Up",
      image: postpartumImage,
      description: "Comprehensive support for mother and baby after birth",
      details: [
        "Complete postpartum physical examinations",
        "Breastfeeding support and lactation guidance",
        "Newborn care education and support",
        "Emotional wellbeing and mental health assessment",
        "Physical recovery monitoring and wound care",
        "Contraception and family planning counseling",
        "Return to normal activities guidance",
      ],
      frequency: "Visits at 1-2 days, 1-2 weeks, and 6 weeks postpartum, with additional visits as needed",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Calendar,
      title: "Preconception Care",
      image: prenatalImage,
      description: "Preparing your body and mind for a healthy pregnancy",
      details: [
        "Comprehensive health history and physical examination",
        "Pre-pregnancy screening tests and immunizations",
        "Nutritional assessment and supplementation advice",
        "Chronic condition management and medication review",
        "Lifestyle modification counseling",
        "Genetic risk assessment",
        "Fertility awareness and conception timing",
      ],
      frequency: "Initial comprehensive visit with follow-ups as needed before conception",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: UserCheck,
      title: "Preparation for Labor & Delivery",
      image: consultationImage,
      description: "Comprehensive childbirth education and preparation",
      details: [
        "Childbirth education classes (group or private)",
        "Pain management techniques and comfort measures",
        "Stages of labor and what to expect",
        "Breathing and relaxation exercises",
        "Partner's role during labor and delivery",
        "Hospital or birth center procedures",
        "Creating your personalized birth plan",
        "Postpartum preparation and planning",
      ],
      frequency: "6-8 week course or condensed weekend workshops available",
      color: "from-teal-500 to-cyan-500"
    },
  ];

  const additionalServices = [
    {
      icon: Heart,
      title: "High-Risk Pregnancy Monitoring",
      description: "Specialized care for pregnancies with additional risk factors",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: Baby,
      title: "Newborn Care Education",
      description: "Hands-on guidance for caring for your newborn",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Users,
      title: "Group Prenatal Care",
      description: "Community-based prenatal care with peer support",
      color: "from-purple-500 to-pink-500"
    },
  ];

  const faqs = [
    {
      question: "What's included in antenatal care visits?",
      answer: "Each antenatal visit includes checking your blood pressure, weight, urine, and baby's heart rate. We'll measure your belly to track baby's growth, discuss any concerns, perform necessary screenings, and provide education on pregnancy wellness. Visits typically last 30-45 minutes to ensure all your questions are answered.",
    },
    {
      question: "How does partner health affect pregnancy?",
      answer: "Partner health plays a crucial role in conception and pregnancy outcomes. Male fertility, lifestyle factors, and genetic health all contribute to successful conception and healthy pregnancy. Our partner health program addresses nutrition, exercise, stress management, and overall wellness for both partners.",
    },
    {
      question: "What does labor and delivery preparation include?",
      answer: "Our preparation program covers everything from understanding labor stages, pain management options, breathing techniques, and comfort measures to creating your birth plan and preparing for the postpartum period. We offer both group classes and private sessions to suit your needs.",
    },
    {
      question: "Do you provide teenage reproductive health education?",
      answer: "Yes! We offer age-appropriate, comprehensive reproductive health education for teenagers. Our programs cover puberty, menstrual health, healthy relationships, and prevention education in a safe, supportive environment. We can work with schools, community groups, or provide individual sessions.",
    },
    {
      question: "What is preconception care and when should I start?",
      answer: "Preconception care helps optimize your health before pregnancy. Ideally, you should start 3-6 months before trying to conceive. We'll assess your overall health, address any risk factors, optimize nutrition, review medications, and ensure you're physically and emotionally ready for pregnancy.",
    },
    {
      question: "Do you accept insurance?",
      answer: "We accept most major insurance plans and are happy to verify your coverage. We also offer self-pay options and flexible payment plans. Contact us to discuss your specific insurance or payment needs.",
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }

        .service-card {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .service-card:nth-child(1) { animation-delay: 0.1s; }
        .service-card:nth-child(2) { animation-delay: 0.2s; }
        .service-card:nth-child(3) { animation-delay: 0.3s; }

        .gradient-text {
          background: linear-gradient(135deg, #9b87f5 0%, #7E69AB 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 via-light-sage to-primary/5 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Yjg3ZjUiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjkgMi0yIDItMi0uOS0yLTJ6bS0yMCAwYzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjkgMi0yIDItMi0uOS0yLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full mb-8 shadow-lg animate-fadeInUp">
              <Sparkles className="h-5 w-5 text-primary animate-pulse-slow" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">Comprehensive Maternal Care</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              Services Designed for{" "}
              <span className="gradient-text">Your Journey</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fadeInUp leading-relaxed max-w-3xl mx-auto" style={{animationDelay: '0.3s'}}>
              From preconception through postpartum, we provide personalized midwifery care tailored to your unique needs and goals.
            </p>

            <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              <Button asChild size="lg" className="group shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-6">
                <Link to="/booking">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6 bg-white/80 backdrop-blur-sm">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            {[
              { icon: Shield, label: "Licensed & Certified", value: "Professional Care" },
              { icon: Award, label: "Years Experience", value: "Expert Team" },
              { icon: Heart, label: "Personalized", value: "Individual Focus" },
            ].map((item, idx) => (
              <div key={idx} className="text-center service-card">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${additionalServices[idx % 3].color} flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <p className="font-semibold text-foreground mb-1">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive care at every stage of your maternal health journey
            </p>
          </div>

          <div className="space-y-24">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={`${!isEven ? 'lg:order-2' : ''} space-y-6`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl animate-float`}>
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-primary uppercase tracking-wide">Service {index + 1}</span>
                        <h3 className="font-serif text-3xl md:text-4xl font-bold mt-1">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <h4 className="font-semibold mb-4 flex items-center gap-2 text-lg">
                        <CheckCircle className="h-6 w-6 text-primary" />
                        What's Included:
                      </h4>
                      <ul className="space-y-3">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                            <span className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.color} mt-2 flex-shrink-0`}></span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={`p-6 bg-gradient-to-br ${service.color} rounded-2xl shadow-xl text-white`}>
                      <p className="text-sm font-semibold mb-2 opacity-90">Visit Frequency:</p>
                      <p className="leading-relaxed">{service.frequency}</p>
                    </div>
                    
                    <Button asChild size="lg" className="group w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300">
                      <Link to="/booking">
                        Book This Service
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className={!isEven ? 'lg:order-1' : ''}>
                    <div className="relative group">
                      <div className={`absolute -inset-4 bg-gradient-to-br ${service.color} rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500`}></div>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3] transform group-hover:scale-[1.02] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Teenage Empowerment - Featured Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Yjg3ZjUiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full mb-6 shadow-lg">
                <BookOpen className="h-5 w-5" />
                <span className="font-semibold text-sm uppercase tracking-wide">Featured Program</span>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Teenage Empowerment &<br />
                <span className="gradient-text">Reproductive Education</span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Building a foundation of knowledge, confidence, and healthy choices for young people through comprehensive, age-appropriate education
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={consultationImage}
                  alt="Group education session"
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold text-lg">Group Workshops</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={prenatalImage}
                  alt="One-on-one counseling"
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-pink-900/40 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold text-lg">Individual Sessions</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={postpartumImage}
                  alt="School programs"
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold text-lg">School Programs</p>
                </div>
              </div>
            </div>

            {/* Program Details */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <Card className="shadow-2xl border-none bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    Program Components
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Age-appropriate reproductive health education",
                    "Puberty and body changes discussions",
                    "Menstrual health and hygiene education",
                    "Healthy relationships and consent education",
                    "Prevention of teenage pregnancy",
                    "STI awareness and prevention",
                    "Mental health and self-esteem support",
                    "Parent-teen communication facilitation"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-purple-50 transition-colors">
                      <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card className="shadow-2xl border-none bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif">Why This Matters</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-white/90">
                    <p className="leading-relaxed">
                      Early education empowers young people to make informed decisions about their health, relationships, and future. Our programs provide a safe, supportive environment where teenagers can learn, ask questions, and develop confidence.
                    </p>
                    <p className="leading-relaxed">
                      We work with families, schools, and communities to ensure comprehensive, culturally sensitive education that respects values while providing essential health information.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-2xl border-none bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif">Program Formats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-4 bg-purple-50 rounded-xl">
                      <p className="font-semibold text-purple-900 mb-1">School Workshops</p>
                      <p className="text-sm text-purple-700">Group sessions for students in educational settings</p>
                    </div>
                    <div className="p-4 bg-pink-50 rounded-xl">
                      <p className="font-semibold text-pink-900 mb-1">Community Programs</p>
                      <p className="text-sm text-pink-700">Community-based group education and support</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-xl">
                      <p className="font-semibold text-blue-900 mb-1">Individual Counseling</p>
                      <p className="text-sm text-blue-700">Private one-on-one sessions for personalized guidance</p>
                    </div>
                    <div className="p-4 bg-indigo-50 rounded-xl">
                      <p className="font-semibold text-indigo-900 mb-1">Parent-Teen Sessions</p>
                      <p className="text-sm text-indigo-700">Joint sessions to improve family communication</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA for Teenage Program */}
            <div className="text-center">
              <Card className="inline-block shadow-2xl border-none bg-white/90 backdrop-blur-sm">
                <CardContent className="py-8 px-12">
                  <h3 className="font-serif text-2xl font-bold mb-4">
                    Interested in Our Youth Program?
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-md">
                    Contact us to learn more about bringing this program to your school or community, or to schedule individual sessions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg">
                      <Link to="/booking">
                        Schedule Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="shadow-lg">
                      <Link to="/contact">Get More Information</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Specialized support options to complement your care
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="service-card shadow-xl hover:shadow-2xl transition-all duration-500 border-none group hover:-translate-y-2">
                  <CardHeader className="text-center pb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="font-serif text-2xl mb-3">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions about our services
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-2xl px-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-light-sage to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Yjg3ZjUiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjkgMi0yIDItMi0uOS0yLTJ6bS0yMCAwYzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjkgMi0yIDItMi0uOS0yLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Card className="max-w-4xl mx-auto shadow-2xl text-center border-none bg-white/90 backdrop-blur-sm">
            <CardContent className="pt-16 pb-16 px-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto mb-8 shadow-xl animate-float">
                <Heart className="h-12 w-12 text-white" />
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Schedule a consultation to learn more about our services and discuss how we can support your maternal health journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" asChild className="group shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-10 py-6">
                  <Link to="/booking">
                    Book Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-10 py-6">
                  <Link to="/about">Learn About Us</Link>
                </Button>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <p className="text-muted-foreground mb-4">Have questions? We're here to help</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                  <a href="tel:0797735027" className="text-primary hover:underline font-semibold">
                    Call: +254 797 735 027
                  </a>
                  <span className="hidden sm:inline text-gray-300">|</span>
                  <a href="mailto:info@holisticfamilymidwife.com" className="text-primary hover:underline font-semibold">
                    Email: info@holisticfamilymidwife.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;