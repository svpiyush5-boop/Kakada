export default function Marquee() {
  const items = [
    "Ghee Jalebi", "Badam Milk", "Rasmalai", "Ghewar", "Raj Kachori", 
    "Paneer Tikka", "Tawa Pulao", "Moti Pak", "Dahi Papdi", "Pani Puri", "Gulab Jamun"
  ];

  return (
    <div className="bg-kr-red py-[14px] overflow-hidden whitespace-nowrap">
      <div className="flex w-max animate-marquee">
        {/* Double the items for seamless loop */}
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="shrink-0 font-garamond text-[15px] font-medium tracking-[3px] uppercase text-white/90 px-[30px]">
              {item}
            </span>
            <span className="text-kr-gold-light px-2">♦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
