import { Reveal } from './Reveal';

export default function Specialties() {
  return (
    <section id="specialties" className="py-[80px] md:py-[120px] px-5 md:px-10 relative bg-kr-dark">
      <div className="text-center max-w-[700px] mx-auto mb-[72px]">
        <Reveal>
          <div className="text-[11px] tracking-[5px] uppercase text-kr-gold mb-4 flex justify-center items-center gap-3">
            What We're Famous For
          </div>
        </Reveal>
        
        <Reveal delay={0.15}>
          <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-semibold leading-[1.15] text-kr-cream mb-5">
            Our Specialties
          </h2>
        </Reveal>
        
        <Reveal delay={0.3}>
          <p className="font-garamond text-[clamp(16px,2vw,20px)] text-kr-text-muted leading-[1.7] max-w-[560px] mx-auto">
            From golden jalebis to royal ghewar — every creation is a celebration of purity, flavour, and generations of craftsmanship.
          </p>
        </Reveal>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        
        <Reveal>
          <div className="relative rounded-[20px] overflow-hidden aspect-[3/4] cursor-pointer group">
            <div className="w-full h-full bg-gradient-to-br from-[#2a1a0e] via-[#4a2a14] to-[#1a0a04] flex items-center justify-center">
               <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="35" stroke="rgba(212,168,83,0.2)" strokeWidth="1"/><text x="40" y="45" textAnchor="middle" fill="rgba(212,168,83,0.5)" fontFamily="Playfair Display" fontSize="28">N</text></svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-kr-dark/90 flex flex-col justify-end p-7 transition-all duration-400 group-hover:from-20% group-hover:to-kr-dark/95">
              <div className="font-serif text-[18px] md:text-[22px] font-semibold text-kr-cream mb-1.5 transition-transform duration-600 group-hover:-translate-y-1">
                Tandoori Breads
              </div>
              <div className="text-[13px] text-kr-gold tracking-[1px] transition-transform duration-600 group-hover:-translate-y-1">
                Fresh from the Tandoor
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative rounded-[20px] overflow-hidden aspect-[3/4] cursor-pointer group">
            <div className="w-full h-full bg-gradient-to-br from-[#3a2a08] via-[#5a4a18] to-[#2a1a04] flex items-center justify-center">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="35" stroke="rgba(212,168,83,0.2)" strokeWidth="1"/><text x="40" y="45" textAnchor="middle" fill="rgba(212,168,83,0.5)" fontFamily="Playfair Display" fontSize="28">G</text></svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-kr-dark/90 flex flex-col justify-end p-7 transition-all duration-400 group-hover:from-20% group-hover:to-kr-dark/95">
              <div className="font-serif text-[18px] md:text-[22px] font-semibold text-kr-cream mb-1.5 transition-transform duration-600 group-hover:-translate-y-1">
                Ghewar
              </div>
              <div className="text-[13px] text-kr-gold tracking-[1px] transition-transform duration-600 group-hover:-translate-y-1">
                Rajasthani Delicacy
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="relative rounded-[20px] overflow-hidden aspect-[3/4] cursor-pointer group">
            <div className="w-full h-full bg-gradient-to-br from-[#2a1a18] via-[#3a2520] to-[#1a0808] flex items-center justify-center">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="35" stroke="rgba(212,168,83,0.2)" strokeWidth="1"/><text x="40" y="45" textAnchor="middle" fill="rgba(212,168,83,0.5)" fontFamily="Playfair Display" fontSize="28">L</text></svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-kr-dark/90 flex flex-col justify-end p-7 transition-all duration-400 group-hover:from-20% group-hover:to-kr-dark/95">
              <div className="font-serif text-[18px] md:text-[22px] font-semibold text-kr-cream mb-1.5 transition-transform duration-600 group-hover:-translate-y-1">
                Motichoor Laddoo
              </div>
              <div className="text-[13px] text-kr-gold tracking-[1px] transition-transform duration-600 group-hover:-translate-y-1">
                Pure Ghee Sweets
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="relative rounded-[20px] overflow-hidden aspect-[3/4] cursor-pointer group">
            <div className="w-full h-full bg-gradient-to-br from-[#1a1a18] via-[#2a2520] to-[#141010] flex items-center justify-center">
               <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="35" stroke="rgba(212,168,83,0.2)" strokeWidth="1"/><text x="40" y="45" textAnchor="middle" fill="rgba(212,168,83,0.5)" fontFamily="Playfair Display" fontSize="28">C</text></svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-kr-dark/90 flex flex-col justify-end p-7 transition-all duration-400 group-hover:from-20% group-hover:to-kr-dark/95">
              <div className="font-serif text-[18px] md:text-[22px] font-semibold text-kr-cream mb-1.5 transition-transform duration-600 group-hover:-translate-y-1">
                Chaats
              </div>
              <div className="text-[13px] text-kr-gold tracking-[1px] transition-transform duration-600 group-hover:-translate-y-1">
                Street Food Royalty
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
