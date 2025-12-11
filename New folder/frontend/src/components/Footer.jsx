import React from 'react';
import { Coffee } from 'lucide-react';

const Footer = ({ language }) => {
  const currentYear = new Date().getFullYear();

  const translations = {
    en: {
      tagline: 'Premium Green Coffee Beans Export',
      rights: 'All rights reserved.',
      madeWith: 'Made with',
      madeIn: 'in Indonesia'
    },
    id: {
      tagline: 'Ekspor Green Bean Kopi Premium',
      rights: 'Hak cipta dilindungi.',
      madeWith: 'Dibuat dengan',
      madeIn: 'di Indonesia'
    }
  };

  const t = translations[language];

  return (
    <footer className="bg-gradient-to-br from-amber-900 to-amber-950 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Coffee className="w-8 h-8 text-amber-300" />
            <h3 className="text-2xl font-bold">Indonesian Coffee</h3>
          </div>

          {/* Tagline */}
          <p className="text-amber-200 text-center">{t.tagline}</p>

          {/* Divider */}
          <div className="w-24 h-px bg-amber-600 my-4"></div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-amber-100 text-sm">
              © {currentYear} Indonesian Coffee Export. {t.rights}
            </p>
            <p className="text-amber-300 text-sm">
              {t.madeWith} <span className="text-red-400">♥</span> {t.madeIn}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;