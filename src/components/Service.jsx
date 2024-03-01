import React from "react";
import Decor from "../pages/partials/Decor";

const Service = () => {
  return (
    <div class="py-10 sm:py-20" id="services" style={{ marginTop: "-8rem" }}>
      <Decor />
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos Services
          </p>

          <p class="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        {/* --------- */}
        <div class="grid grid-cols-1 gap-20 mt-12 sm:grid-cols-3 lg:mt-20   ">
          <a
            href="#"
            class="transition-all duration-1000 bg-white hover:bg-blue-500 hover:rounded-md  hover:shadow-xl m-2 p-1 relative z-40 group  "
          >
            <div class=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
            <div class="py-2 px-9 relative  ">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1831/1831949.png"
                alt=""
              />
              <h3 class="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                Développement Web
              </h3>
              <p class="mt-4 text-base text-gray-600 group-hover:text-white  ">
                Sites web sur mesure, adaptés à vos besoins, de la présence en
                ligne à l'e-commerce.
              </p>
            </div>
          </a>
          <a
            href="#"
            class="transition-all duration-1000 bg-white hover:bg-blue-500 hover:rounded-md  hover:shadow-xl m-2 p-1 relative z-40 group  "
          >
            <div class=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>

            <div class="py-5 px-9 relative  ">
              <img
                src="https://cdn-icons-png.flaticon.com/128/8644/8644418.png"
                alt=""
              />

              <h3 class="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                Marketing Digital
              </h3>
              <p class="mt-4 text-base text-gray-600 group-hover:text-white  ">
                Stratégies du référencement à la publicité en ligne, assurant
                visibilité et audience cible.
              </p>
            </div>
          </a>{" "}
          <a
            href="#"
            class="transition-all duration-1000  hover:bg-blue-500 hover:rounded-md  hover:shadow-xl m-2 p-1 relative z-40 group  "
          >
            <div class=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
            <div class="py-2 px-9 relative  ">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2779/2779775.png"
                alt=""
              />
              <h3 class="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                Conception Graphique
              </h3>
              <p class="mt-4 text-base text-gray-600 group-hover:text-white  ">
                Visuels percutants, logos mémorables et supports marketing
                renforçant votre marque.
              </p>
            </div>
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Service;
