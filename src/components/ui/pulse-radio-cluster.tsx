
import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface RadioOption {
  value: string;
  label: string;
}

interface PulseRadioClusterProps {
  label: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const RadioNode: React.FC<{ 
  position: [number, number, number];
  isSelected: boolean;
  nodeIndex: number;
  onNodeClick: (index: number) => void;
}> = ({ position, isSelected, nodeIndex, onNodeClick }) => {
  const nodeRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (nodeRef.current) {
      const scale = isSelected 
        ? 1.2 + Math.sin(state.clock.elapsedTime * 4) * 0.2
        : 1;
      nodeRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh 
      ref={nodeRef} 
      position={position}
      onClick={() => onNodeClick(nodeIndex)}
    >
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshStandardMaterial
        color={isSelected ? "#33C3F0" : "#9b87f5"}
        emissive={isSelected ? "#33C3F0" : "#9b87f5"}
        emissiveIntensity={isSelected ? 0.6 : 0.3}
      />
    </mesh>
  );
};

const ConnectionLines: React.FC<{ selectedIndex: number; positions: [number, number, number][] }> = ({ selectedIndex, positions }) => {
  const lineGeometry = useMemo(() => {
    if (selectedIndex === -1) return null;
    
    const vertices = [];
    const selectedPos = positions[selectedIndex];
    
    positions.forEach((pos, index) => {
      if (index !== selectedIndex) {
        vertices.push(...selectedPos, ...pos);
      }
    });
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    return geometry;
  }, [selectedIndex, positions]);

  if (!lineGeometry) return null;

  return (
    <lineSegments geometry={lineGeometry}>
      <lineBasicMaterial color="#33C3F0" opacity={0.6} transparent />
    </lineSegments>
  );
};

export const PulseRadioCluster: React.FC<PulseRadioClusterProps> = ({
  label,
  options,
  value,
  onChange,
  className = ''
}) => {
  const [selectedValue, setSelectedValue] = useState(value || '');
  
  const selectedIndex = options.findIndex(opt => opt.value === selectedValue);
  
  const positions: [number, number, number][] = useMemo(() => {
    return options.map((_, index) => {
      const angle = (index / options.length) * Math.PI * 2;
      const radius = 1.2;
      return [
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        0
      ];
    });
  }, [options.length]);

  const handleNodeClick = (nodeIndex: number) => {
    const optionValue = options[nodeIndex].value;
    setSelectedValue(optionValue);
    onChange?.(optionValue);
  };

  const handleRadioChange = (optionValue: string) => {
    setSelectedValue(optionValue);
    onChange?.(optionValue);
  };

  return (
    <div className={`${className}`}>
      <label className="block text-sm font-medium text-neon-cyan mb-4">
        {label}
      </label>
      
      <div className="relative h-64 mb-4">
        <Canvas 
          camera={{ position: [0, 0, 4], fov: 45 }}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[2, 2, 2]} intensity={0.8} color="#33C3F0" />
          
          <ConnectionLines selectedIndex={selectedIndex} positions={positions} />
          
          {options.map((option, index) => (
            <RadioNode
              key={option.value}
              position={positions[index]}
              isSelected={selectedValue === option.value}
              nodeIndex={index}
              onNodeClick={handleNodeClick}
            />
          ))}
        </Canvas>
      </div>
      
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              type="radio"
              id={option.value}
              name="radio-cluster"
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => handleRadioChange(option.value)}
              className="w-4 h-4 text-neon-cyan focus:ring-neon-cyan bg-black/20 border-neon-cyan/30"
            />
            <label htmlFor={option.value} className="ml-2 text-sm text-gray-300">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
