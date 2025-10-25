'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi de formulaire
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: ['H3CR+877', 'Fenifoot vers pharmacie les jumelles', 'Niamey, Niger'],
      link: 'https://maps.google.com/maps/search/H3CR+877,+Niamey,+Niger'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: ['+227 87 79 44 50', '+227 81 21 45 55'],
      link: 'tel:+22781214555'
    },
    {
      icon: Mail,
      title: 'Email',
      content: ['contact@tropicalmassage.com'],
      link: 'mailto:contact@tropicalmassage.com'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: ['Lun-Sam: 8h-20h', 'Dimanche: Sur rendez-vous'],
      link: null
    }
  ];

  const services = [
    'Coiffure VIP Adulte - 4,000F',
    'Coiffure Enfants - 1,500F',
    'Massage VIP Complet - 60,000F',
    'Massage aux Pierres Chaudes - 30,000F',
    'Massage Relaxant - 15,000F',
    'Épilation Complète du Corps - 30,000F',
    'Soins de Visage - 15,000F',
    'Pédicure Homme - 9,000F',
    'Pédicure Femme - 8,000F',
    'Manucure Homme - 3,000F',
    'Manucure Femme - 2,500F'
  ];

  const timeSlots = [
    '9:00', '9:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00', '18:30'
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 via-white to-[var(--tropical-burgundy)]/5 relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[var(--tropical-gold)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-[var(--tropical-burgundy)] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-[var(--tropical-burgundy)]/10 rounded-full px-6 py-2 mb-6">
            <MessageCircle className="w-5 h-5 text-[var(--tropical-burgundy)]" />
            <span className="text-[var(--tropical-burgundy)] font-medium">Contactez-nous</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-playfair tropical-burgundy mb-6">
            Contact & <span className="text-[var(--tropical-gold)]">Réservation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Prenez rendez-vous facilement ou contactez-nous pour toute question.
            Notre équipe est à votre disposition pour vous offrir la meilleure expérience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-3xl font-playfair tropical-burgundy mb-8">Informations de Contact</h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-2xl bg-gray-50/50">
                    <div className="flex-shrink-0 w-14 h-14 tropical-gradient rounded-2xl flex items-center justify-center shadow-md">
                      <info.icon className="text-white" size={22} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2 text-lg">{info.title}</h4>
                      {info.link && info.title !== 'Horaires' ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-[var(--tropical-burgundy)] transition-colors duration-300 block"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.content.map((line, i) => (
                            <div key={i} className="leading-relaxed">{line}</div>
                          ))}
                        </a>
                      ) : (
                        <div className="text-gray-600">
                          {info.content.map((line, i) => (
                            <div key={i} className="leading-relaxed">{line}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin size={48} className="mx-auto mb-2 text-[var(--tropical-burgundy)]" />
                  <p className="font-medium">Carte interactive</p>
                  <p className="text-sm">H3CR+877</p>
                  <p className="text-sm">Fenifoot vers pharmacie les jumelles</p>
                  <p className="text-sm">Niamey, Niger</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}