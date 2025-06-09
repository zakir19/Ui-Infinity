
import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Vector3 } from 'three';
import * as THREE from 'three';

interface NavigationItem {
  id: string;
  label: string;
  color: string;
  subItems?: { label: string; onClick?: () => void }[];
  onClick?: () => void;
}

interface QuantumPortalNavProps {
  items: NavigationItem[];
  className?: string;
}

const Polyhedron: React.FC<{
  item: NavigationItem;
  position: Vector3;
  onHover: (hovered: boolean) => void;
  onClick: () => void;
  isExpanded: boolean;
}> = ({ item, position, onHover, onClick, isExpanded }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Create icosahedron geometry
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(0.5, 0), []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;
      
      if (hovered || isExpanded) {
        const scale = 1.3 + Math.sin(state.clock.elapsedTime * 6) * 0.1;
        meshRef.current.scale.lerp(new Vector3(scale, scale, scale), 0.1);
      } else {
        meshRef.current.scale.lerp(new Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        geometry={geometry}
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
        <meshStandardMaterial
          color={item.color}
          transparent
          opacity={0.7}
          emissive={item.color}
          emissiveIntensity={hovered ? 0.4 : 0.2}
          wireframe={!isExpanded}
        />
      </mesh>
      
      {/* Portal ring effect */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.2, 0.05, 8, 32]} />
        <meshStandardMaterial
          color={item.color}
          transparent
          opacity={hovered ? 0.6 : 0.3}
          emissive={item.color}
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {(hovered || isExpanded) && (
        <Html>
          <div className="pointer-events-none">
            <div className="bg-black/90 backdrop-blur-md border border-cyan-400/40 rounded-lg px-4 py-2 text-cyan-400 text-sm font-medium transform -translate-x-1/2 -translate-y-12">
              <div className="text-center">{item.label}</div>
              {isExpanded && item.subItems && (
                <div className="mt-2 space-y-1">
                  {item.subItems.map((subItem, index) => (
                    <div 
                      key={index}
                      className="text-xs text-gray-300 hover:text-cyan-300 cursor-pointer transition-colors"
                      onClick={subItem.onClick}
                    >
                      {subItem.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Html>
      )}
    </group>
  );
};

const PortalField: React.FC<{
  items: NavigationItem[];
  expandedIndex: number;
  onPolyhedronHover: (index: number, hovered: boolean) => void;
  onPolyhedronClick: (index: number) => void;
}> = ({ items, expandedIndex, onPolyhedronHover, onPolyhedronClick }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.002;
    }
  });

  const positions = useMemo(() => {
    return items.map((_, index) => {
      const angle = (index / items.length) * Math.PI * 2;
      const radiusVariation = 2.5 + Math.sin(index) * 0.5;
      const x = Math.cos(angle) * radiusVariation;
      const y = Math.sin(angle) * radiusVariation;
      const z = Math.sin(angle * 3) * 0.8;
      return new Vector3(x, y, z);
    });
  }, [items.length]);

  return (
    <group ref={groupRef}>
      {items.map((item, index) => (
        <Polyhedron
          key={item.id}
          item={item}
          position={positions[index]}
          onHover={(hovered) => onPolyhedronHover(index, hovered)}
          onClick={() => onPolyhedronClick(index)}
          isExpanded={expandedIndex === index}
        />
      ))}
    </group>
  );
};

const PortalCore: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[0.6, 0.2, 64, 8]} />
      <meshStandardMaterial
        color="#06b6d4"
        transparent
        opacity={0.4}
        emissive="#06b6d4"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
};

export const QuantumPortalNav: React.FC<QuantumPortalNavProps> = ({
  items,
  className = ''
}) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handlePolyhedronClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
    if (items[index].onClick && expandedIndex !== index) {
      items[index].onClick();
    }
  };

  const handlePolyhedronHover = (index: number, hovered: boolean) => {
    setHoveredIndex(hovered ? index : -1);
  };

  return (
    <div className={`w-full h-64 ${className}`}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[5, 5, 5]} intensity={0.4} color="#06b6d4" />
        <pointLight position={[-5, -5, 5]} intensity={0.3} color="#9b87f5" />
        <pointLight position={[0, 0, -5]} intensity={0.2} color="#ec4899" />
        
        <PortalCore />
        <PortalField
          items={items}
          expandedIndex={expandedIndex}
          onPolyhedronHover={handlePolyhedronHover}
          onPolyhedronClick={handlePolyhedronClick}
        />
      </Canvas>
    </div>
  );
};
