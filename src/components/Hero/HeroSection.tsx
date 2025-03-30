import React from 'react';
import FeaturePill from './FeaturePill';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[url(https://images.unsplash.com/photo-1625124376314-7a32b35db9e0?q=80&w=1775&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-cover">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/lovable-uploads/93e5c962-79e1-404d-b7dd-de46e7debc52.png')" }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-8 lg:px-44">
        <div className="max-w-2xl">
        <Logo />
          <FeaturePill text="Decisões agrícolas baseadas em dados" />
          
          <h1 className="text-white font-bold text-3xl sm:text-5xl mt-6 leading-tight">
            Acesse o assistente inteligente para produtividade agrícola
          </h1>
          
          <p className="text-gray-200 mt-6 text-sm sm:text-lg">
            Com dados imparciais, acessíveis e de alta qualidade. Você terá em 
            mãos uma ferramenta para validar tecnologias e embasar 
            recomendações com confiança e excelência.
          </p>
          
          <Button className="mt-8 bg-agro-lime hover:bg-agro-lime/90 text-agro-green font-semibold rounded-md sm:text-lg py-6 px-8">
            Teste nosso Chat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
