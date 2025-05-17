
import React, { useRef, forwardRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  tiltAmount?: number;
  glareAmount?: number;
  scale?: number;
}

const TiltCard = forwardRef<HTMLDivElement, TiltCardProps>(
  ({ children, className = '', maxTilt = 20, tiltAmount = 10, glareAmount = 0.15, scale = 1.05 }, ref) => {
    const cardRef = useRef<HTMLDivElement>(null);
    
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const glarePosition = useMotionValue('50% 50%'); // Changed to store position as string
    const glareOpacity = useMotionValue(0);
    
    const transformRotateX = useTransform(rotateX, [-maxTilt, maxTilt], [-tiltAmount, tiltAmount]);
    const transformRotateY = useTransform(rotateY, [-maxTilt, maxTilt], [-tiltAmount, tiltAmount]);

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
      
      // Calculate glare position and store it as a string
      const glareX = ((e.clientX - rect.left) / rect.width) * 100;
      const glareY = ((e.clientY - rect.top) / rect.height) * 100;
      glarePosition.set(`${glareX}% ${glareY}%`);
      glareOpacity.set(glareAmount);
    };

    const handleMouseEnter = () => {
      if (cardRef.current) {
        cardRef.current.style.transition = 'transform 0.1s ease-out';
      }
    };

    const handleMouseLeave = () => {
      rotateX.set(0);
      rotateY.set(0);
      glareOpacity.set(0);
      
      if (cardRef.current) {
        cardRef.current.style.transition = 'transform 0.5s ease-out';
      }
    };

    return (
      <motion.div
        ref={cardRef}
        className={`neo-card relative overflow-hidden rounded-xl ${className}`}
        style={{
          transformStyle: "preserve-3d",
          transform: `perspective(1000px) rotateX(${transformRotateX.get()}deg) rotateY(${transformRotateY.get()}deg)`,
          transition: "transform 0.1s ease-out",
        }}
        whileHover={{ scale: scale }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Glare effect */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glarePosition.get()}, rgba(255,255,255,${glareOpacity.get()}), transparent 70%)`,
            transition: "opacity 0.1s ease-out",
          }}
        />
        
        {/* Content container */}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    );
  }
);

TiltCard.displayName = "TiltCard";

export default TiltCard;
