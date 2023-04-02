import React from 'react';
import AboutSection from './components/AboutSection';
import AdvantagesSection from './components/AdvantagesSection';
import CardSection from './components/CardSection';
import DiscoverSection from './components/DiscoverSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TransferSection from './components/TransfersSection';
import TryNowSection from './components/TryNowSection';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AdvantagesSection />
      <AboutSection />
      <CardSection />
      <TransferSection />
      <DiscoverSection />
      <TryNowSection />
      <Footer />
    </>
  );
};

export default App;
