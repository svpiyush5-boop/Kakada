export default function Footer() {
  return (
    <footer className="bg-kr-dark pt-[80px] px-5 md:px-10 pb-10 border-t border-kr-gold/10">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-12">
        <div>
          <h3 className="font-serif text-[28px] font-bold text-kr-cream mb-1">
            Kakada Ramprasad
          </h3>
          <div className="text-[12px] tracking-[3px] uppercase text-kr-gold mb-4">
            Since 1956
          </div>
          <p className="text-[14px] text-kr-text-muted leading-[1.7] max-w-[300px]">
            A perfect embodiment of tradition, emotion & celebration. Chennai's most loved sweet and savoury destination.
          </p>
        </div>
        
        <div>
          <h4 className="font-serif text-[16px] font-semibold text-kr-cream mb-5">Quick Links</h4>
          <a href="#heritage" className="block text-[14px] text-kr-text-muted mb-3 transition-colors duration-300 hover:text-kr-gold">Our Story</a>
          <a href="#specialties" className="block text-[14px] text-kr-text-muted mb-3 transition-colors duration-300 hover:text-kr-gold">Specialties</a>
          <a href="#menu" className="block text-[14px] text-kr-text-muted mb-3 transition-colors duration-300 hover:text-kr-gold">Menu</a>
          <a href="#locations" className="block text-[14px] text-kr-text-muted mb-3 transition-colors duration-300 hover:text-kr-gold">Locations</a>
        </div>

        <div>
          <h4 className="font-serif text-[16px] font-semibold text-kr-cream mb-5">Offerings</h4>
          <a href="#menu" className="block text-[14px] text-kr-text-muted mb-3 transition-colors duration-300 hover:text-kr-gold">Sweets</a>
          <a href="#menu" className="block text-[14px] text-kr-text-muted mb-3 transition-colors duration-300 hover:text-kr-gold">Chaats</a>
          <a href="#menu" className="block text-[14px] text-kr-text-muted mb-3 transition-colors duration-300 hover:text-kr-gold">Fine Dining</a>
          <a href="#menu" className="block text-[14px] text-kr-text-muted mb-3 transition-colors duration-300 hover:text-kr-gold">Catering</a>
        </div>

        <div>
          <h4 className="font-serif text-[16px] font-semibold text-kr-cream mb-5">Contact</h4>
          <a href="tel:+914425222222" className="block text-[14px] text-kr-text-muted mb-3 transition-colors duration-300 hover:text-kr-gold">+91 44 2522 2222</a>
          <a href="mailto:info@kakada.in" className="block text-[14px] text-kr-text-muted mb-3 transition-colors duration-300 hover:text-kr-gold">info@kakada.in</a>
          <a href="https://kakada.in" target="_blank" rel="noreferrer" className="block text-[14px] text-kr-text-muted mb-3 transition-colors duration-300 hover:text-kr-gold">kakada.in</a>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto mt-12 pt-6 border-t border-kr-gold/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-kr-text-muted text-center md:text-left">
        <span>&copy; {new Date().getFullYear()} Kakada Ramprasad. All rights reserved.</span>
        
        <div className="flex gap-4">
          <a 
            href="https://www.instagram.com/kakadaramprasad/" 
            target="_blank" 
            rel="noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 border border-kr-gold/15 rounded-full flex items-center justify-center text-[16px] transition-all duration-300 hover:bg-kr-gold/10 hover:border-kr-gold hover:-translate-y-1"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
          </a>
          <a 
            href="https://www.facebook.com/kakadaramprasad/" 
            target="_blank" 
            rel="noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 border border-kr-gold/15 rounded-full flex items-center justify-center text-[16px] transition-all duration-300 hover:bg-kr-gold/10 hover:border-kr-gold hover:-translate-y-1"
          >
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a 
            href="https://www.zomato.com/chennai/kakada-ramprasad-sowcarpet" 
            target="_blank" 
            rel="noreferrer"
            aria-label="Zomato"
            className="w-10 h-10 border border-kr-gold/15 rounded-full flex items-center justify-center text-[16px] transition-all duration-300 hover:bg-kr-gold/10 hover:border-kr-gold hover:-translate-y-1"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm4-4H9V9h6v4z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
