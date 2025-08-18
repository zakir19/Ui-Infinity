
import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Text, Html } from '@react-three/drei';
import { Vector3 } from 'three';
import * as THREE from 'three';

interface NavigationItem {
  id: string;
  label: string;
  color: string;
  onClick?: () => void;
}

interface HoloSphereNavProps {
  items: NavigationItem[];
  radius?: number;
  coreColor?: string;
  className?: string;
}

const NavigationNode: React.FC<{
  item: NavigationItem;
  position: Vector3;
  isSelected: boolean;
  onHover: (hovered: boolean) => void;
  onClick: () => void;
}> = ({ item, position, isSelected, onHover, onClick }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      
      // Pulse effect when hovered
      if (hovered) {
        const scale = 1 + Math.sin(state.clock.elapsedTime * 8) * 0.1;
        meshRef.current.scale.setScalar(scale);
      } else {
        meshRef.current.scale.lerp(new Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => {
          setHovered(true);
          onHover(true);
        }}
        onPointerOut={() => {
          setHovered(false);
          onHover(false);
        }}
        onClick={onClick}
      >
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial
          color={item.color}
          transparent
          opacity={0.8}
          emissive={item.color}
          emissiveIntensity={hovered ? 0.3 : 0.1}
        />
      </mesh>
      
      {hovered && (
        <Html>
          <div className="pointer-events-none">
            <div className="bg-black/80 backdrop-blur-sm border border-neon-purple/30 rounded-lg px-3 py-1 text-neon-purple text-sm font-medium transform -translate-x-1/2 -translate-y-8">
              {item.label}
            </div>
          </div>
        </Html>
      )}
    </group>
  );
};

const OrbitingNodes: React.FC<{
  items: NavigationItem[];
  radius: number;
  selectedIndex: number;
  onNodeHover: (index: number, hovered: boolean) => void;
  onNodeClick: (index: number) => void;
}> = ({ items, radius, selectedIndex, onNodeHover, onNodeClick }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  const positions = useMemo(() => {
    return items.map((_, index) => {
      const angle = (index / items.length) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = Math.sin(angle * 2) * 0.5; // Add some vertical variation
      return new Vector3(x, y, z);
    });
  }, [items.length, radius]);

  return (
    <group ref={groupRef}>
      {items.map((item, index) => (
        <NavigationNode
          key={item.id}
          item={item}
          position={positions[index]}
          isSelected={selectedIndex === index}
          onHover={(hovered) => onNodeHover(index, hovered)}
          onClick={() => onNodeClick(index)}
        />
      ))}
    </group>
  );
};

const CoreSphere: React.FC<{ color: string }> = ({ color }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.3}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

export const HoloSphereNav: React.FC<HoloSphereNavProps> = ({
  items,
  radius = 3,
  coreColor = '#9b87f5',
  className = ''
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleNodeClick = (index: number) => {
    setSelectedIndex(index);
    if (items[index].onClick) {
      items[index].onClick();
    }
  };

  const handleNodeHover = (index: number, hovered: boolean) => {
    setHoveredIndex(hovered ? index : -1);
  };

  return (
    <div className={`w-full h-64 ${className}`}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color={coreColor} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#06b6d4" />
        
        <CoreSphere color={coreColor} />
        <OrbitingNodes
          items={items}
          radius={radius}
          selectedIndex={selectedIndex}
          onNodeHover={handleNodeHover}
          onNodeClick={handleNodeClick}
        />
      </Canvas>
    </div>
  );
};
