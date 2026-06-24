import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          scrolled ? 'bg-kr-dark/95 backdrop-blur-[20px] py-[14px] px-5 md:px-10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : 'py-4 md:py-5 px-5 md:px-10'
        }`}
      >
        <a href="#" className="flex items-center gap-[14px]">
          <div className="w-[50px] h-[34px] bg-kr-red rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
            <span className="font-serif font-extrabold text-[10px] text-white tracking-[1.5px]">K</span>
          </div>
          <div className="font-serif text-[20px] font-semibold text-kr-cream">
            Kakada
            <small className="block font-sans text-[10px] font-normal tracking-[3px] uppercase text-kr-gold mt-[2px]">
              Ramprasad
            </small>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-9 items-center">
          <li><a href="#heritage" className="text-[13px] font-medium tracking-[1.5px] uppercase text-kr-text-muted transition-colors duration-300 relative hover:text-kr-gold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-kr-gold after:transition-all after:duration-300 hover:after:w-full">Our Story</a></li>
          <li><a href="#specialties" className="text-[13px] font-medium tracking-[1.5px] uppercase text-kr-text-muted transition-colors duration-300 relative hover:text-kr-gold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-kr-gold after:transition-all after:duration-300 hover:after:w-full">Specialties</a></li>
          <li><a href="#menu" className="text-[13px] font-medium tracking-[1.5px] uppercase text-kr-text-muted transition-colors duration-300 relative hover:text-kr-gold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-kr-gold after:transition-all after:duration-300 hover:after:w-full">Menu</a></li>
          <li><a href="#locations" className="text-[13px] font-medium tracking-[1.5px] uppercase text-kr-text-muted transition-colors duration-300 relative hover:text-kr-gold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-kr-gold after:transition-all after:duration-300 hover:after:w-full">Locations</a></li>
          <li>
            <a href="#contact" className="px-6 py-2.5 bg-kr-red rounded-full text-[12px] font-semibold tracking-[1.5px] text-white uppercase transition-all duration-300 shadow-[0_4px_15px_rgba(196,30,58,0.3)] hover:bg-kr-red-deep hover:-translate-y-0.5 hover:shadow-[0_6px_25px_rgba(196,30,58,0.4)]">
              Order Now
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div 
          className="md:hidden flex flex-col gap-[5px] cursor-pointer z-[1001] p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`w-[28px] h-[2px] bg-kr-cream rounded-sm transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-x-[5px] translate-y-[5px]' : ''}`}></span>
          <span className={`w-[28px] h-[2px] bg-kr-cream rounded-sm transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-[28px] h-[2px] bg-kr-cream rounded-sm transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 translate-x-[5px] -translate-y-[5px]' : ''}`}></span>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-kr-dark/98 backdrop-blur-[30px] z-[999] flex flex-col items-center justify-center gap-8 transition-all duration-400 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <a href="#heritage" onClick={closeMobile} className="font-serif text-2xl text-kr-cream transition-colors duration-300 hover:text-kr-gold">Our Story</a>
        <a href="#specialties" onClick={closeMobile} className="font-serif text-2xl text-kr-cream transition-colors duration-300 hover:text-kr-gold">Specialties</a>
        <a href="#menu" onClick={closeMobile} className="font-serif text-2xl text-kr-cream transition-colors duration-300 hover:text-kr-gold">Menu</a>
        <a href="#locations" onClick={closeMobile} className="font-serif text-2xl text-kr-cream transition-colors duration-300 hover:text-kr-gold">Locations</a>
        <a href="https://www.zomato.com/chennai/kakada-ramprasad-sowcarpet/order" target="_blank" rel="noreferrer" onClick={closeMobile} className="font-serif text-2xl text-kr-cream transition-colors duration-300 hover:text-kr-gold">Order Now</a>
      </div>
    </>
  );
}
