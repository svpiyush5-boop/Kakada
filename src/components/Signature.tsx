import { Reveal } from './Reveal';

export default function Signature() {
  const items = [
    {
      icon: "🍬",
      title: "Ghee Jalebi",
      desc: "Our legendary crispy jalebi, soaked in pure sugar syrup and fried in desi ghee. The dish that started it all in 1956.",
      tag: "Since 1956"
    },
    {
      icon: "🥛",
      title: "Badam Milk",
      desc: "Rich, creamy, and loaded with real almonds — Chennai's favourite refreshing drink, served chilled perfection.",
      tag: "Bestseller"
    },
    {
      icon: "🍰",
      title: "Rasmalai",
      desc: "Soft chenna discs soaked in saffron-infused rabri, garnished with pistachios. Pure indulgence in every bite.",
      tag: "Must Try"
    },
    {
      icon: "🥗",
      title: "Raj Kachori",
      desc: "A crispy shell bursting with dahi, chutneys, sprouts, and sev — the king of all chaats, generously loaded.",
      tag: "Fan Favourite"
    },
    {
      icon: "🍱",
      title: "North Indian Thali",
      desc: "A royal spread of dal, paneer, sabzi, raita, rotis, and dessert. The complete Kakada experience on one plate.",
      tag: "Premium"
    },
    {
      icon: "🍩",
      title: "Ghewar",
      desc: "The stunning Rajasthani disc-shaped sweet, topped with silver varq, pistachios, and rose petals. Festival royalty.",
      tag: "Seasonal"
    }
  ];

  return (
    <section id="menu" className="py-[80px] md:py-[120px] pb-[80px] bg-kr-dark-warm overflow-hidden">
      <div className="max-w-[1200px] mx-auto mb-[60px] px-5 md:px-10">
        <Reveal>
          <div className="text-[11px] tracking-[5px] uppercase text-kr-gold mb-4 flex items-center gap-3 before:content-[''] before:w-[30px] before:h-[1px] before:bg-kr-gold">
            Curated Favourites
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-semibold leading-[1.15] text-kr-cream">
            Signature Creations
          </h2>
        </Reveal>
      </div>

      <div className="flex gap-8 px-5 md:px-10 overflow-x-auto snap-x snap-mandatory scrollbar-hide [-webkit-overflow-scrolling:touch]">
        {items.map((item, idx) => (
          <div 
            key={idx}
            className="shrink-0 w-[280px] md:w-[320px] snap-start relative rounded-[20px] overflow-hidden bg-[#fff8f008] border border-kr-gold/10 p-6 md:p-8 transition-all duration-400 hover:border-kr-gold/20 hover:bg-[#fff8f010] hover:-translate-y-1.5"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-kr-red/15 to-kr-gold/15 rounded-2xl flex items-center justify-center text-[28px] mb-5">
              {item.icon}
            </div>
            <h3 className="font-serif text-[22px] font-semibold text-kr-cream mb-2.5">
              {item.title}
            </h3>
            <p className="text-[14px] text-kr-text-muted leading-[1.6]">
              {item.desc}
            </p>
            <span className="inline-block mt-4 px-3.5 py-1.5 bg-kr-red/10 rounded-full text-[11px] font-semibold tracking-[1px] uppercase text-kr-red">
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
