
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface HoloToggleRingProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

const ToggleRing: React.FC<{ isChecked: boolean }> = ({ isChecked }) => {
  const ringRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.01;
    }
    
    if (sphereRef.current) {
      const targetX = isChecked ? 0.5 : -0.5;
      sphereRef.current.position.x = THREE.MathUtils.lerp(sphereRef.current.position.x, targetX, 0.1);
      
      if (isChecked) {
        sphereRef.current.position.y = Math.sin(state.clock.elapsedTime * 4) * 0.1;
      }
    }
  });

  return (
    <group>
      <mesh ref={ringRef}>
        <torusGeometry args={[1, 0.1, 8, 32]} />
        <meshStandardMaterial
          color={isChecked ? "#9b87f5" : "#666"}
          emissive={isChecked ? "#9b87f5" : "#333"}
          emissiveIntensity={isChecked ? 0.3 : 0.1}
        />
      </mesh>
      
      <mesh ref={sphereRef} position={[isChecked ? 0.5 : -0.5, 0, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial
          color={isChecked ? "#33C3F0" : "#888"}
          emissive={isChecked ? "#33C3F0" : "#444"}
          emissiveIntensity={isChecked ? 0.5 : 0.2}
        />
      </mesh>
    </group>
  );
};

export const HoloToggleRing: React.FC<HoloToggleRingProps> = ({
  label,
  checked = false,
  onChange,
  className = ''
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <div className="relative w-24 h-24 cursor-pointer" onClick={handleToggle}>
        <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[2, 2, 2]} intensity={0.8} color={isChecked ? "#9b87f5" : "#666"} />
          <ToggleRing isChecked={isChecked} />
        </Canvas>
      </div>
      
      <label 
        className="text-sm font-medium text-gray-300 cursor-pointer select-none"
        onClick={handleToggle}
      >
        {label}
      </label>
    </div>
  );
};
