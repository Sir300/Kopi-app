import React, { useState } from 'react';
import { MapPin, Award, Mountain, Package, Droplets, Scale, Eye, Thermometer } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { coffeeProducts } from '../mock';

const Products = ({ language }) => {
  const [filter, setFilter] = useState('all');

  const translations = {
    en: {
      title: 'Green Coffee Beans Catalog',
      subtitle: 'Premium unroasted Indonesian specialty green beans with complete quality specifications',
      filterAll: 'All Green Beans',
      filterArabica: 'Arabica',
      filterRobusta: 'Robusta',
      origin: 'Origin',
      grade: 'Grade',
      process: 'Process',
      flavor: 'Flavor Profile',
      altitude: 'Altitude',
      certification: 'Certification',
      minOrder: 'Min. Order',
      technicalSpecs: 'Technical Specifications',
      screenSize: 'Screen Size',
      defects: 'Defect Count',
      moisture: 'Moisture Content',
      waterActivity: 'Water Activity',
      density: 'Bean Density',
      beanColor: 'Bean Color',
      cupping: 'Cupping Score',
      packaging: 'Packaging'
    },
    id: {
      title: 'Katalog Green Bean Kopi',
      subtitle: 'Green bean kopi spesial Indonesia premium yang belum disangrai dengan spesifikasi kualitas lengkap',
      filterAll: 'Semua Green Bean',
      filterArabica: 'Arabika',
      filterRobusta: 'Robusta',
      origin: 'Asal',
      grade: 'Grade',
      process: 'Proses',
      flavor: 'Profil Rasa',
      altitude: 'Ketinggian',
      certification: 'Sertifikasi',
      minOrder: 'Min. Order',
      technicalSpecs: 'Spesifikasi Teknis',
      screenSize: 'Ukuran Screen',
      defects: 'Jumlah Cacat',
      moisture: 'Kadar Air',
      waterActivity: 'Aktivitas Air',
      density: 'Densitas Biji',
      beanColor: 'Warna Biji',
      cupping: 'Skor Cupping',
      packaging: 'Kemasan'
    }
  };

  const t = translations[language];

  const filteredProducts = filter === 'all' 
    ? coffeeProducts 
    : coffeeProducts.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              filter === 'all'
                ? 'bg-amber-800 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-amber-200 hover:border-amber-400'
            }`}
          >
            {t.filterAll}
          </button>
          <button
            onClick={() => setFilter('arabica')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              filter === 'arabica'
                ? 'bg-amber-800 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-amber-200 hover:border-amber-400'
            }`}
          >
            {t.filterArabica}
          </button>
          <button
            onClick={() => setFilter('robusta')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              filter === 'robusta'
                ? 'bg-amber-800 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-amber-200 hover:border-amber-400'
            }`}
          >
            {t.filterRobusta}
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-100 bg-white"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={language === 'en' ? product.name : product.nameId}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-amber-800 text-white">{product.grade}</Badge>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Product Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'en' ? product.name : product.nameId}
                </h3>

                {/* Basic Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-amber-700 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-500">{t.origin}</p>
                      <p className="text-gray-900 font-medium">
                        {language === 'en' ? product.origin : product.originId}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mountain className="w-5 h-5 text-amber-700 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-500">{t.altitude}</p>
                      <p className="text-gray-900 font-medium">{product.altitude}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-amber-700 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-500">{t.process}</p>
                      <p className="text-gray-900 font-medium">
                        {language === 'en' ? product.process : product.processId}
                      </p>
                    </div>
                  </div>
                </div>

                <Separator className="my-4 bg-amber-200" />

                {/* Technical Specifications Section */}
                <div className="bg-amber-50 rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-bold text-amber-900 mb-3 uppercase tracking-wide">
                    {t.technicalSpecs}
                  </h4>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.screenSize}:</span>
                      <span className="text-gray-900 font-medium text-right ml-2">
                        {language === 'en' ? product.screenSize : product.screenSizeId}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.defects}:</span>
                      <span className="text-gray-900 font-medium text-right ml-2">
                        {language === 'en' ? product.defects : product.defectsId}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.moisture}:</span>
                      <span className="text-gray-900 font-medium">{product.moisture}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.waterActivity}:</span>
                      <span className="text-gray-900 font-medium">{product.waterActivity}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.density}:</span>
                      <span className="text-gray-900 font-medium">{product.density}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.beanColor}:</span>
                      <span className="text-gray-900 font-medium text-right ml-2">
                        {language === 'en' ? product.beanColor : product.beanColorId}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2 border-t border-amber-200">
                      <span className="text-gray-600 font-semibold">{t.cupping}:</span>
                      <span className="text-amber-900 font-bold">
                        {language === 'en' ? product.cupping : product.cuppingId}
                      </span>
                    </div>
                  </div>
                </div>

                <Separator className="my-4 bg-amber-200" />

                {/* Flavor Profile */}
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">{t.flavor}</p>
                  <p className="text-gray-900 font-medium">
                    {language === 'en' ? product.flavor : product.flavorId}
                  </p>
                </div>

                {/* Certification */}
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">{t.certification}</p>
                  <p className="text-amber-800 font-medium text-sm">
                    {language === 'en' ? product.certification : product.certificationId}
                  </p>
                </div>

                <Separator className="my-4 bg-amber-200" />

                {/* Packaging & Min Order */}
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Package className="w-5 h-5 text-amber-700 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-500">{t.packaging}</p>
                      <p className="text-gray-900 font-medium">
                        {language === 'en' ? product.packaging : product.packagingId}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-amber-800 to-amber-900 text-white rounded-lg p-3">
                    <p className="text-xs uppercase tracking-wide mb-1">{t.minOrder}</p>
                    <p className="font-bold text-lg">
                      {language === 'en' ? product.minOrder : product.minOrderId}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;