import React, { useState } from 'react';
import './App.css';
import { Toaster } from './components/ui/sonner';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <div className="App">
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <Products language={language} />
      <About language={language} />
      <Contact language={language} />
      <Footer language={language} />
      <Toaster />
    </div>
  );
}

export default App;