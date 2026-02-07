import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation(); // i18n objesini ekledik

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dil değiştirme fonksiyonu
  const toggleLanguage = () => {
    const newLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
  };

  const links = [
    { name: t("navbar.home", { defaultValue: "Anasayfa" }), path: "/" },
    { name: t("navbar.about", { defaultValue: "Hakkımızda" }), path: "/about" },
    { name: t("navbar.guide", { defaultValue: "Rehber" }), path: "/guide" },
    { name: t("navbar.contact", { defaultValue: "İletişim" }), path: "/contact" },
  ];

  return (
    <header className="sticky top-6 z-[100]">
      <div className="max-w-7xl mx-auto px-4 md:px-0 lg:px-4 relative">
        <div
          className={`relative h-18 flex items-center justify-between px-8 md:px-12 transition-all duration-500 rounded-[40px] border border-white/20 shadow-xl z-[110]
          ${scrolled ? "bg-white/30 backdrop-blur-xl" : "bg-white/20 backdrop-blur-md"}
        `}
        >
          {/* LOGO & MARKA */}
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-1 group"
          >
            <div className="relative flex items-center justify-center">
              <img
                src={Logo}
                alt="Knowia"
                className="w-12 h-12 md:w-12.5 md:h-12.5 object-contain relative z-10 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,107,53,0.2)]"
              />
              <div className="absolute inset-0 bg-[#FF6B35] blur-[10px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
            </div>
            <span className="text-3xl font-semibold tracking-tighter bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent ">
              Knowia
            </span>
          </NavLink>

          {/* SAĞ TARAF: DESKTOP MENU & DİL BUTONU */}
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-10 select-none">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-semibold transition-all duration-300 relative py-1
                    ${isActive ? "text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]" : "text-white/80 hover:text-[#FF6B35]"}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <span className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-[#FF6B35] shadow-[0_0_8px_#FF6B35] transition-all duration-500 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* DİL DEĞİŞTİRME BUTONU (Masaüstü) */}
            <button
              onClick={toggleLanguage}
              className="hidden md:block px-3 py-1 rounded-full border border-white/20 bg-white/10 text-white text-xs font-bold hover:bg-[#FF6B35] transition-all duration-300 active:scale-95 cursor-pointer select-none"
            >
              {i18n.language.toUpperCase() === 'TR' ? 'EN' : 'TR'}
            </button>

            {/* MOBİL HAMBURGER BUTONU */}
            <button
              className="md:hidden p-2 text-white focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              <div className="w-7 flex flex-col gap-1.5 items-end">
                <span className={`h-1 bg-white rounded-full transition-all duration-300 ${open ? "w-7 rotate-45 translate-y-2.5" : "w-7"}`}></span>
                <span className={`h-1 bg-white rounded-full transition-all duration-300 ${open ? "opacity-0" : "w-5"}`}></span>
                <span className={`h-1 bg-white rounded-full transition-all duration-300 ${open ? "w-7 -rotate-45 -translate-y-2.5" : "w-7"}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* MOBİL MENÜ */}
        <div
          className={`absolute left-4 right-4 top-2 md:hidden transition-all duration-500 ease-in-out z-[105]
          ${open ? "translate-y-20 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"}
        `}
        >
          <div className="bg-gradient-to-br from-[#F98A21] to-[#FF6B35] rounded-[32px] shadow-2xl overflow-hidden border border-white/20">
            <ul className="flex flex-col py-2">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-10 py-4 text-xl font-medium transition-all border-b border-white/10 last:border-none
                    ${isActive ? "bg-white/20 text-white" : "text-white/80"}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              
              {/* MOBİL DİL BUTONU (En alta satır olarak eklendi) */}
              <li 
                onClick={() => { toggleLanguage(); setOpen(false); }}
                className="px-10 py-5 text-xl font-bold text-white cursor-pointer hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                🌐 {i18n.language.toUpperCase() === 'TR' ? 'English (EN)' : 'Türkçe (TR)'}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}