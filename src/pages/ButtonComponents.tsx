
import React from 'react';
import ButtonShowcase from '@/components/library/ButtonShowcase';

const ButtonComponents = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Button Components</h1>
          <p className="text-lg text-muted-foreground">
            A comprehensive collection of button components with various styles, sizes, and states.
            Built from scratch with modern design principles and fully customizable.
          </p>
        </div>
        
        <ButtonShowcase />
      </div>
    </div>
  );
};

export default ButtonComponents;
