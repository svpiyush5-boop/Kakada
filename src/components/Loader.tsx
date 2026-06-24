import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, visibility: 'hidden' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="fixed inset-0 bg-kr-dark z-[10000] flex flex-col items-center justify-center"
        >
          <div className="w-[120px] h-[80px] relative mb-[30px]">
            <div className="w-[120px] h-[72px] bg-kr-red rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(196,30,58,0.4)] animate-logoPulse">
              <span className="font-serif font-extrabold text-[22px] text-white tracking-[3px]">
                KAKADA
              </span>
            </div>
          </div>
          
          <div className="w-[200px] h-[2px] bg-kr-gold/20 rounded-sm overflow-hidden">
            <div className="h-full bg-gradient-to-r from-kr-gold to-kr-gold-light rounded-sm animate-loadBar" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-4 font-garamond text-sm tracking-[4px] uppercase text-kr-text-muted"
          >
            Since 1956
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
