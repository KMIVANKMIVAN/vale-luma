import React from "react";

const ArbolNavidad = () => {
  // Array de copos y textos para generar múltiples elementos
  const snowflakes = Array.from({ length: 50 });
  const texts = Array.from({ length: 10 }, () => "Vale");

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-900 overflow-hidden">
      {/* Efecto de nevado */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {snowflakes.map((_, index) => (
          <div
            key={`snowflake-${index}`}
            className="absolute opacity-40 animate-snow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 3}s`,
              animationDelay: `${Math.random() * 3}s`,
              transform: `scale(${Math.random() * 0.8 + 0.5})`,
            }}
          >
            {/* Copo de nieve SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-6 h-6"
            >
              <path d="M12 2a1 1 0 0 1 1 1v2.535l1.418-.818a1 1 0 1 1 1 1.732L13 7.732v3.928l3.866-2.231 1.601-.924-1.132-.653a1 1 0 0 1 1-1.732l1.13.653.63-1.092a1 1 0 0 1 1.732 1L19.53 9.13l1.418.818A1 1 0 0 1 20.53 12l-1.418-.818-3.866 2.23 3.866 2.231 1.418-.818a1 1 0 0 1 1 1.732l-1.418.818.63 1.092a1 1 0 0 1-1.732 1l-.63-1.092-1.13.653a1 1 0 1 1-1-1.732l1.13-.653-1.601-.924L13 12.34v3.928l1.418-.818a1 1 0 1 1 1 1.732l-1.418.818V21a1 1 0 0 1-2 0v-2.535l-1.418.818a1 1 0 1 1-1-1.732L11 16.268v-3.928L7.134 14.57l-1.601.924 1.132.653a1 1 0 0 1-1 1.732l-1.13-.653-.63 1.092a1 1 0 1 1-1.732-1l.63-1.092-1.418-.818A1 1 0 0 1 3.47 12l1.418.818 3.866-2.231-3.866-2.23-1.418.818a1 1 0 0 1-1-1.732l1.418-.818-.63-1.092a1 1 0 1 1 1.732-1l.63 1.092 1.13-.653a1 1 0 0 1 1 1.732l-1.13.653 1.601.924L11 11.66V7.732L9.582 8.55a1 1 0 1 1-1-1.732l1.418-.818V3a1 1 0 0 1 1-1h2z" />
            </svg>
          </div>
        ))}

        {/* Efecto de nevado para los textos */}
        {texts.map((text, index) => (
          <div
            key={`text-${index}`}
            className="absolute opacity-40 text-white text-lg animate-snow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 7 + 3}s`,
              animationDelay: `${Math.random() * 3}s`,
              transform: `scale(${Math.random() * 0.8 + 0.5})`,
            }}
          >
            {text}
          </div>
        ))}
      </div>

      {/* Árbol de Navidad */}
      <div className="text-center">
        {/* Imagen del árbol */}
        <img
          src="/rb_5778.png"
          alt="Árbol de Navidad"
          className="w-80 h-auto mx-auto"
        />
        <div className="flex flex-col mt-4 space-y-2 mx-4">
          <p className="text-white md:text-lg lg:text-xl">¡Feliz Navidad!</p>
          <p className="text-white md:text-lg lg:text-xl pt-4">
            Hola Vale, tal vez no leas este mensaje pero almenos lo intenté.
            Vivo a diario con el dolor que te hice sentir, pero no se compara en
            nada a ese gran dolor que sientes...
          </p>
          <p className="text-white md:text-lg lg:text-xl pt-4">
            No puedo darte los abrazos que necesitavas no pude secar tus
            lagrimas que brotaban no pude concolar ese corazon destrosado...
          </p>
          <p className="text-white md:text-lg lg:text-xl pt-4">
            Si tan solo hubiera eliminado mi egoismo y mi covardia, si tan solo
            hubiera sido mas valiente y sincero, si tan solo hubiera sido mas
            mas listo me hubiera dado cuenta de lo que tenia...
          </p>
          <p className="text-white md:text-lg lg:text-xl pt-4">
            Una gran mujer, una gran amiga, una gran compañera, una gran persona
            que me dio todo sin pedir nada a cambio, una persona que me dio todo
            y yo le di la espalda...
          </p>
          <p className="text-white md:text-lg lg:text-xl pt-4">
            Si tengo que cargar con este dolor toda mi vida lo hare, si tengo
            que perderte para siempre lo... no se que haria
          </p>
          <p className="text-white md:text-lg lg:text-xl pt-4">
            Duele mucho... a un no estando a mi lado segui adelante, a un voy en
            el proceso ya falta poco... te tube precente en todo momento y por
            ello segui adelante...
          </p>
          <p className="text-white md:text-lg lg:text-xl pt-4">
            Es ironico que una persona te puede destruir en un segundo como lo
            hice con tigo... o como tambien te puede levantar para seguir
            adelante como lo haces con migo gracias Estela Valeria Luque Mamani
          </p>
          <p className="text-white md:text-lg lg:text-xl pt-4">
            A un no bajo las esperanzas de que algun dia vuelvas a mi lado, a un
            no me rindo... no perdere las esperanzas "¡Feliz Navidad Vale!"
          </p>
          <p className="text-white md:text-lg lg:text-xl py-4">
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArbolNavidad;
