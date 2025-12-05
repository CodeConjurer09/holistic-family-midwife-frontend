import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Award, Heart, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  title: string;
  highlight: string;
  description: string;
  image: string;
}

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const slides: Slide[] = [
    {
      title: "Empowering Motherhood,",
      highlight: "Nurturing Families",
      description: "Experience personalized, evidence-based midwifery care for pregnancy, birth and beyond.",
      image: "/src/assets/hero1.jpg"
    },
    {
      title: "Your Birth,",
      highlight: "Your Choice",
      description: "Supporting natural births with compassionate care and expert guidance throughout your journey.",
      image: "/src/assets/hero2.jpg"
    },
    {
      title: "Holistic Care for",
      highlight: "Every Stage",
      description: "From prenatal care to postpartum support, we're with you every step of the way.",
      image: "/src/assets/hero3.jpg"
    },
    {
      title: "Building Confidence,",
      highlight: "Creating Connections",
      description: "Join our community of empowered mothers and receive 24/7 support from certified professionals.",
      image: "/api/placeholder/1920/1080"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative h-[700px] overflow-hidden">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
          >
            <div className="absolute inset-0 z-0">
              <img 
                src={slide.image} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
              <div className="text-center max-w-4xl">
                <h1 
                  className={`font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-700 delay-200 ${
                    index === currentSlide
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                >
                  {slide.title}{' '}
                  <span className="text-primary">{slide.highlight}</span>
                </h1>

                <p 
                  className={`text-xl text-white/85 mb-8 leading-relaxed transition-all duration-700 delay-400 ${
                    index === currentSlide
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                >
                  {slide.description}
                </p>

                <div 
                  className={`flex flex-col sm:flex-row justify-center gap-4 mb-8 transition-all duration-700 delay-600 ${
                    index === currentSlide
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                >
                  <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
                    <Link to="/booking">Book Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-black border-white/40 hover:bg-white/10">
                    <Link to="/services">Explore Services</Link>
                  </Button>
                </div>

                <div 
                  className={`flex flex-wrap justify-center gap-6 md:gap-8 text-white/80 text-sm md:text-base transition-all duration-700 delay-700 ${
                    index === currentSlide
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                >
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
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentSlide
                ? 'w-12 bg-primary'
                : 'w-3 bg-white/40 hover:bg-white/60'
            } h-3 rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>
    </section>
  );
};

export default HeroCarousel;