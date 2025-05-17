
import React from 'react';
import ComponentCard from '@/components/ComponentCard';
import { ComponentData } from '@/data/componentsData';

interface ComponentsGridProps {
  components: ComponentData[];
}

const ComponentsGrid: React.FC<ComponentsGridProps> = ({ components }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {components.map((component, index) => (
        <div key={index} className="animate-on-scroll opacity-0" style={{ animationDelay: `${index * 0.1}s` }}>
          <ComponentCard {...component} />
        </div>
      ))}
    </div>
  );
};

export default ComponentsGrid;
