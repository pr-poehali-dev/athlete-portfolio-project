import React from "react";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
          Обо мне
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Icon
                  name="GraduationCap"
                  className="text-blue-600 mr-3"
                  size={24}
                />
                <h3 className="font-montserrat text-xl font-semibold text-slate-800">
                  Образование
                </h3>
              </div>
              <p className="font-open-sans text-slate-600 leading-relaxed">
                Студент Колледжа олимпийского резерва по специальности
                "Физическая культура"
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Icon name="Target" className="text-blue-600 mr-3" size={24} />
                <h3 className="font-montserrat text-xl font-semibold text-slate-800">
                  Специализация
                </h3>
              </div>
              <p className="font-open-sans text-slate-600 leading-relaxed">
                Тяжелая атлетика — олимпийский вид спорта, включающий в себя
                выполнение упражнений с отягощениями. Основные движения: рывок и
                толчок.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="font-montserrat text-2xl font-bold text-slate-800 mb-6">
              Достижения
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-open-sans text-slate-600">
                  Весовая категория
                </span>
                <span className="font-semibold text-slate-800">61 кг</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-open-sans text-slate-600">
                  Лучший результат
                </span>
                <span className="font-semibold text-blue-600 text-xl">
                  140 кг
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-open-sans text-slate-600">
                  Место на соревнованиях
                </span>
                <span className="font-semibold text-slate-800">2 место 🥈</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
