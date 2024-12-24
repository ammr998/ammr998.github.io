'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const cursorSize = 20;
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  }

  const manageMouseMove = (e: MouseEvent) => {
    setIsVisible(true);
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  }

  useEffect(() => {
    // Get initial cursor position
    const initialX = window.mouseX || window.innerWidth / 2;
    const initialY = window.mouseY || window.innerHeight / 2;
    mouse.x.set(initialX - cursorSize / 2);
    mouse.y.set(initialY - cursorSize / 2);

    window.addEventListener("mousemove", manageMouseMove);
    
    // Store cursor position on page change
    const handleBeforeUnload = () => {
      window.mouseX = mouse.x.get();
      window.mouseY = mouse.y.get();
    };
    
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    }
  }, []);

  return (
    <motion.div 
      animate={{
        width: isHovered ? cursorSize * 1.5 : cursorSize,
        height: isHovered ? cursorSize * 1.5 : cursorSize,
        opacity: isVisible ? (isHovered ? 0.9 : 0.8) : 0,
      }}
      transition={{ duration: 0.2 }}
      style={{
        left: smoothMouse.x, 
        top: smoothMouse.y,
        position: 'fixed',
        backgroundColor: 'white',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        border: '2px solid rgba(255, 255, 255, 0.8)',
        transform: 'translate(-50%, -50%)'
      }} 
    />
  );
} 