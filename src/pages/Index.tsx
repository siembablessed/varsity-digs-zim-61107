import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SearchAndFilters from '@/components/SearchAndFilters';
import PropertyGrid from '@/components/PropertyGrid';
import TrustBadges from '@/components/TrustBadges';
import Testimonials from '@/components/Testimonials';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import CallToAction from '@/components/CallToAction';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
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
      <TrustBadges />
      <Testimonials />
      <HowItWorks />
      <Features />
      <CallToAction />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
