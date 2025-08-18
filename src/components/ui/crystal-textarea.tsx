
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CrystalTextAreaProps {
  label: string;
  placeholder: string;
  rows?: number;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const CrystalStructure: React.FC<{ isFocused: boolean; hasText: boolean }> = ({ isFocused, hasText }) => {
  const crystalRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (crystalRef.current) {
      crystalRef.current.rotation.y += 0.005;
      crystalRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
      if (hasText) {
        crystalRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05;
      }
    }
  });

  const crystalColor = isFocused ? "#D946EF" : "#9b87f5";

  return (
    <group ref={crystalRef}>
      {/* Main crystal */}
      <mesh>
        <octahedronGeometry args={[1]} />
        <meshStandardMaterial
          color={crystalColor}
          transparent
          opacity={0.4}
          emissive={crystalColor}
          emissiveIntensity={isFocused ? 0.4 : 0.2}
        />
      </mesh>
      
      {/* Side crystals */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i / 4) * Math.PI * 2;
        return (
          <mesh 
            key={i}
            position={[Math.cos(angle) * 0.7, 0, Math.sin(angle) * 0.7]}
            scale={[0.3, 0.3, 0.3]}
          >
            <octahedronGeometry args={[1]} />
            <meshStandardMaterial
              color={crystalColor}
              transparent
              opacity={0.3}
              emissive={crystalColor}
              emissiveIntensity={0.2}
            />
          </mesh>
        );
      })}
    </group>
  );
};

export const CrystalTextArea: React.FC<CrystalTextAreaProps> = ({
  label,
  placeholder,
  rows = 4,
  value,
  onChange,
  className = ''
}) => {
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value || '');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative h-32 mb-4">
        <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[2, 2, 2]} intensity={0.8} color={focused ? "#D946EF" : "#9b87f5"} />
          <CrystalStructure isFocused={focused} hasText={inputValue.length > 0} />
        </Canvas>
        
        <div className={`absolute top-4 left-0 right-0 text-center transition-opacity duration-300 ${focused ? 'opacity-100' : 'opacity-60'}`}>
          <label className="text-sm font-medium text-neon-pink">
            {label}
          </label>
        </div>
      </div>
      
      <textarea
        placeholder={placeholder}
        rows={rows}
        value={inputValue}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full px-4 py-3 bg-black/30 border border-neon-pink/30 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-pink focus:border-neon-pink/50 transition-all resize-none"
      />
    </div>
  );
};
