import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = ({ language, setLanguage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const translations = {
    en: {
      home: 'Home',
      products: 'Products',
      about: 'About',
      contact: 'Contact'
    },
    id: {
      home: 'Beranda',
      products: 'Produk',
      about: 'Tentang',
      contact: 'Kontak'
    }
  };

  const t = translations[language];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent">
              Indonesian Coffee
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-amber-800 transition-colors duration-200 font-medium"
            >
              {t.home}
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-amber-800 transition-colors duration-200 font-medium"
            >
              {t.products}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-amber-800 transition-colors duration-200 font-medium"
            >
              {t.about}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-amber-800 transition-colors duration-200 font-medium"
            >
              {t.contact}
            </button>
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
              className="border-amber-200 hover:bg-amber-50 hover:border-amber-300 transition-colors duration-200"
            >
              <Globe className="w-4 h-4 mr-2" />
              {language === 'en' ? 'ID' : 'EN'}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-amber-800 transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-3 border-t border-amber-100">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-amber-800 hover:bg-amber-50 rounded-lg transition-all duration-200 font-medium"
            >
              {t.home}
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-amber-800 hover:bg-amber-50 rounded-lg transition-all duration-200 font-medium"
            >
              {t.products}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-amber-800 hover:bg-amber-50 rounded-lg transition-all duration-200 font-medium"
            >
              {t.about}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-amber-800 hover:bg-amber-50 rounded-lg transition-all duration-200 font-medium"
            >
              {t.contact}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;