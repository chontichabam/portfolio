"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const menu = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // Scroll spy
  useEffect(() => {
    const sections = menu.map((m) => document.getElementById(m.id));

    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;

      sections.forEach((section, i) => {
        if (!section) return;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          setActive(menu[i].id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur border-b border-white/10 z-50">
      
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

      <div className="font-bold text-lg tracking-tight">
  Chonthicha
  <span className="text-[#38e8ff] drop-shadow-[0_0_8px_#38e8ff]">
    .dev
  </span>
</div>

        {/* Desktop */}
        <div className="hidden md:flex gap-6 text-sm text-gray-300">
          {menu.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`transition ${
                active === item.id
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className={`h-0.5 w-6 bg-white transition ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>

      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="px-4 pb-4 flex flex-col gap-4 text-gray-300">
          {menu.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`transition ${
                active === item.id ? "text-white" : "text-gray-400"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

    </nav>
  );
}

