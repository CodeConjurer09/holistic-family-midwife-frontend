import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Heart, Baby, Users, Stethoscope, Calendar, BookOpen, UserCheck, CheckCircle } from "lucide-react";
import prenatalImage from "/assets/prenatal-care.jpg";
import postpartumImage from "/assets/postpartum.jpg";
import consultationImage from "/assets/consultation.jpg";

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
    },
    {
      icon: BookOpen,
      title: "Teenage Empowerment & Reproductive Education",
      image: consultationImage,
      description: "Empowering young people with reproductive health knowledge",
      details: [
        "Age-appropriate reproductive health education",
        "Puberty and body changes discussions",
        "Menstrual health and hygiene education",
        "Healthy relationships and consent education",
        "Prevention of teenage pregnancy",
        "STI awareness and prevention",
        "Mental health and self-esteem support",
        "Parent-teen communication facilitation",
      ],
      frequency: "Group workshops, school programs, or individual sessions available",
    },
  ];

  const additionalServices = [
    {
      icon: Heart,
      title: "High-Risk Pregnancy Monitoring",
      description: "Specialized care for pregnancies with additional risk factors",
    },
    {
      icon: Baby,
      title: "Newborn Care Education",
      description: "Hands-on guidance for caring for your newborn",
    },
    {
      icon: Users,
      title: "Group Prenatal Care",
      description: "Community-based prenatal care with peer support",
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
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-light-sage to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">Comprehensive Care</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              What We Offer
            </h1>
            <p className="text-lg text-muted-foreground">
              From preconception through postpartum, we provide personalized midwifery care tailored to your unique journey and needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  <div className={`text-center lg:text-left ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-6 shadow-lg mx-auto lg:mx-0">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    
                    <div className="mb-6 text-left">
                      <h3 className="font-semibold mb-4 flex items-center gap-2 justify-center lg:justify-start">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        What's Included:
                      </h3>
                      <ul className="space-y-3">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                            <span className="text-primary mt-1 flex-shrink-0">•</span>
                            <span className="text-left">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="p-5 bg-gradient-to-br from-light-sage to-primary/5 rounded-xl mb-6 border border-primary/10 text-left">
                      <p className="text-sm font-semibold mb-2 text-primary">Visit Frequency:</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.frequency}</p>
                    </div>
                    
                    <div className="flex justify-center lg:justify-start">
                      <Button asChild size="lg" className="group">
                        <Link to="/booking">
                          Schedule Consultation
                          <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-2xl shadow-2xl w-full"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-b from-white to-light-sage/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Additional Services
            </h2>
            <p className="text-muted-foreground">
              Specialized support options to complement your care
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-none text-center">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 shadow-md hover:shadow-lg transition-shadow bg-white"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-semibold text-base">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-light-sage to-primary/10">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto shadow-2xl text-center border-none">
            <CardContent className="pt-12 pb-12 px-8">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-primary" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Schedule a consultation to learn more about our services and discuss how we can support your maternal health journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="group">
                  <Link to="/booking">
                    Book Consultation
                    <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">Learn About Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;