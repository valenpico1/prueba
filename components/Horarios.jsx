import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const horarios = [
  {
    dias: "lunes a miercoles",
    horas: "9:00 a. m. – 8:00 p. m.",
  },
  {
    dias: "jueves",
    horas: "9:00 a. m. – 2:00 p. m"
  },
  {
    dias: "viernes a sábado",
    horas: "9:00 a. m. – 9:00 p. m.",
  },
  {
    dias: "Domingo y festivos",
    horas: "10:00 a. m. – 7:00 p. m.",
  },
];

const Horarios = () => {
  const diaActual = new Date().toLocaleDateString('es-ES', { weekday: 'long' });

  return (
    <section className="p-6 bg-white flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Horarios</h2>
      <p className="text-lg mb-6">
        Hoy {diaActual}: <span className="font-bold text-green-600">Abierto, cierra a las {horarios[0].horas.split('–')[1]}</span>
      </p>
      <div className="w-full md:w-1/2 space-y-4">
        {horarios.map((horario, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FaSun className="text-yellow-500" />
              <span className="text-lg font-semibold">{horario.dias}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>{horario.horas}</span>
              <FaMoon className="text-blue-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Horarios;
