
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface GlowingOrbInputProps {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const GlowingOrb: React.FC<{ isFocused: boolean }> = ({ isFocused }) => {
  const orbRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.rotation.y += 0.01;
      orbRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
      const scale = 1 + (isFocused ? Math.sin(state.clock.elapsedTime * 3) * 0.1 : 0);
      orbRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={orbRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#9b87f5"
        transparent
        opacity={0.3}
        emissive="#9b87f5"
        emissiveIntensity={isFocused ? 0.5 : 0.2}
      />
    </mesh>
  );
};

export const GlowingOrbInput: React.FC<GlowingOrbInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  className = ''
}) => {
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative h-32 mb-4">
        <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[2, 2, 2]} intensity={0.8} color="#9b87f5" />
          <GlowingOrb isFocused={focused} />
        </Canvas>
        
        <div className={`absolute top-4 left-0 right-0 text-center transition-opacity duration-300 ${focused ? 'opacity-100' : 'opacity-60'}`}>
          <label className="text-sm font-medium text-neon-purple">
            {label}
          </label>
        </div>
      </div>
      
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full px-4 py-3 bg-black/30 border border-neon-purple/30 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-neon-purple/50 transition-all"
      />
    </div>
  );
};
