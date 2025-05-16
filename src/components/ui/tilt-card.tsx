import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className, maxTilt = 20 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const transformStyle = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const maxXRotation = maxTilt;
    const maxYRotation = maxTilt;

    const calculatedRotateX = (mouseY / (rect.height / 2)) * maxXRotation;
    const calculatedRotateY = (mouseX / (rect.width / 2)) * maxYRotation;

    rotateX.set(calculatedRotateX);
    rotateY.set(-calculatedRotateY);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`glass-morphism rounded-xl p-6 shadow-lg ${className || ''}`}
      style={{
        transform: transformStyle,
        rotateX: typeof rotateX === 'object' ? `${rotateX.get()}deg` : rotateX,
        rotateY: typeof rotateY === 'object' ? `${rotateY.get()}deg` : rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
