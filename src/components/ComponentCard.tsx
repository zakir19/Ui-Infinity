
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CopyButton } from '@/components/ui/copy-button';

interface ComponentCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  previewElement?: React.ReactNode;
  tag?: string;
  linkTo?: string;
  code?: string;
}

const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  description,
  imageUrl,
  previewElement,
  tag = 'New',
  linkTo,
  code
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const CardContent = () => (
    <>
      {/* Tag */}
      {tag && (
        <div className="absolute top-4 right-4 bg-neon-purple/80 py-1 px-2 rounded-full text-xs font-medium">
          {tag}
        </div>
      )}
      
      {/* Copy Code Button - Show if code is provided */}
      {code && <CopyButton code={code} />}
      
      {/* Preview area */}
      <div className="h-48 flex items-center justify-center p-4 bg-black/20">
        {previewElement || (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black/40 to-black/20 rounded-md">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={title} 
                className="object-cover w-full h-full rounded-md" 
              />
            ) : (
              <span className="text-gray-400">Preview</span>
            )}
          </div>
        )}
      </div>
      
      {/* Content area */}
      <div className="p-6">
        <h3 className="text-white text-lg font-medium">{title}</h3>
        <p className="text-gray-400 mt-2 text-sm">{description}</p>
        
        {/* Action area */}
        <div className="mt-4 flex justify-between items-center">
          <button className="text-neon-purple hover:text-neon-cyan text-sm font-medium transition-colors">
            View Details
          </button>
          <div className="text-gray-500 text-xs">
            v1.0.0
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div 
      className="glass-morphism rounded-xl overflow-hidden relative group transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered 
          ? '0 20px 30px -10px rgba(155, 135, 245, 0.15)'
          : '0 10px 20px -10px rgba(0, 0, 0, 0.2)'
      }}
    >
      {linkTo ? (
        <Link to={linkTo} className="block h-full">
          <CardContent />
        </Link>
      ) : (
        <CardContent />
      )}
    </div>
  );
};

export default ComponentCard;
