import { Shield, Heart, Users, CheckCircle } from 'lucide-react';

const WhyChooseUsSection = () => {
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

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Why Choose Us Grid - Takes 2/3 width on large screens */}
          <div className="w-full lg:w-2/3">
            <div className="grid md:grid-cols-2 gap-8">
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
          <div className="w-full lg:w-1/3">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/assets/why.png" 
                alt="Why Choose Us" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;