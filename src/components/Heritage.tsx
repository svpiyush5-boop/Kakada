import { Reveal } from './Reveal';
import { StatCounter } from './StatCounter';

export default function Heritage() {
  return (
    <section id="heritage" className="py-[100px] md:py-[150px] px-5 md:px-10 relative bg-[#0d0705] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-kr-red-deep/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-kr-gold/5 blur-[120px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-12 md:gap-[100px] items-center relative z-10">
        
        <Reveal>
          <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden aspect-[9/16] max-h-[500px] md:max-h-[700px] max-w-[340px] md:max-w-none mx-auto shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-kr-gold/20 group">
            <div className="absolute inset-0 border border-kr-gold/10 rounded-[24px] md:rounded-[32px] pointer-events-none z-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10 pointer-events-none" />
            <iframe 
              src="https://player.vimeo.com/video/1204176280?background=1&autoplay=1&loop=1&byline=0&title=0" 
              className="absolute top-1/2 left-1/2 w-[130%] h-[130%] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-[1.02] transition-transform duration-[3s] group-hover:scale-110"
              frameBorder="0" 
              allow="autoplay; fullscreen"
            ></iframe>
          </div>
        </Reveal>

        <div className="relative">
          <Reveal className="absolute -top-10 -right-10 z-0 pointer-events-none hidden md:block">
            <div className="font-serif text-[clamp(100px,12vw,180px)] font-bold text-kr-gold/5 leading-none">
              1956
            </div>
          </Reveal>
          
          <div className="relative z-10">
            <Reveal>
              <div className="text-[12px] tracking-[6px] uppercase text-kr-gold mb-6 flex items-center gap-4 before:content-[''] before:w-[40px] before:h-[1px] before:bg-kr-gold after:content-[''] after:w-[40px] after:h-[1px] after:bg-kr-gold md:after:hidden">
                Our Heritage
              </div>
            </Reveal>
            
            <Reveal delay={0.15}>
              <h2 className="font-serif text-[clamp(36px,5.5vw,64px)] font-bold leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-kr-cream via-white to-kr-gold-light mb-8">
                A Legacy of <br />
                <em className="italic text-kr-gold font-medium">Flavour & Love</em>
              </h2>
            </Reveal>
            
            <Reveal delay={0.3}>
              <p className="font-garamond text-[clamp(18px,2.2vw,22px)] text-kr-text-light/90 leading-[1.8] max-w-[600px] mb-6">
                <span className="text-kr-gold text-[32px] leading-none float-left mr-2 mt-1">68</span> years since the classic Kakada Jalebi was first fried in the quaint corners of Mint Street. What began in 1956 as a humble sweet shop is now a household name serving up Chennai's most chatpata chaat, scrumptious sweets & deliciously fine dishes.
              </p>
            </Reveal>
            
            <Reveal delay={0.45}>
              <p className="font-garamond text-[clamp(18px,2.2vw,22px)] text-kr-text-muted leading-[1.8] max-w-[600px]">
                With three branches across Chennai, Kakada Ramprasad is a perfect embodiment of tradition, emotion & celebration — making us your most loved culinary destination. Every bite carries the warmth of generations.
              </p>
            </Reveal>
            
            <Reveal delay={0.6}>
              <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 pt-10 border-t border-kr-gold/20">
                <div className="text-center md:text-left">
                  <StatCounter end={68} suffix="+" />
                  <div className="text-[11px] font-semibold tracking-[3px] uppercase text-kr-gold/80 mt-3">Years of Trust</div>
                </div>
                <div className="text-center md:text-left">
                  <StatCounter end={3} />
                  <div className="text-[11px] font-semibold tracking-[3px] uppercase text-kr-gold/80 mt-3">Grand Branches</div>
                </div>
                <div className="text-center md:text-left">
                  <StatCounter end={17} suffix="K+" />
                  <div className="text-[11px] font-semibold tracking-[3px] uppercase text-kr-gold/80 mt-3">Happy Reviews</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
