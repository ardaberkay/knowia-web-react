import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Anasayfa", path: "/" },
    { name: "Hakkımızda", path: "/about" },
    { name: "Rehber", path: "/guide" },
    { name: "İletişim", path: "/contact" },
  ];

  return (
    <header className="sticky top-6 z-[100]">
      <div className="max-w-7xl mx-auto px-4 md:px-0 relative">
        {/* ANA NAVBAR KARTINI SARMALAYAN YAPI */}
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
              {/* Logonun kendisi */}
              <img
                src={Logo}
                alt="Knowia"
                className="w-12 h-12 md:w-12.5 md:h-12.5 object-contain relative z-10 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,107,53,0.2)]"
              />

              {/* Hover anında logonun arkasında beliren turuncu aura */}
              <div className="absolute inset-0 bg-[#FF6B35] blur-[10px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
            </div>
            <span className="text-3xl font-semibold tracking-tighter bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent ">
              {" "}
              Knowia
            </span>
          </NavLink>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-10 select-none">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-semibold transition-all duration-300 relative py-1
                  ${
                    isActive
                      ? "text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
                      : "text-white/80 hover:text-[#FF6B35] hover:drop-shadow-[0_0_4px_rgba(255,107,53,0.6)]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {/* Hover Perde Efekti (Her zaman orada ama genişliği 0) */}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-[#FF6B35] shadow-[0_0_8px_#FF6B35] transition-all duration-500 ease-in-out
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    ></span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* MOBİL HAMBURGER BUTONU */}
          <button
            className="md:hidden p-2 text-white focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <div className="w-7 flex flex-col gap-1.5 items-end">
              <span
                className={`h-1 bg-white rounded-full transition-all duration-300 ${open ? "w-7 rotate-45 translate-y-2.5" : "w-7"}`}
              ></span>
              <span
                className={`h-1 bg-white rounded-full transition-all duration-300 ${open ? "opacity-0" : "w-5"}`}
              ></span>
              <span
                className={`h-1 bg-white rounded-full transition-all duration-300 ${open ? "w-7 -rotate-45 -translate-y-2.5" : "w-7"}`}
              ></span>
            </div>
          </button>
        </div>

        {/* MOBİL MENÜ - NAVBAR KARTININ ALTINA SÜZÜLEN AYRI BLOK */}
        <div
          className={`
          absolute left-4 right-4 top-2 md:hidden transition-all duration-500 ease-in-out z-[105]
          ${open ? "translate-y-20 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"}
        `}
        >
          <div className="bg-gradient-to-br from-[#F98A21] to-[#FF6B35] rounded-[32px] shadow-2xl overflow-hidden border border-white/20">
            <ul className="flex flex-col py-4">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-10 py-5 text-xl font-medium transition-all border-b border-white/10 last:border-none
                    ${isActive ? "bg-white/20 text-white" : "text-white/80"}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
