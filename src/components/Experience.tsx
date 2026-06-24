import { Reveal } from './Reveal';

export default function Experience() {
  const items = [
    {
      icon: "🍽️",
      title: "Street-Side Chaats",
      desc: "Ground floor magic — watch our chaat masters craft pani puri, sev puri, and raj kachori live, just like on the streets of Old Delhi."
    },
    {
      icon: "🛎️",
      title: "Fine Dining",
      desc: "Ascend to the first floor for a refined North Indian experience — rich curries, tandoori specialties, and royal thalis in elegant comfort."
    },
    {
      icon: "🎁",
      title: "Sweet Shop",
      desc: "Over 50 varieties of handcrafted sweets — from Bengali favourites to Rajasthani specialties, perfect for gifting and celebrations."
    }
  ];

  return (
    <section className="py-[80px] md:py-[120px] px-5 md:px-10 bg-kr-dark text-center">
      <div className="max-w-[700px] mx-auto mb-[72px]">
        <Reveal>
          <div className="text-[11px] tracking-[5px] uppercase text-kr-gold mb-4 flex justify-center items-center gap-3">
            The Kakada Experience
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-semibold leading-[1.15] text-kr-cream mb-5">
            More Than a Meal
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="font-garamond text-[clamp(16px,2vw,20px)] text-kr-text-muted leading-[1.7] max-w-[560px] mx-auto">
            Every visit is a celebration. Two floors, three generations of recipes, one unforgettable experience.
          </p>
        </Reveal>
      </div>

      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-12 mt-[72px]">
        {items.map((item, idx) => (
          <Reveal key={idx} delay={idx * 0.15}>
            <div className="px-5 py-8 md:p-10 border border-kr-gold/10 rounded-[20px] transition-all duration-400 hover:border-kr-gold/25 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
              <div className="text-[36px] mb-5">
                {item.icon}
              </div>
              <h3 className="font-serif text-[20px] font-semibold text-kr-cream mb-2.5">
                {item.title}
              </h3>
              <p className="text-[14px] text-kr-text-muted leading-[1.6]">
                {item.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
