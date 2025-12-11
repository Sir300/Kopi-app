import React from 'react';
import { ArrowRight, Award, Globe2, Leaf } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ language }) => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const translations = {
    en: {
      title: 'Premium Green Coffee Beans',
      subtitle: 'Indonesian Unroasted Coffee for Global Roasters',
      description: 'Direct supply of specialty grade green beans from Indonesian highlands. Fully certified, quality-tested raw coffee with complete technical specifications ready for your roasting profile.',
      cta1: 'View Green Beans',
      cta2: 'Request Sample',
      feature1: 'Quality Certified',
      feature1Desc: 'Full Technical Specs',
      feature2: 'Ready to Roast',
      feature2Desc: 'GrainPro Packaging',
      feature3: 'Direct Trade',
      feature3Desc: 'Farm to Roaster'
    },
    id: {
      title: 'Green Bean Kopi Premium',
      subtitle: 'Kopi Mentah Indonesia untuk Roaster Global',
      description: 'Pasokan langsung green bean grade spesial dari dataran tinggi Indonesia. Biji kopi mentah bersertifikat penuh dengan spesifikasi teknis lengkap, siap untuk profil roasting Anda.',
      cta1: 'Lihat Green Bean',
      cta2: 'Minta Sampel',
      feature1: 'Bersertifikat Kualitas',
      feature1Desc: 'Spesifikasi Teknis Lengkap',
      feature2: 'Siap Sangrai',
      feature2Desc: 'Kemasan GrainPro',
      feature3: 'Direct Trade',
      feature3Desc: 'Langsung Petani ke Roaster'
    }
  };

  const t = translations[language];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main content */}
          <div className="mb-8 animate-fade-in">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {t.title}
              <span className="block text-amber-800 mt-2">{t.subtitle}</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={scrollToProducts}
              size="lg"
              className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {t.cta1}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {t.cta2}
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-amber-100">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-amber-800" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t.feature1}</h3>
              <p className="text-gray-600">{t.feature1Desc}</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-amber-100">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe2 className="w-6 h-6 text-amber-800" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t.feature2}</h3>
              <p className="text-gray-600">{t.feature2Desc}</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-amber-100">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-6 h-6 text-amber-800" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t.feature3}</h3>
              <p className="text-gray-600">{t.feature3Desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;