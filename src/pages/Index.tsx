
import React from 'react';
import HeroSection from '@/components/Hero/HeroSection';
import FormSection from '@/components/ColectUserInfo/FormSection';
// import Logo from '@/components/Hero/Logo';
import Footer from '@/components/Footer/Footer';
import ProductInfoSection from '@/components/ProductInfo/ProductInfoSection';
import Testimonials from '@/components/Testimonials/Testimonials';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* <Logo /> */}
      <HeroSection />
      <ProductInfoSection />
      <Testimonials />
      <FormSection />
      <Footer />
    </div>
  );
};

export default Index;
