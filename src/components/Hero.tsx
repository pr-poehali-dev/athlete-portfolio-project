import React from "react";

const Hero = () => {
  return (
    <section
      id="main"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-4"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="font-montserrat text-5xl md:text-7xl font-bold text-slate-800 mb-6 animate-fade-in">
            Руслан <span className="text-blue-600">Алексеев</span>
          </h1>
          <p className="font-open-sans text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
            Тяжелоатлет, студент Колледжа олимпийского резерва
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#about"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Узнать больше
            </a>
            <a
              href="#results"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Результаты
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <img
              src="https://cdn.poehali.dev/files/052ba494-440b-4bad-bc6a-67438d5d49b4.jpg"
              alt="Руслан Алексеев - тяжелоатлет"
              className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium shadow-lg">
              🏋️‍♂️140 кг
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
