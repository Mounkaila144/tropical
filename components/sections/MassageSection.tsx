'use client';

import { useState, useEffect, useRef } from 'react';
import { Clock, Star, Users, Zap, Sparkles, Heart, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    name: 'Massage Relaxant',
    description: 'Le massage relaxant est composé de manœuvres douces, d\'effleurages, de lissages fluides. Les gestes sont lents et légèrement appuyés afin de dénouer les tensions du massé sans que celui-ci ne ressente aucune douleur.',
    duration: '30 min',
    price: '20.000F',
    image: '/image/massage/relaxant.png',
    popular: true,
    benefits: ['Dénoue les tensions', 'Sans douleur', 'Relaxation profonde'],
    details: 'Ce massage utilise des manœuvres douces et des effleurages pour une détente complète du corps.'
  },
  {
    name: 'Massage Lomi Lomi',
    description: 'Ce massage est pratiqué à Hawaï depuis des centaines d\'années. De longs mouvements de caresses fluides et enveloppants alternent avec des mouvements plus fermes et rythmés. Traditionnellement, le but de ce massage est d\'harmoniser l\'énergie vitale afin de rétablir l\'équilibre du corps.',
    duration: '40 min',
    price: '25.000F',
    image: '/image/massage/lomi lomi.png',
    popular: false,
    benefits: ['Harmonise l\'énergie vitale', 'Rétablit l\'équilibre', 'Déconnexion complète', 'Relaxation profonde'],
    details: 'Si vous souhaitez vous déconnecter complètement, vous relaxer et vous détendre en profondeur, le massage Lomi Lomi est la bonne solution. Le (la) massé(e) est allongé sur la table de massage et l\'artisan vient masser tout le corps.'
  },
  {
    name: 'Massage Infrarouge',
    description: 'Cette lampe infrarouge multifonction peut être utilisée pour soulager les douleurs musculaires, désinfecter et stériliser. Une chaleur bienfaisante qui permet de relâcher les muscles. La lumière infrarouge a la capacité de pénétrer dans les couches de la peau.',
    duration: '30 min',
    price: '25.000F',
    image: '/image/massage/infra-rouge.png',
    popular: true,
    benefits: ['Soulage les douleurs (dos, cou, épaule, bras, genoux)', 'Bénéfique pour peau acnéique', 'Anti-vieillissement (rides, cicatrices, vergetures)', 'Traite autres affections cutanées'],
    details: 'Les risques liés aux infrarouges sont minimes comparés aux bienfaits apportés par la chaleur.'
  },
  {
    name: 'Ventouse Thérapie',
    description: 'La technique des ventouses est utilisée depuis des milliers d\'années en Asie pour soulager les maux, les douleurs et les blocages. Les ventouses sont placées sur différents points stratégiques du corps (dos, ventre, bras, jambes) afin d\'extraire les toxines et faire circuler l\'énergie.',
    duration: '1 h',
    price: '30.000F',
    image: '/image/massage/ventouse.png',
    popular: true,
    benefits: ['Sensation de légèreté', 'Réduction des douleurs', 'Stimulation de la circulation sanguine et lymphatique', 'Purification du sang'],
    details: 'La pose des ventouses se fait à l\'aide d\'une flamme que l\'on introduit dans la ventouse afin de chasser l\'air et créer une aspiration au point de pose.'
  },
  {
    name: 'Massage Assis',
    description: 'Le protocole du massage assis est relativement simple. Il est mené sur une personne habillée à travers ses vêtements, sur l\'ensemble de la partie haute du corps. Ce dernier est travaillé par un enchaînement précis : pressions, percussions, étirements des épaules, des bras, de la nuque, pressions sur le dos.',
    duration: '15 min',
    price: '15.000F',
    image: '/image/massage/assis.png',
    popular: false,
    benefits: ['Relaxation rapide', 'Remise en position des vertèbres', 'Amélioration circulation sanguine', 'Distribution de l\'énergie'],
    details: 'Pour finir, le praticien remet les vertèbres en position et favorise le retour de la circulation sanguine. Ce massage permet au patient de se relaxer et de distribuer correctement l\'énergie dans son corps.'
  },
  {
    name: 'Massage Tonic',
    description: 'Consiste à masser avec plus de force que le massage relaxant. Adapté à ceux qui ressentent des douleurs musculaires du dos, etc. Adapté aux sportifs après une activité physique intense ou à préparer le corps à une activité physique.',
    duration: '45 min',
    price: '25.000F',
    image: '/image/massage/tonic.png',
    popular: false,
    benefits: ['Soulage douleurs musculaires', 'Récupération sportive', 'Préparation physique', 'Massage plus intense'],
    details: 'Recommandé de combiner au bain de vapeur appelé Hammam.'
  },
  {
    name: 'Massage Relaxant Duo',
    description: 'Le massage en duo se caractérise par le fait d\'être massé à deux dans une même salle. Cette prestation est idéale pour s\'offrir une parenthèse de détente entre amis, en couple ou encore en famille.',
    duration: '30 min',
    price: '30.000F',
    image: '/image/massage/duo.png',
    popular: true,
    benefits: ['Expérience partagée', 'Détente à deux', 'Moment privilégié', 'Ambiance relaxante'],
    details: 'Parfait pour partager un moment de bien-être avec votre proche dans un cadre intimiste et relaxant.'
  },
  {
    name: 'Massage Thaï',
    description: 'Le massage thaïlandais est une technique de massothérapie qui consiste à détendre tout le corps afin de chasser les angoisses en créant un bien-être mental et physique. C\'est un massage qui se pratique en tenue (yoga passif), également appelé stretching thaïlandais.',
    duration: '1 h',
    price: '30.000F',
    image: '/image/massage/thai.png',
    popular: false,
    benefits: ['Meilleure souplesse', 'Meilleure mobilité', 'Bien-être garanti', 'Détente mentale et physique'],
    details: 'La personne n\'a pas besoin de faire quoi que ce soit : le praticien effectue tous les mouvements. C\'est du yoga passif où vous vous laissez porter.'
  }
];

const features = [
  {
    icon: Star,
    title: 'Excellence',
    description: 'Équipe de professionnels certifiés avec plus de 10 ans d\'expérience'
  },
  {
    icon: Clock,
    title: 'Flexibilité',
    description: 'Horaires étendus et rendez-vous disponibles 7j/7'
  },
  {
    icon: Users,
    title: 'Personnalisé',
    description: 'Chaque soin adapté à vos besoins spécifiques'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Techniques modernes et équipements haut de gamme'
  }
];

export default function MassageSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Fallback pour s'assurer que le contenu devient visible
    const fallbackTimer = setTimeout(() => {
      if (!isVisible) {
        setIsVisible(true);
      }
    }, 1000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(fallbackTimer);
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Réduit le threshold pour mobile
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="massage" className="py-24 bg-gradient-to-br from-white via-gray-50 to-[var(--tropical-burgundy)]/5 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full tropical-luxury-gradient-radial"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-[var(--tropical-gold)] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-[var(--tropical-burgundy)] rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[var(--tropical-gold)]/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-[var(--tropical-burgundy)]/10 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-[var(--tropical-burgundy)]" />
            <span className="text-[var(--tropical-burgundy)] font-medium">Services Premium</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-playfair tropical-burgundy mb-6 luxury-text-glow">
            tropical <span className="text-[var(--tropical-gold)]">Massage </span>
            <span className="sr-only"> - Salon de Coiffure Homme et Centre de Bien-être à Niamey, Niger</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Découvrez l'art de la beauté et du bien-être dans notre salon d'exception.
            Nos coiffeurs professionnels et thérapeutes certifiés vous offrent des services
            de coiffure homme, massage, épilation et soins du visage de qualité supérieure.
          </p>
        </div>

        {/* Enhanced Features */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center bg-white rounded-2xl p-6 shadow-md border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{transitionDelay: `${200 + index * 100}ms`}}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full tropical-gradient mb-6">
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Modern Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`border-0 bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{transitionDelay: `${400 + index * 150}ms`}}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                {service.popular && (
                  <Badge className="absolute top-4 left-4 bg-[var(--tropical-burgundy)] text-white px-3 py-1 rounded-full text-xs font-medium">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Populaire
                  </Badge>
                )}

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-[var(--tropical-burgundy)] font-bold text-sm">{service.price}</span>
                </div>

                {/* Hover overlay with additional details */}
                <div className={`absolute inset-0 bg-[var(--tropical-burgundy)]/95 backdrop-blur-sm transition-opacity duration-300 ${
                  hoveredCard === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                  <div className="p-6 text-white h-full flex flex-col justify-center">
                    <h4 className="font-semibold mb-3 text-lg">Bienfaits :</h4>
                    <ul className="space-y-1 text-sm">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-[var(--tropical-gold)] rounded-full mr-2 flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <CardHeader className="p-6">
                <div className="mb-4">
                  <CardTitle className="text-xl font-semibold text-gray-800 mb-2">
                    {service.name}
                  </CardTitle>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Clock size={16} className="mr-2 text-[var(--tropical-burgundy)]" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <CardDescription className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </CardDescription>

                {/* Service Details - shown when not hovered */}
                <div className={`mb-4 transition-opacity duration-300 ${
                  hoveredCard === index ? 'opacity-0' : 'opacity-100'
                }`}>
                  <p className="text-sm text-gray-500 italic">
                    {service.details}
                  </p>
                </div>

                {/* Modern Service Features */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-xs text-gray-500">
                      <Heart className="w-4 h-4 mr-1 text-[var(--tropical-burgundy)]" />
                      <span>Bien-être</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Users className="w-4 h-4 mr-1 text-[var(--tropical-burgundy)]" />
                      <span>Expert</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="bg-[var(--tropical-burgundy)] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[var(--tropical-burgundy)]/90 transition-colors">
                    Réserver
                  </button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="tropical-luxury-gradient-dark rounded-3xl p-12 text-white luxury-shadow-dark relative overflow-hidden group">
            {/* Enhanced Luxury overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/20 transition-all duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--tropical-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Floating Elements */}
            <div className="absolute top-6 right-6">
              <Sparkles className="w-8 h-8 text-[var(--tropical-gold)] animate-pulse" />
            </div>
            <div className="absolute bottom-6 left-6">
              <Heart className="w-6 h-6 text-[var(--tropical-gold)] animate-pulse" />
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl font-playfair mb-6 luxury-text-shadow">
                Réservez Votre <span className="text-[var(--tropical-gold)]">Moment</span> de Détente
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                Contactez-nous dès maintenant pour personnaliser votre expérience bien-être
                et découvrir nos offres exclusives
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/22781214555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[var(--tropical-burgundy)] px-8 py-3 rounded-lg font-semibold luxury-shadow"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:+22781214555"
                  className="inline-block luxury-backdrop border border-white/30 text-white px-8 py-3 rounded-lg font-semibold"
                >
                  Appeler Maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
