import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Parallax effects
  const scale = useTransform(scrollY, [0, 1000], [1, 1.3]);
  const y = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <section id="hero" className="relative h-[100svh] min-h-[700px] flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ scale, y }}
      >
        <iframe 
          src="https://player.vimeo.com/video/1204179934?background=1&autoplay=1&loop=1&byline=0&title=0" 
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none filter contrast-125 brightness-110"
          frameBorder="0" 
          allow="autoplay; fullscreen"
        ></iframe>
      </motion.div>
      
      <div 
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(180deg, rgba(10,6,4,0.3) 0%, rgba(10,6,4,0.1) 30%, rgba(10,6,4,0.1) 50%, rgba(10,6,4,1) 80%, rgba(10,6,4,1) 100%)'
        }}
      />
      
      <div className="relative z-[2] text-center px-6 max-w-[900px] py-10">
        {/* Focused dark splash behind text to ensure readability */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0.3)_40%,_transparent_70%)] pointer-events-none -z-10 blur-xl" />

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="inline-flex items-center gap-2.5 px-6 py-2 border border-kr-gold/30 rounded-full mb-7 text-[12px] tracking-[4px] uppercase text-kr-gold bg-black/20 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 bg-kr-gold rounded-full shadow-[0_0_10px_rgba(212,168,83,0.8)]" />
          <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Est. 1956 &middot; Chennai</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-serif text-[clamp(42px,7vw,90px)] font-bold leading-[1.05] text-kr-cream mb-6 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
        >
          Where Tradition Meets<br /><em className="italic text-kr-gold font-medium drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">Taste</em>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-garamond text-[clamp(16px,2.5vw,22px)] text-white/90 leading-[1.6] max-w-[600px] mx-auto mb-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]"
        >
          Seven decades of crafting Chennai's most beloved sweets, chaats, and fine North Indian cuisine — served with love on Mint Street.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a 
            href="https://www.zomato.com/chennai/kakada-ramprasad-sowcarpet/order" 
            target="_blank" 
            rel="noreferrer"
            className="px-10 py-4 bg-kr-red text-white text-[13px] font-semibold tracking-[2px] uppercase rounded-full transition-all duration-400 shadow-[0_8px_30px_rgba(196,30,58,0.35)] hover:bg-kr-red-deep hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(196,30,58,0.45)] w-full max-w-[280px] sm:w-auto"
          >
            Order Online
          </a>
          <a 
            href="#specialties" 
            className="px-10 py-4 border border-kr-gold/40 text-kr-gold text-[13px] font-semibold tracking-[2px] uppercase rounded-full transition-all duration-400 hover:bg-kr-gold/10 hover:border-kr-gold hover:-translate-y-[3px] w-full max-w-[280px] sm:w-auto"
          >
            Explore Menu
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[3px] uppercase text-kr-text-muted">Scroll</span>
        <div className="w-[1px] bg-gradient-to-b from-kr-gold to-transparent animate-scrollPulse" />
      </motion.div>
    </section>
  );
}
