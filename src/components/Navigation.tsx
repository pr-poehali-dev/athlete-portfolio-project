import React, { useState } from "react";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="font-montserrat text-xl font-bold text-slate-800">
            Руслан Алексеев
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("main")}
              className="font-open-sans text-slate-600 hover:text-blue-600 transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="font-open-sans text-slate-600 hover:text-blue-600 transition-colors"
            >
              Обо мне
            </button>
            <button
              onClick={() => scrollToSection("training")}
              className="font-open-sans text-slate-600 hover:text-blue-600 transition-colors"
            >
              Тренировки
            </button>
            <button
              onClick={() => scrollToSection("results")}
              className="font-open-sans text-slate-600 hover:text-blue-600 transition-colors"
            >
              Результаты
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            <Icon
              name={isOpen ? "X" : "Menu"}
              size={24}
              className="text-slate-600"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("main")}
                className="font-open-sans text-slate-600 hover:text-blue-600 transition-colors text-left"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="font-open-sans text-slate-600 hover:text-blue-600 transition-colors text-left"
              >
                Обо мне
              </button>
              <button
                onClick={() => scrollToSection("training")}
                className="font-open-sans text-slate-600 hover:text-blue-600 transition-colors text-left"
              >
                Тренировки
              </button>
              <button
                onClick={() => scrollToSection("results")}
                className="font-open-sans text-slate-600 hover:text-blue-600 transition-colors text-left"
              >
                Результаты
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
