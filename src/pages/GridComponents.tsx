
import React from 'react';
import { CopyButton } from '@/components/ui/copy-button';
import Footer from '@/components/Footer';

const GridComponents = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Grid Components
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Modern grid layout systems for your UI.
          </p>
        </div>
      </div>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400 text-lg">
            Grid components coming soon. Check back for updates!
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GridComponents;
