import React from 'react';
import { Users, TrendingUp, Shield, Truck } from 'lucide-react';

const About = ({ language }) => {
  const translations = {
    en: {
      title: 'About Us',
      subtitle: 'Your Trusted Indonesian Green Coffee Beans Export Partner',
      description: 'We specialize in exporting premium unroasted Indonesian specialty green coffee beans to international roasters and importers. With direct farm partnerships across the Indonesian archipelago, we provide fully traceable, quality-certified green beans with complete technical specifications. Every lot is carefully processed, graded, and packaged to preserve freshness and meet your exact roasting requirements.',
      stats1: 'Years Experience',
      stats2: 'Coffee Farmers',
      stats3: 'Countries Export',
      stats4: 'Containers/Year',
      value1Title: 'Farm to Roaster',
      value1Desc: 'Direct partnerships with coffee farmers ensure complete traceability, quality control from cherry to green bean, and fair pricing for sustainable coffee production.',
      value2Title: 'Quality Testing',
      value2Desc: 'Every batch undergoes rigorous quality control: moisture testing, defect screening, cupping evaluation, and complete technical specification documentation.',
      value3Title: 'Full Certification',
      value3Desc: 'All green beans are certified with Organic, Fair Trade, Rainforest Alliance, and other international quality standards with full documentation.',
      value4Title: 'Professional Packaging',
      value4Desc: 'GrainPro and hermetic packaging to preserve green bean freshness during shipping. Expert logistics ensure optimal storage conditions and on-time delivery.'
    },
    id: {
      title: 'Tentang Kami',
      subtitle: 'Mitra Ekspor Green Bean Kopi Indonesia Terpercaya Anda',
      description: 'Kami mengkhususkan diri dalam ekspor green bean kopi spesial Indonesia premium yang belum disangrai kepada roaster dan importir internasional. Dengan kemitraan langsung dengan petani di seluruh kepulauan Indonesia, kami menyediakan green bean yang dapat dilacak sepenuhnya, bersertifikat kualitas dengan spesifikasi teknis lengkap. Setiap lot diproses dengan hati-hati, di-grade, dan dikemas untuk menjaga kesegaran dan memenuhi kebutuhan roasting Anda.',
      stats1: 'Tahun Pengalaman',
      stats2: 'Petani Kopi',
      stats3: 'Negara Ekspor',
      stats4: 'Kontainer/Tahun',
      value1Title: 'Petani ke Roaster',
      value1Desc: 'Kemitraan langsung dengan petani kopi memastikan traceability penuh, kontrol kualitas dari cherry hingga green bean, dan harga yang adil untuk produksi kopi berkelanjutan.',
      value2Title: 'Uji Kualitas',
      value2Desc: 'Setiap batch melalui kontrol kualitas ketat: uji kadar air, screening cacat, evaluasi cupping, dan dokumentasi spesifikasi teknis lengkap.',
      value3Title: 'Sertifikasi Lengkap',
      value3Desc: 'Semua green bean bersertifikat Organik, Fair Trade, Rainforest Alliance, dan standar kualitas internasional lainnya dengan dokumentasi lengkap.',
      value4Title: 'Kemasan Profesional',
      value4Desc: 'Kemasan GrainPro dan hermetic untuk menjaga kesegaran green bean selama pengiriman. Logistik ahli memastikan kondisi penyimpanan optimal dan pengiriman tepat waktu.'
    }
  };

  const t = translations[language];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-amber-800 font-semibold mb-6">
            {t.subtitle}
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-5xl font-bold text-amber-800 mb-2">15+</div>
            <p className="text-gray-600 font-medium">{t.stats1}</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-amber-800 mb-2">500+</div>
            <p className="text-gray-600 font-medium">{t.stats2}</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-amber-800 mb-2">25+</div>
            <p className="text-gray-600 font-medium">{t.stats3}</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-amber-800 mb-2">200+</div>
            <p className="text-gray-600 font-medium">{t.stats4}</p>
          </div>
        </div>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-amber-50 to-white border border-amber-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-amber-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.value1Title}</h3>
            <p className="text-gray-600 leading-relaxed">{t.value1Desc}</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-amber-50 to-white border border-amber-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-amber-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.value2Title}</h3>
            <p className="text-gray-600 leading-relaxed">{t.value2Desc}</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-amber-50 to-white border border-amber-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-amber-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.value3Title}</h3>
            <p className="text-gray-600 leading-relaxed">{t.value3Desc}</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-amber-50 to-white border border-amber-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-amber-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.value4Title}</h3>
            <p className="text-gray-600 leading-relaxed">{t.value4Desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;