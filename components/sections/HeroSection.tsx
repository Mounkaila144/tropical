'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Heart, Star, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const heroImages = [
  'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  '/image/hero/tropicalteams.png'
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000); // Slightly longer for better UX
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} id="accueil" className="relative h-screen overflow-hidden pt-36 sm:pt-16 md:pt-18 mb-0">
      {/* Enhanced Background optimisé pour logo vert #b3dccc */}
      <div className="absolute inset-0 tropical-luxury-gradient-radial opacity-20"></div>
      
      {/* Zone claire spéciale pour le logo */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/10 via-transparent to-transparent"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Interactive Glow Effect */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(212, 175, 55, 0.1), transparent 40%)`,
        }}
      />

      {/* Carousel Background */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Ambiance spa relaxante ${index + 1} - Tropical Massage Niamey`}
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
            />
            <div className="absolute inset-0 tropical-strong-overlay" />
          </div>
        ))}
      </div>

      {/* Accessible Carousel Controls */}
      <button
        onClick={prevSlide}
        aria-label="Image précédente"
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 p-4 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--tropical-gold)]"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Image suivante"
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 p-4 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--tropical-gold)]"
      >
        <ChevronRight className="text-white" size={24} />
      </button>

      {/* Accessible Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10" role="tablist" aria-label="Sélecteur d'images">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`Aller à l'image ${index + 1}`}
            className={`w-4 h-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--tropical-gold)] ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Enhanced Hero Content */}
      <div className="relative z-10 h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] md:h-[calc(100vh-4.5rem)] flex items-center justify-center py-4 sm:py-8">
        <div className={`text-center text-white max-w-5xl mx-auto px-4 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>

          {/* Premium Badge */}
          <div className={`inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8 transition-all duration-700 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Award className="text-[var(--tropical-gold)] w-4 h-4" />
            <span className="text-sm font-medium tracking-wide">Centre de Bien-être Premium</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-[var(--tropical-gold)] fill-current" />
              ))}
            </div>
          </div>

          {/* Main Logo with Enhanced Animation */}
          <div className={`flex items-center justify-center mb-8 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <Sparkles className="text-[var(--tropical-gold)] mr-6 drop-shadow-lg animate-pulse luxury-text-glow" size={40} />
            <div className="tropical-logo-container">
              <Image
                src="/image/tropical-massage-niamey-logo.png"
                alt="Tropical Massage - Salon de Coiffure Homme et Centre de Bien-être à Niamey, Niger"
                width={400}
                height={200}
                className="w-80 md:w-96 lg:w-[500px] h-auto drop-shadow-2xl hover:scale-105 transition-all duration-500 filter hover:brightness-110"
                priority
              />
              {/* Effet de brillance animé sur le logo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                   style={{
                     animation: 'logoShimmer 3s ease-in-out infinite',
                     animationDelay: '1s'
                   }}>
              </div>
            </div>
            <Heart className="text-[var(--tropical-gold)] ml-6 drop-shadow-lg animate-pulse luxury-text-glow" size={40} />
            <span className="sr-only">Tropical Massage - Salon de Coiffure Homme et Centre de Bien-être à Niamey, Niger</span>
          </div>

          {/* Subtitle with Elegant Typography */}
          <div className={`mb-8 transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[var(--tropical-gold)] to-transparent mx-auto"></div>
          </div>

          {/* Enhanced Description */}
          <p className={`text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90 font-light transition-all duration-1000 delay-900 ${
            isLoaded ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Découvrez l&apos;excellence de la beauté et du bien-être avec nos services premium :
            <span className="text-[var(--tropical-gold)] font-medium"> coiffure homme professionnelle</span>,
            <span className="text-[var(--tropical-gold)] font-medium"> massages relaxants</span>,
            <span className="text-[var(--tropical-gold)] font-medium"> soins de visage et épilation</span>.
          </p>

          {/* Stats Section */}
          <div className={`flex flex-wrap justify-center gap-8 mb-12 transition-all duration-1000 delay-1100 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--tropical-gold)] mb-1">1000+</div>
              <div className="text-sm text-white/80 tracking-wide">Clients Satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--tropical-gold)] mb-1">5★</div>
              <div className="text-sm text-white/80 tracking-wide">Note Moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--tropical-gold)] mb-1">5+</div>
              <div className="text-sm text-white/80 tracking-wide">Années d&apos;Expérience</div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-1300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Button
              onClick={() => window.location.href = '/massage'}
              size="lg"
              aria-label="Découvrir nos services de massage et kinésithérapie"
              className="group tropical-luxury-gradient-dark text-white hover:opacity-90 transition-all duration-500 px-10 py-5 text-lg hover-lift luxury-shadow rounded-full relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-[var(--tropical-gold)]"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 group-hover:animate-spin transition-transform duration-500" />
                <span>Découvrir Nos Services</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--tropical-gold)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
            <Button
              onClick={() => window.location.href = '/tropical-store'}
              size="lg"
              variant="outline"
              aria-label="Visiter notre boutique en ligne tropical Store"
              className="group luxury-backdrop border-2 border-white/40 text-white hover:bg-white/20 hover:border-[var(--tropical-gold)] transition-all duration-500 px-10 py-5 text-lg hover-lift luxury-border rounded-full relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-[var(--tropical-gold)]"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Heart className="w-5 h-5 group-hover:animate-pulse transition-transform duration-500" />
                <span>Visiter tropical Store</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--tropical-gold)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}