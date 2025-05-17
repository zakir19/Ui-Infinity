
import React, { useState, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { componentsData } from '@/data/componentsData';
import ComponentsHeader from './ComponentsHeader';
import ComponentsGrid from './ComponentsGrid';
import ShowMoreButton from './ShowMoreButton';

const ComponentsShowcase: React.FC = () => {
  // State for showing all components
  const [showAll, setShowAll] = useState(false);
  const componentsRef = useRef<HTMLDivElement>(null);
  
  // Use the custom scroll animation hook
  useScrollAnimation(componentsRef);

  // Determine how many components to show
  const previewCount = 8;
  const displayedComponents = showAll ? componentsData : componentsData.slice(0, previewCount);

  return (
    <section className="py-20 bg-black/30" id="components" ref={componentsRef}>
      <div className="container mx-auto px-4">
        <ComponentsHeader />
        
        <ComponentsGrid components={displayedComponents} />
        
        <div className="text-center mt-12">
          {/* Show the button only if there are more components than the preview count */}
          {componentsData.length > previewCount && (
            <ShowMoreButton 
              showAll={showAll} 
              onClick={() => setShowAll((prev) => !prev)} 
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ComponentsShowcase;
