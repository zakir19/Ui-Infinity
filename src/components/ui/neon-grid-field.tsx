
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface NeonGridFieldProps {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const NeonGrid: React.FC<{ isFocused: boolean; hasText: boolean }> = ({ isFocused, hasText }) => {
  const gridRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.x = isFocused ? -0.3 : -0.1;
      gridRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
      if (hasText) {
        gridRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
      }
    }
  });

  const gridLines = [];
  const size = 2;
  const divisions = 10;
  
  for (let i = 0; i <= divisions; i++) {
    const x = (i / divisions - 0.5) * size;
    gridLines.push(
      <line key={`v${i}`}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([x, -size/2, 0, x, size/2, 0])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={isFocused ? "#33C3F0" : "#9b87f5"} />
      </line>
    );
    
    const y = (i / divisions - 0.5) * size;
    gridLines.push(
      <line key={`h${i}`}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([-size/2, y, 0, size/2, y, 0])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={isFocused ? "#33C3F0" : "#9b87f5"} />
      </line>
    );
  }

  return (
    <group ref={gridRef}>
      {gridLines}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[size, size]} />
        <meshStandardMaterial
          color={isFocused ? "#33C3F0" : "#9b87f5"}
          transparent
          opacity={0.1}
          emissive={isFocused ? "#33C3F0" : "#9b87f5"}
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
};

export const NeonGridField: React.FC<NeonGridFieldProps> = ({
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
      <label className="block text-sm font-medium text-neon-cyan mb-2">
        {label}
      </label>
      
      <div className="relative">
        <div className="absolute inset-0 h-24 -top-4">
          <Canvas camera={{ position: [0, 0, 2], fov: 45 }}>
            <ambientLight intensity={0.3} />
            <NeonGrid isFocused={focused} hasText={inputValue.length > 0} />
          </Canvas>
        </div>
        
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="relative z-10 w-full px-4 py-3 bg-black/50 border border-neon-cyan/30 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan/50 transition-all"
        />
      </div>
    </div>
  );
};
