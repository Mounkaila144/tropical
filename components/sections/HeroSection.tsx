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
      const headerHeight = 100;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={heroRef} id="accueil" className="relative h-screen overflow-hidden mb-0" style={{ paddingTop: 'max(4rem, 5vh)', minHeight: 'calc(50vh - 2rem)' }}>
      {/* Enhanced Adaptive Background with better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40"></div>

      {/* Adaptive overlay that adjusts based on slide */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: currentSlide === 0
            ? 'radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 70%)'
            : 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(139,69,19,0.3) 50%, rgba(0,0,0,0.7) 100%)'
        }}
      ></div>

      {/* Logo highlight zone with adaptive colors */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[rgba(212,175,55,0.1)] to-transparent"></div>

      {/* Floating Particles with Adaptive Colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              background: currentSlide === 0
                ? `rgba(255, 255, 255, ${0.1 + Math.random() * 0.2})`
                : `rgba(212, 175, 55, ${0.1 + Math.random() * 0.3})`,
              boxShadow: currentSlide === 0
                ? `0 0 ${4 + Math.random() * 6}px rgba(255, 255, 255, 0.3)`
                : `0 0 ${4 + Math.random() * 6}px rgba(212, 175, 55, 0.4)`
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

      {/* Accessible Carousel Controls with Adaptive Colors */}
      <button
        onClick={prevSlide}
        aria-label="Image précédente"
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 p-4 rounded-full backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2"
        style={{
          background: currentSlide === 0
            ? 'rgba(255, 255, 255, 0.15)'
            : 'rgba(212, 175, 55, 0.2)',
          border: currentSlide === 0 ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(212, 175, 55, 0.4)'
        }}
      >
        <ChevronLeft
          className="transition-all duration-300"
          style={{ color: currentSlide === 0 ? '#ffffff' : '#d4af37' }}
          size={24}
        />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Image suivante"
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 p-4 rounded-full backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2"
        style={{
          background: currentSlide === 0
            ? 'rgba(255, 255, 255, 0.15)'
            : 'rgba(212, 175, 55, 0.2)',
          border: currentSlide === 0 ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(212, 175, 55, 0.4)'
        }}
      >
        <ChevronRight
          className="transition-all duration-300"
          style={{ color: currentSlide === 0 ? '#ffffff' : '#d4af37' }}
          size={24}
        />
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

      {/* Enhanced Hero Content with Adaptive Colors */}
      <div className="relative z-10 flex items-center justify-center py-4 sm:py-8" style={{ minHeight: 'calc(100vh - max(8rem, 10vh) - 4rem)' }}>
        <div className={`text-center max-w-5xl mx-auto px-4 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>

          {/* Premium Badge with Enhanced Colors */}
          <div className={`inline-flex items-center space-x-2 backdrop-blur-md rounded-full px-6 py-3 mb-8 transition-all duration-700 delay-300 border-2 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{
            background: currentSlide === 0
              ? 'rgba(255, 255, 255, 0.15)'
              : 'rgba(212, 175, 55, 0.1)',
            borderColor: currentSlide === 0
              ? 'rgba(255, 255, 255, 0.3)'
              : 'rgba(212, 175, 55, 0.4)'
          }}>
            <Award className="w-5 h-5" style={{ color: currentSlide === 0 ? '#ffffff' : '#d4af37' }} />
            <span className="text-sm font-semibold tracking-wide" style={{ color: currentSlide === 0 ? '#ffffff' : '#d4af37' }}>
              Spécialistes en Massage Thérapeutique
            </span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 fill-current"
                  style={{ color: currentSlide === 0 ? '#ffffff' : '#d4af37' }}
                />
              ))}
            </div>
          </div>

          {/* Main Logo with Enhanced Animation and Adaptive Colors */}
          <div className={`flex items-center justify-center mb-8 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <Sparkles
              className="mr-6 drop-shadow-lg animate-pulse size-10"
              style={{
                color: currentSlide === 0 ? '#ffffff' : '#d4af37',
                filter: currentSlide === 0
                  ? 'drop-shadow(0 0 10px rgba(255,255,255,0.5))'
                  : 'drop-shadow(0 0 10px rgba(212,175,55,0.8))'
              }}
            />
            <div className="tropical-logo-container relative">
              <Image
                src="/image/tropical-massage-niamey-logo.png"
                alt="Tropical Massage - Salon de Coiffure Homme et Centre de Bien-être à Niamey, Niger"
                width={400}
                height={200}
                className="w-80 md:w-96 lg:w-[500px] h-auto hover:scale-105 transition-all duration-500"
                style={{
                  filter: currentSlide === 0
                    ? 'drop-shadow(0 4px 20px rgba(0,0,0,0.3)) brightness(1.1) contrast(1.1)'
                    : 'drop-shadow(0 4px 20px rgba(212,175,55,0.2)) brightness(1.2) contrast(1.2))'
                }}
                priority
              />
              {/* Enhanced shimmer effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: currentSlide === 0
                    ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
                    : 'linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)',
                  animation: 'logoShimmer 3s ease-in-out infinite',
                  animationDelay: '1s'
                }}
              />
            </div>
            <Heart
              className="ml-6 drop-shadow-lg animate-pulse size-10"
              style={{
                color: currentSlide === 0 ? '#ffffff' : '#d4af37',
                filter: currentSlide === 0
                  ? 'drop-shadow(0 0 10px rgba(255,255,255,0.5))'
                  : 'drop-shadow(0 0 10px rgba(212,175,55,0.8))'
              }}
            />
            <span className="sr-only">Tropical Massage - Salon de Coiffure Homme et Centre de Bien-être à Niamey, Niger</span>
          </div>

          {/* Subtitle with Elegant Typography */}
          <div className={`mb-8 transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div
              className="w-24 h-0.5 mx-auto"
              style={{
                background: currentSlide === 0
                  ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)'
                  : 'linear-gradient(90deg, transparent, rgba(212,175,55,0.9), transparent)'
              }}
            />
          </div>

          {/* Stats Section with Adaptive Colors */}
          <div className={`flex flex-wrap justify-center gap-8 mb-12 transition-all duration-1000 delay-1100 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{
                  color: currentSlide === 0 ? '#d4af37' : '#ffffff',
                  textShadow: currentSlide === 0
                    ? '0 0 15px rgba(212,175,55,0.8)'
                    : '0 0 15px rgba(255,255,255,0.6)'
                }}
              >8</div>
              <div
                className="text-sm tracking-wide"
                style={{ color: currentSlide === 0 ? 'rgba(255,255,255,0.9)' : 'rgba(244,182,189,0.9)' }}
              >Types de Massage</div>
            </div>
            <div className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{
                  color: currentSlide === 0 ? '#d4af37' : '#ffffff',
                  textShadow: currentSlide === 0
                    ? '0 0 15px rgba(212,175,55,0.8)'
                    : '0 0 15px rgba(255,255,255,0.6)'
                }}
              >15min</div>
              <div
                className="text-sm tracking-wide"
                style={{ color: currentSlide === 0 ? 'rgba(255,255,255,0.9)' : 'rgba(244,182,189,0.9)' }}
              >à 1h de Détente</div>
            </div>
            <div className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{
                  color: currentSlide === 0 ? '#d4af37' : '#ffffff',
                  textShadow: currentSlide === 0
                    ? '0 0 15px rgba(212,175,55,0.8)'
                    : '0 0 15px rgba(255,255,255,0.6)'
                }}
              >15.000F</div>
              <div
                className="text-sm tracking-wide"
                style={{ color: currentSlide === 0 ? 'rgba(255,255,255,0.9)' : 'rgba(244,182,189,0.9)' }}
              >À partir de</div>
            </div>
            <div className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{
                  color: currentSlide === 0 ? '#d4af37' : '#ffffff',
                  textShadow: currentSlide === 0
                    ? '0 0 15px rgba(212,175,55,0.8)'
                    : '0 0 15px rgba(255,255,255,0.6)'
                }}
              >100%</div>
              <div
                className="text-sm tracking-wide"
                style={{ color: currentSlide === 0 ? 'rgba(255,255,255,0.9)' : 'rgba(244,182,189,0.9)' }}
              >Bien-être Garanti</div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-1300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Button
              onClick={() => scrollToSection('massage')}
              size="lg"
              aria-label="Découvrir nos services de massage thérapeutique"
              className="group hover:opacity-90 transition-all duration-500 px-10 py-5 text-lg hover-lift rounded-full relative overflow-hidden focus:outline-none focus:ring-2"
              style={{
                background: currentSlide === 0
                  ? 'linear-gradient(135deg, rgba(212,175,55,0.9), rgba(255,215,0,0.8))'
                  : 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(244,182,189,0.3))',
                color: currentSlide === 0 ? '#000000' : '#ffffff',
                border: currentSlide === 0 ? '2px solid rgba(212,175,55,0.3)' : '2px solid rgba(255,255,255,0.4)',
                boxShadow: currentSlide === 0
                  ? '0 8px 32px rgba(212,175,55,0.3)'
                  : '0 8px 32px rgba(255,255,255,0.2)'
              }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Sparkles
                  className="w-5 h-5 group-hover:animate-spin transition-transform duration-500"
                  style={{ color: currentSlide === 0 ? '#ffffff' : '#d4af37' }}
                />
                <span className="font-semibold">Explorer Nos Massages</span>
              </span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: currentSlide === 0
                    ? 'linear-gradient(90deg, rgba(255,255,255,0.2), transparent, rgba(255,255,255,0.1))'
                    : 'linear-gradient(90deg, rgba(212,175,55,0.3), transparent, rgba(212,175,55,0.1))'
                }}
              />
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="outline"
              aria-label="Réserver un massage ou nous contacter"
              className="group transition-all duration-500 px-10 py-5 text-lg hover-lift rounded-full relative overflow-hidden focus:outline-none focus:ring-2"
              style={{
                background: currentSlide === 0
                  ? 'rgba(255,255,255,0.1)'
                  : 'rgba(212,175,55,0.15)',
                color: currentSlide === 0 ? '#ffffff' : '#d4af37',
                border: currentSlide === 0 ? '2px solid rgba(255,255,255,0.4)' : '2px solid rgba(212,175,55,0.5)'
              }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Heart
                  className="w-5 h-5 group-hover:animate-pulse transition-transform duration-500"
                  style={{ color: currentSlide === 0 ? '#d4af37' : '#ffffff' }}
                />
                <span className="font-semibold">Réserver Maintenant</span>
              </span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: currentSlide === 0
                    ? 'linear-gradient(90deg, transparent, rgba(212,175,55,0.2))'
                    : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2))'
                }}
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}