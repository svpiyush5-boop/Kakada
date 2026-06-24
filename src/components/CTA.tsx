import { Reveal } from './Reveal';

export default function CTA() {
  return (
    <section 
      id="contact" 
      className="bg-gradient-to-br from-kr-red-deep via-kr-red to-[#d4503a] text-center py-[80px] md:py-[100px] px-5 md:px-10 relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(212,168,83,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)'
        }}
      />
      
      <div className="relative z-10">
        <Reveal>
          <h2 className="font-serif text-[clamp(32px,5vw,52px)] font-semibold text-white mb-4">
            Craving Something <em className="font-medium italic text-kr-gold-light">Sweet?</em>
          </h2>
        </Reveal>
        
        <Reveal delay={0.15}>
          <p className="font-garamond text-[clamp(16px,2vw,20px)] text-white/80 mb-10 max-w-[500px] mx-auto">
            Order your favourite Kakada dishes online and get them delivered fresh to your doorstep.
          </p>
        </Reveal>
        
        <Reveal delay={0.3}>
          <a 
            href="https://www.zomato.com/chennai/kakada-ramprasad-sowcarpet/order" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block px-12 py-4 bg-white text-kr-red text-[13px] font-bold tracking-[2px] uppercase rounded-full transition-all duration-400 shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
          >
            Order on Zomato
          </a>
        </Reveal>
      </div>
    </section>
  );
}
