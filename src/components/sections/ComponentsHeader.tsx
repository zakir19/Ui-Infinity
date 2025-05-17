
import React from 'react';

interface ComponentsHeaderProps {
  className?: string;
}

const ComponentsHeader: React.FC<ComponentsHeaderProps> = ({ className = '' }) => {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
        Component Library
      </h2>
      <p className="text-gray-400 text-lg">
        Explore our growing collection of beautiful, responsive UI components.
      </p>
    </div>
  );
};

export default ComponentsHeader;
