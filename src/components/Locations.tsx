import { Reveal } from './Reveal';

export default function Locations() {
  const locations = [
    {
      badge: "Flagship",
      title: "Sowcarpet",
      address: "348/343, Mint Street,\nSowcarpet, George Town,\nChennai – 600001",
      hours: "7:00 AM – 10:30 PM",
      link: "https://maps.app.goo.gl/9QvhkzGcGYXveEPv7"
    },
    {
      badge: "Branch",
      title: "Kilpauk",
      address: "32, Ormes Road,\nSylvan Lodge Colony,\nKilpauk, Chennai",
      hours: "7:00 AM – 10:30 PM",
      link: "https://maps.google.com/?q=Kakada+Ramprasad+Kilpauk+Chennai"
    },
    {
      badge: "Branch",
      title: "Phoenix Mall",
      address: "Phoenix MarketCity,\n142, Velachery Main Road,\nChennai – 600042",
      hours: "10:00 AM – 10:00 PM",
      link: "https://maps.google.com/?q=Kakada+Ramprasad+Phoenix+MarketCity+Chennai"
    }
  ];

  return (
    <section id="locations" className="py-[80px] md:py-[120px] px-5 md:px-10 bg-kr-dark-warm">
      <div className="text-center max-w-[700px] mx-auto mb-[72px]">
        <Reveal>
          <div className="text-[11px] tracking-[5px] uppercase text-kr-gold mb-4 flex justify-center items-center gap-3">
            Visit Us
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-semibold leading-[1.15] text-kr-cream mb-5">
            Our Locations
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="font-garamond text-[clamp(16px,2vw,20px)] text-kr-text-muted leading-[1.7] max-w-[560px] mx-auto">
            Three branches across Chennai, each serving the same legendary taste and warmth.
          </p>
        </Reveal>
      </div>

      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
        {locations.map((loc, idx) => (
          <Reveal key={idx} delay={idx * 0.15}>
            <div className="bg-[#fff8f008] border border-kr-gold/10 rounded-[20px] py-10 px-8 text-center transition-all duration-400 relative overflow-hidden hover:border-kr-gold/20 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-[60px] before:h-[3px] before:bg-kr-red before:rounded-b-[3px]">
              <span className="inline-block px-3 py-1 bg-kr-red/10 rounded-full text-[10px] font-semibold tracking-[2px] uppercase text-kr-red mb-4">
                {loc.badge}
              </span>
              <h3 className="font-serif text-[24px] font-semibold text-kr-cream mb-3">
                {loc.title}
              </h3>
              <p className="text-[14px] text-kr-text-muted leading-[1.7] mb-1.5 whitespace-pre-line">
                {loc.address}
              </p>
              <div className="inline-flex items-center gap-1.5 mt-3 text-[13px] text-kr-gold">
                <span className="w-2 h-2 bg-[#2ecc71] rounded-full animate-statusPulse"></span>
                {loc.hours}
              </div>
              <br />
              <a 
                href={loc.link} 
                target="_blank" 
                rel="noreferrer"
                className="inline-block mt-5 px-6 py-2.5 border border-kr-gold/30 rounded-full text-[12px] font-semibold tracking-[1.5px] uppercase text-kr-gold transition-all duration-300 hover:bg-kr-gold/10 hover:border-kr-gold"
              >
                Get Directions
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="max-w-[1100px] mx-auto mt-[60px] rounded-[20px] overflow-hidden border border-kr-gold/10 h-[350px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1!2d80.2789811!3d13.0903748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f56505dfc2d%3A0xe07ebfe628c3bf15!2sKakada%20Ramprasad%20Sweets%20and%20Chaats!5e0!3m2!1sen!2sin!4v1" 
            className="w-full h-full border-0 filter grayscale-[0.4] contrast-[1.1]"
            allowFullScreen 
            loading="lazy"
          ></iframe>
        </div>
      </Reveal>
    </section>
  );
}
