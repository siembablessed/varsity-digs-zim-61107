import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SearchAndFilters from '@/components/SearchAndFilters';
import PropertyGrid from '@/components/PropertyGrid';
import Features from '@/components/Features';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import LoadingStates from '@/components/LoadingStates';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SearchAndFilters />
      {isLoading ? <LoadingStates /> : <PropertyGrid />}
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
