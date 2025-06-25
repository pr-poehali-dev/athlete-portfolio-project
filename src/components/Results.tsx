import React from "react";
import Icon from "@/components/ui/icon";

const Results = () => {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
          Результаты
        </h2>

        <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl shadow-lg mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-full mb-4">
              <Icon name="Trophy" className="mr-2" size={20} />
              <span className="font-montserrat font-semibold">
                Последнее достижение
              </span>
            </div>
            <h3 className="font-montserrat text-3xl font-bold text-slate-800 mb-2">
              2 место 🥈
            </h3>
            <p className="font-open-sans text-slate-600">
              Областные соревнования по тяжелой атлетике
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Icon
                name="Calendar"
                className="text-blue-600 mx-auto mb-3"
                size={24}
              />
              <p className="font-open-sans text-sm text-slate-600 mb-1">Дата</p>
              <p className="font-montserrat text-lg font-semibold text-slate-800">
                6 апреля 2024
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Icon
                name="Weight"
                className="text-blue-600 mx-auto mb-3"
                size={24}
              />
              <p className="font-open-sans text-sm text-slate-600 mb-1">
                Результат
              </p>
              <p className="font-montserrat text-2xl font-bold text-blue-600">
                140 кг
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Icon
                name="Users"
                className="text-blue-600 mx-auto mb-3"
                size={24}
              />
              <p className="font-open-sans text-sm text-slate-600 mb-1">
                Категория
              </p>
              <p className="font-montserrat text-lg font-semibold text-slate-800">
                61 кг
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-2xl">
          <h3 className="font-montserrat text-2xl font-bold text-slate-800 mb-6 text-center">
            Таблица достижений
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="font-montserrat font-semibold py-3 px-4 text-left rounded-tl-lg">
                    Дата
                  </th>
                  <th className="font-montserrat font-semibold py-3 px-4 text-center">
                    Соревнование
                  </th>
                  <th className="font-montserrat font-semibold py-3 px-4 text-center">
                    Результат
                  </th>
                  <th className="font-montserrat font-semibold py-3 px-4 text-center">
                    Категория
                  </th>
                  <th className="font-montserrat font-semibold py-3 px-4 text-center rounded-tr-lg">
                    Место
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 hover:bg-blue-50 transition-colors">
                  <td className="font-open-sans py-4 px-4 text-slate-700">
                    06.04.2024
                  </td>
                  <td className="font-open-sans py-4 px-4 text-center text-slate-700">
                    Областные соревнования по тяжелой атлетике
                  </td>
                  <td className="font-montserrat py-4 px-4 text-center text-blue-600 font-bold text-lg">
                    140 кг
                  </td>
                  <td className="font-open-sans py-4 px-4 text-center text-slate-700">
                    61 кг
                  </td>
                  <td className="font-open-sans py-4 px-4 text-center">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">
                      🥈 2 место
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
