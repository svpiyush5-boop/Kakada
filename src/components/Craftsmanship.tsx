import { Reveal } from './Reveal';

export default function Craftsmanship() {
  return (
    <section className="py-[100px] md:py-[150px] relative bg-kr-dark-warm overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-kr-red-deep/15 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <Reveal>
              <div className="text-[12px] tracking-[6px] uppercase text-kr-gold mb-6 flex items-center gap-4 before:content-[''] before:w-[40px] before:h-[1px] before:bg-kr-gold">
                The Art of Sweetness
              </div>
            </Reveal>
            
            <Reveal delay={0.15}>
              <h2 className="font-serif text-[clamp(40px,6vw,64px)] font-bold leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-kr-cream via-white to-kr-gold-light mb-8">
                Pure Ingredients, <br />
                <em className="font-medium italic text-kr-gold">Timeless Devotion.</em>
              </h2>
            </Reveal>
            
            <Reveal delay={0.3}>
              <p className="font-garamond text-[clamp(18px,2.2vw,22px)] text-kr-text-muted leading-[1.8] mb-6">
                Every morsel at Kakada Ramprasad is a testament to our unwavering commitment to quality. We use only the finest, purest ghee, hand-selected nuts, and authentic spices to recreate the magic of bygone eras.
              </p>
            </Reveal>

            <Reveal delay={0.45}>
              <p className="font-garamond text-[clamp(18px,2.2vw,22px)] text-kr-text-muted leading-[1.8] mb-10">
                It's not just food; it's a sensory journey that awakens memories, tantalizes the palate, and leaves a lingering sweetness that calls you back time and again. Let your senses indulge in pure bliss.
              </p>
            </Reveal>
            
            <Reveal delay={0.6}>
              <a href="#menu" className="inline-flex items-center gap-3 pb-2 border-b border-kr-gold text-[13px] font-semibold tracking-[2px] uppercase text-kr-gold hover:text-kr-gold-light hover:border-kr-gold-light transition-colors">
                Discover the Magic
                <span className="text-lg leading-none">→</span>
              </a>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal delay={0.2}>
              <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden aspect-[4/5] shadow-[0_40px_80px_rgba(0,0,0,0.5)] border border-kr-gold/20 group">
                <div className="absolute inset-0 bg-gradient-to-t from-kr-dark/80 via-transparent to-kr-dark/30 group-hover:opacity-50 transition-opacity duration-700 z-10 pointer-events-none" />
                <iframe 
                  src="https://player.vimeo.com/video/1204176279?background=1&autoplay=1&loop=1&byline=0&title=0" 
                  className="absolute top-1/2 left-1/2 w-[150%] h-[150%] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-100 group-hover:scale-105 transition-transform duration-[2s] ease-out"
                  frameBorder="0" 
                  allow="autoplay; fullscreen"
                ></iframe>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
