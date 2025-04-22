import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FloatingNavMenu = () => {
  const navItems = [
    {
      label: "A&A",
      href: "https://www.divisioncero.com/features/actions",
      color: "#8BD450",
    }, // Verde menta suave (mantener)
    {
      label: "AIS",
      href: "https://www.divisioncero.com/features/security",
      color: "#FF6B6B",
    }, // Rojo coral (mantener)
    {
      label: "BCR",
      href: "https://www.divisioncero.com/features/packages",
      color: "#FFD166",
    }, // Amarillo ámbar (mantener)
    {
      label: "CCC",
      href: "https://www.divisioncero.com/features/codespaces",
      color: "#4ECDC4",
    }, // Turquesa (mantener)
    {
      label: "CEK",
      href: "https://www.divisioncero.com/features/copilot",
      color: "#8A9EFF",
    }, // Azul lavanda (mantener)
    {
      label: "DCS",
      href: "https://www.divisioncero.com/features/issues",
      color: "#F8A5C2",
    }, // Rosa claro (mantener)
    {
      label: "DSP",
      href: "https://www.divisioncero.com/features/discussions",
      color: "#9B59B6",
    }, // Púrpura más intenso (cambiar)
    {
      label: "GRC",
      href: "https://www.divisioncero.com/features/code-review",
      color: "#1ABC9C",
    }, // Verde azulado más oscuro (cambiar)
    {
      label: "HRS",
      href: "https://www.divisioncero.com/features/project-management",
      color: "#F39C12",
    }, // Naranja ámbar (cambiar)
    {
      label: "IAM",
      href: "https://www.divisioncero.com/pricing",
      color: "#E74C3C",
    }, // Rojo ladrillo (cambiar)
    {
      label: "IPY",
      href: "https://www.divisioncero.com/enterprise",
      color: "#3498DB",
    }, // Azul más intenso (cambiar)
    {
      label: "IVS",
      href: "https://www.divisioncero.com/team",
      color: "#2ECC71",
    }, // Verde esmeralda (cambiar)
    {
      label: "LOG",
      href: "https://www.divisioncero.com/about",
      color: "#8E44AD",
    }, // Púrpura oscuro (cambiar)
    {
      label: "SEF",
      href: "https://www.divisioncero.com/customer-stories",
      color: "#0073CF",
    }, // Azul acero (cambiar)
    {
      label: "STA",
      href: "https://www.divisioncero.com/readme",
      color: "#D35400",
    }, // Naranja quemado (cambiar)
    {
      label: "TVM",
      href: "https://www.divisioncero.com/topics",
      color: "#27AE60",
    }, // Verde bosque (cambiar)
    {
      label: "UEM",
      href: "https://www.divisioncero.com/trending",
      color: "#7D3C98",
    }, // Púrpura oscuro (cambiar)
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handlePrevious = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(navItems.length - 3, prev + 1));
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black border border-gray-700 z-50 w-full max-w-4xl">
      <nav className="flex items-center justify-between w-full">
        {/* Botón de navegación izquierdo (solo visible en móvil) */}
        <button
          onClick={handlePrevious}
          disabled={startIndex === 0}
          className="md:hidden flex items-center justify-center h-12 w-8 text-white bg-black hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Elementos de navegación con visibilidad responsive */}
        <div className="flex flex-1 overflow-hidden">
          {/* Versión móvil (3 items visibles) */}
          {navItems.slice(startIndex, startIndex + 3).map((item, index) => (
            <a
              key={`mobile-${index}`}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden flex items-center justify-center h-12 text-center flex-1 border-r border-gray-700 last:border-r-0 bg-black hover:bg-gray-900 transition-colors"
              style={{ color: item.color }}
            >
              <span className="font-bold">{item.label}</span>
            </a>
          ))}

          {/* Versión tablet (7 items visibles) */}
          {navItems.slice(0, 7).map((item, index) => (
            <a
              key={`tablet-${index}`}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex lg:hidden items-center justify-center h-12 text-center flex-1 border-r border-gray-700 last:border-r-0 bg-black hover:bg-gray-900 transition-colors"
              style={{ color: item.color }}
            >
              <span className="font-bold">{item.label}</span>
            </a>
          ))}

          {/* Versión desktop (todos los items) */}
          {navItems.map((item, index) => (
            <a
              key={`desktop-${index}`}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center justify-center h-12 text-center flex-1 border-r border-gray-700 last:border-r-0 bg-black hover:bg-gray-900 transition-colors"
              style={{ color: item.color }}
            >
              <span className="font-bold">{item.label}</span>
            </a>
          ))}
        </div>

        {/* Botón de navegación derecho (solo visible en móvil) */}
        <button
          onClick={handleNext}
          disabled={startIndex >= navItems.length - 3}
          className="md:hidden flex items-center justify-center h-12 w-8 text-white bg-black hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight size={16} />
        </button>
      </nav>
    </div>
  );
};

export default FloatingNavMenu;
