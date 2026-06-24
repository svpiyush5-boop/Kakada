import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    setIsPointerFine(window.matchMedia('(pointer: fine)').matches);
    
    if (window.matchMedia('(pointer: fine)').matches) {
      const updatePosition = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
      
      window.addEventListener('mousemove', updatePosition);
      return () => window.removeEventListener('mousemove', updatePosition);
    }
  }, []);

  if (!isPointerFine) return null;

  return (
    <div 
      className="fixed w-[300px] h-[300px] rounded-full pointer-events-none z-[9999] transition-opacity duration-300 hidden md:block"
      style={{
        background: 'radial-gradient(circle, rgba(212,168,83,0.06) 0%, transparent 70%)',
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    />
  );
}
