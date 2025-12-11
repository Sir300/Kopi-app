import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { companyInfo } from '../mock';

const Contact = ({ language }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });

  const translations = {
    en: {
      title: 'Request Sample & Quotation',
      subtitle: 'Get green bean samples and pricing for your roasting profile',
      namePlaceholder: 'Your Name',
      companyPlaceholder: 'Roasting Company / Importer Name',
      emailPlaceholder: 'Email Address',
      phonePlaceholder: 'Phone Number',
      countryPlaceholder: 'Country',
      messagePlaceholder: 'Tell us about your green bean requirements: desired origin, grade, processing method, quantity, shipping destination, and any specific roasting profile needs...',
      sendButton: 'Request Sample & Quote',
      successTitle: 'Request Sent!',
      successDesc: 'We will send you samples and quotation within 24 hours.',
      contactInfo: 'Contact Information',
      whatsapp: 'WhatsApp'
    },
    id: {
      title: 'Minta Sampel & Penawaran',
      subtitle: 'Dapatkan sampel green bean dan harga untuk profil roasting Anda',
      namePlaceholder: 'Nama Anda',
      companyPlaceholder: 'Nama Perusahaan Roasting / Importir',
      emailPlaceholder: 'Alamat Email',
      phonePlaceholder: 'Nomor Telepon',
      countryPlaceholder: 'Negara',
      messagePlaceholder: 'Beritahu kami tentang kebutuhan green bean Anda: origin yang diinginkan, grade, metode proses, kuantitas, tujuan pengiriman, dan kebutuhan profil roasting spesifik...',
      sendButton: 'Minta Sampel & Penawaran',
      successTitle: 'Permintaan Terkirim!',
      successDesc: 'Kami akan mengirimkan sampel dan penawaran dalam 24 jam.',
      contactInfo: 'Informasi Kontak',
      whatsapp: 'WhatsApp'
    }
  };

  const t = translations[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission - in production this would send to backend
    console.log('Form submitted:', formData);
    
    toast({
      title: t.successTitle,
      description: t.successDesc,
    });

    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      country: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-amber-50 to-white">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder={t.namePlaceholder}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="company"
                    placeholder={t.companyPlaceholder}
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder={t.emailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder={t.phonePlaceholder}
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <Input
                  type="text"
                  name="country"
                  placeholder={t.countryPlaceholder}
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                />
              </div>

              <div className="mb-6">
                <Textarea
                  name="message"
                  placeholder={t.messagePlaceholder}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-amber-800 hover:bg-amber-900 text-white py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {t.sendButton}
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-amber-800 to-amber-900 rounded-2xl shadow-xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-8">{t.contactInfo}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-amber-100 text-sm mb-1">Email</p>
                    <a href={`mailto:${companyInfo.email}`} className="hover:text-amber-200 transition-colors duration-200">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-amber-100 text-sm mb-1">{t.whatsapp}</p>
                    <a href={`https://wa.me/${companyInfo.whatsapp}`} className="hover:text-amber-200 transition-colors duration-200">
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-amber-100 text-sm mb-1">Location</p>
                    <p>{companyInfo.address}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-amber-700">
                  <div className="flex items-center mb-4">
                    <MessageSquare className="w-6 h-6 mr-3" />
                    <p className="font-semibold">Quick Contact</p>
                  </div>
                  <a
                    href={`https://wa.me/${companyInfo.whatsapp}?text=Hello, I'm interested in your coffee products`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-white text-amber-800 py-3 px-6 rounded-lg font-semibold text-center hover:bg-amber-50 transition-colors duration-200 shadow-lg"
                  >
                    {t.whatsapp}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;