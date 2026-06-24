import { Reveal } from './Reveal';

export default function SweetGallery() {
  return (
    <section className="py-[100px] md:py-[150px] px-5 md:px-10 bg-[#080403] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-kr-gold/20 to-transparent" />
      
      {/* Subtle background element */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-kr-gold/5 blur-[150px] rounded-full pointer-events-none translate-y-1/2 translate-x-1/3" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center max-w-[700px] mx-auto mb-[60px] md:mb-[80px]">
          <Reveal>
            <div className="text-[12px] tracking-[6px] uppercase text-kr-gold mb-6 flex justify-center items-center gap-4 before:content-[''] before:w-[40px] before:h-[1px] before:bg-kr-gold after:content-[''] after:w-[40px] after:h-[1px] after:bg-kr-gold">
              Sweet Indulgence
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="font-serif text-[clamp(36px,5.5vw,64px)] font-bold leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-kr-cream via-white to-kr-gold-light mb-6">
              A Symphony of Sweets
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="font-garamond text-[clamp(18px,2.2vw,22px)] text-kr-text-light/80 leading-[1.8]">
              Delight in our handcrafted delicacies, where every piece is a work of edible art, 
              drenched in tradition and crowned with elegance.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-10">
          <Reveal delay={0.2}>
            <div className="relative rounded-[20px] overflow-hidden group w-[280px] md:w-[300px] aspect-[3/4] shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-kr-gold/15">
              <div className="absolute inset-0 bg-gradient-to-t from-kr-dark/95 via-kr-dark/20 to-transparent opacity-90 z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-70" />
              <img 
                src="https://iili.io/Cu7ugYQ.png" 
                alt="Festive Boxes" 
                loading="lazy"
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[2s] ease-out"
              />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20">
                <h3 className="font-serif text-[22px] md:text-[26px] font-semibold text-kr-cream mb-1.5 transition-transform duration-500 group-hover:-translate-y-2">
                  Festive Boxes
                </h3>
                <p className="text-[10px] tracking-[3px] uppercase text-kr-gold transition-transform duration-500 group-hover:-translate-y-2">
                  Perfect Gifting
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="relative rounded-[20px] overflow-hidden group w-[280px] md:w-[300px] aspect-[3/4] lg:translate-y-8 shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-kr-gold/15">
              <div className="absolute inset-0 bg-gradient-to-t from-kr-dark/95 via-kr-dark/20 to-transparent opacity-90 z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-70" />
              <img 
                src="https://iili.io/Cu7urvV.png" 
                alt="Signature Sweets" 
                loading="lazy"
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[2s] ease-out"
              />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20">
                <h3 className="font-serif text-[22px] md:text-[26px] font-semibold text-kr-cream mb-1.5 transition-transform duration-500 group-hover:-translate-y-2">
                  Royal Indulgence
                </h3>
                <p className="text-[10px] tracking-[3px] uppercase text-kr-gold transition-transform duration-500 group-hover:-translate-y-2">
                  Handcrafted Perfection
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="relative rounded-[20px] overflow-hidden group w-[280px] md:w-[300px] aspect-[3/4] lg:translate-y-16 shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-kr-gold/15">
              <div className="absolute inset-0 bg-gradient-to-t from-kr-dark/95 via-kr-dark/20 to-transparent opacity-90 z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-70" />
              <img 
                src="https://iili.io/Cu7uvEb.png" 
                alt="Traditional Delicacies" 
                loading="lazy"
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[2s] ease-out"
              />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20">
                <h3 className="font-serif text-[22px] md:text-[26px] font-semibold text-kr-cream mb-1.5 transition-transform duration-500 group-hover:-translate-y-2">
                  Golden Bites
                </h3>
                <p className="text-[10px] tracking-[3px] uppercase text-kr-gold transition-transform duration-500 group-hover:-translate-y-2">
                  Rich & Authentic
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
