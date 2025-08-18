
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PrismSelectProps {
  label: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const PrismGeometry: React.FC<{ isOpen: boolean; selectedIndex: number }> = ({ isOpen, selectedIndex }) => {
  const prismRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (prismRef.current) {
      prismRef.current.rotation.y += isOpen ? 0.02 : 0.005;
      prismRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh ref={prismRef}>
      <cylinderGeometry args={[0.8, 0.8, 1.5, 6]} />
      <meshStandardMaterial
        color="#9b87f5"
        transparent
        opacity={0.6}
        emissive="#9b87f5"
        emissiveIntensity={isOpen ? 0.4 : 0.2}
        wireframe={!isOpen}
      />
    </mesh>
  );
};

export const PrismSelect: React.FC<PrismSelectProps> = ({
  label,
  options,
  value,
  onChange,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');

  const selectedIndex = options.findIndex(opt => opt.value === selectedValue);

  const handleChange = (newValue: string) => {
    setSelectedValue(newValue);
    onChange?.(newValue);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <label className="block text-sm font-medium text-neon-purple mb-2">
        {label}
      </label>
      
      <div className="relative">
        <div className="absolute inset-0 h-32 -top-2 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[2, 2, 2]} intensity={0.8} color="#9b87f5" />
            <PrismGeometry isOpen={isOpen} selectedIndex={selectedIndex} />
          </Canvas>
        </div>
        
        <div className="relative z-10">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-3 bg-black/50 border border-neon-purple/30 rounded-lg text-white text-left focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-neon-purple/50 transition-all"
          >
            {selectedValue ? options.find(opt => opt.value === selectedValue)?.label : 'Select an option'}
            <span className="float-right">▼</span>
          </button>
          
          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-black/90 border border-neon-purple/30 rounded-lg overflow-hidden z-20">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleChange(option.value)}
                  className="w-full px-4 py-3 text-white text-left hover:bg-neon-purple/20 transition-colors"
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
