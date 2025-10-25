'use client';

import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import StatsTestimonialsSection from '@/components/sections/StatsTestimonialsSection';
import MassageSection from '@/components/sections/MassageSection';
import StoreSection from '@/components/sections/StoreSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function Home() {
  // Handle anchor links when page loads
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500); // Délai plus long pour laisser le temps à la page de se charger
    }
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://tropical-massage.com',
    name: 'Tropical Massage',
    alternateName: 'Tropical Massage - Centre de Bien-être',
    description: 'Tropical Massage - Salon de coiffure homme professionnel, services de massage, épilation, soins de visage et pédicure/manicure à Niamey, Niger.',
    url: 'https://tropical-massage.com',
    telephone: '+22781214555',
    email: 'contact@tropicalmassage.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'H3CR+877, Fenifoot vers pharmacie les jumelles',
      addressLocality: 'Niamey',
      addressCountry: 'NE',
      addressRegion: 'Niamey'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 13.5116,
      longitude: 2.1254
    },
    openingHours: [
      'Mo-Fr 08:00-18:00',
      'Sa 09:00-17:00'
    ],
    priceRange: '$$',
    image: [
      'https://tropical-massage.com/image/tropical-massage-niamey.jpg'
    ],
    sameAs: [
      'https://wa.me/22781214555',
      'https://wa.me/227812145552925'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de Massage et Bien-être',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Coiffure Homme',
            description: 'Coiffure professionnelle pour hommes, style de coupe indien et international'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Massage Complet',
            description: 'Massages relaxants, toniques, aux pierres chaudes et massage VIP complet'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Épilation',
            description: 'Épilation complète à la cire - corps, jambes, aisselles et zones intimes'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Soins de Visage',
            description: 'Soins de visage avec traitement complet du masque (Facial)'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127'
    }
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SEO Content Hidden */}
      <div className="sr-only">
        <h1>Tropical Massage - Salon de Coiffure Homme et Centre de Bien-être à Niamey, Niger</h1>
        <p>Tropical Massage est votre salon de coiffure homme professionnel et centre de bien-être de référence à Niamey, Niger. Nous proposons des services de coiffure professionnelle, massage relaxant et thérapeutique, épilation complète, soins de visage, pédicure et manucure. Situé à H3CR+877, Fenifoot vers pharmacie les jumelles, notre salon offre des soins de qualité dans un environnement moderne. Contactez-nous au +227 87 79 44 50 ou +227 81 21 45 55 pour réserver.</p>
        <h2>Services Tropical Massage à Niamey</h2>
        <ul>
          <li>Coiffure VIP adulte homme à Niamey - 4 000F</li>
          <li>Coiffure enfants à Niamey - 1 500F</li>
          <li>Massage relaxant, tonique et aux pierres chaudes à Niamey</li>
          <li>Massage VIP complet avec pierres chaudes - 60 000F</li>
          <li>Épilation complète du corps et zones spécifiques à Niamey</li>
          <li>Soins de visage avec traitement complet du masque à Niamey</li>
          <li>Pédicure et manucure pour hommes et femmes au Niger</li>
          <li>Services de bien-être premium à Bobiel Ecole</li>
        </ul>
        <h3>Pourquoi choisir Tropical Massage à Niamey ?</h3>
        <p>Tropical Massage situé à H3CR+877, Fenifoot vers pharmacie les jumelles à Niamey, Niger, vous accueille dans un salon moderne et professionnel. Nos coiffeurs et thérapeutes qualifiés vous proposent des services personnalisés : coiffure homme professionnelle, massages relaxants, soins de visage, épilation et pédicure/manucure. Nous sommes votre partenaire beauté et bien-être au Niger.</p>
      </div>

      <Header />
      <HeroSection />
      <StatsTestimonialsSection />
      <MassageSection />
      <StoreSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}