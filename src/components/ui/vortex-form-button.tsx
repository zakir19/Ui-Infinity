
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface VortexFormButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const VortexEffect: React.FC<{ isHovered: boolean; isClicked: boolean }> = ({ isHovered, isClicked }) => {
  const vortexRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (vortexRef.current) {
      const speed = isHovered ? 0.1 : 0.02;
      vortexRef.current.rotation.z += speed;
      
      if (isClicked) {
        const scale = 1.5 + Math.sin(state.clock.elapsedTime * 10) * 0.3;
        vortexRef.current.scale.setScalar(scale);
      } else {
        vortexRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  const rings = [];
  for (let i = 0; i < 5; i++) {
    const radius = 0.3 + i * 0.2;
    const opacity = 0.8 - i * 0.15;
    
    rings.push(
      <mesh key={i} position={[0, 0, i * 0.1]}>
        <torusGeometry args={[radius, 0.02, 8, 32]} />
        <meshStandardMaterial
          color="#33C3F0"
          transparent
          opacity={opacity}
          emissive="#33C3F0"
          emissiveIntensity={isHovered ? 0.5 : 0.3}
        />
      </mesh>
    );
  }

  return (
    <group ref={vortexRef}>
      {rings}
      
      {/* Center sphere */}
      <mesh>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial
          color="#D946EF"
          emissive="#D946EF"
          emissiveIntensity={isClicked ? 1 : 0.5}
        />
      </mesh>
    </group>
  );
};

export const VortexFormButton: React.FC<VortexFormButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (disabled) return;
    
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500);
    onClick?.();
  };

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 h-16 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 2], fov: 45 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[1, 1, 1]} intensity={0.8} color="#33C3F0" />
          <VortexEffect isHovered={isHovered} isClicked={isClicked} />
        </Canvas>
      </div>
      
      <button
        type={type}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        disabled={disabled}
        className={`relative z-10 w-full px-6 py-3 bg-gradient-to-r from-neon-cyan/20 to-neon-pink/20 border border-neon-cyan/30 rounded-lg text-white font-medium transition-all duration-300 ${
          isHovered ? 'shadow-lg shadow-neon-cyan/20' : ''
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-neon-cyan/50'}`}
      >
        {children}
      </button>
    </div>
  );
};
