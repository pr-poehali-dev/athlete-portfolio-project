import React from "react";
import Icon from "@/components/ui/icon";

const Training = () => {
  return (
    <section id="training" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
          Тренировки
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <Icon name="MapPin" className="text-blue-600 mr-3" size={28} />
              <h3 className="font-montserrat text-2xl font-bold text-slate-800">
                Место тренировок
              </h3>
            </div>
            <div className="space-y-4">
              <p className="font-open-sans text-slate-600 leading-relaxed">
                Тренировки проходят в специализированном зале тяжелой атлетики с
                профессиональным оборудованием
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-open-sans text-slate-700">
                  📍 Спортивный комплекс "Олимп"
                  <br />
                  🕐 6 дней в неделю
                  <br />⏰ 2-3 часа в день
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <Icon name="User" className="text-blue-600 mr-3" size={28} />
              <h3 className="font-montserrat text-2xl font-bold text-slate-800">
                Тренер
              </h3>
            </div>
            <div className="space-y-4">
              <div className="text-center">
                <h4 className="font-montserrat text-xl font-semibold text-slate-800 mb-2">
                  Олег Комдев
                </h4>
                <p className="font-open-sans text-slate-600 leading-relaxed">
                  Мастер спорта международного класса по тяжелой атлетике. Опыт
                  тренерской работы более 15 лет.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg text-center">
                <p className="font-open-sans text-sm text-slate-600">
                  "Дисциплина и постоянство — ключ к успеху в тяжелой атлетике"
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="font-montserrat text-2xl font-bold text-slate-800 mb-6 text-center">
            Тренировочная программа
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Icon
                name="Zap"
                className="text-blue-600 mx-auto mb-2"
                size={32}
              />
              <h4 className="font-montserrat font-semibold text-slate-800 mb-2">
                Рывок
              </h4>
              <p className="font-open-sans text-sm text-slate-600">
                Техника и силовая работа
              </p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Icon
                name="TrendingUp"
                className="text-blue-600 mx-auto mb-2"
                size={32}
              />
              <h4 className="font-montserrat font-semibold text-slate-800 mb-2">
                Толчок
              </h4>
              <p className="font-open-sans text-sm text-slate-600">
                Координация и мощность
              </p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Icon
                name="Activity"
                className="text-blue-600 mx-auto mb-2"
                size={32}
              />
              <h4 className="font-montserrat font-semibold text-slate-800 mb-2">
                ОФП
              </h4>
              <p className="font-open-sans text-sm text-slate-600">
                Общая физическая подготовка
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
