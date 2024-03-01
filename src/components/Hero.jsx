import React from "react";

const Hero = () => {
  return (
    <section class="relative py-32 lg:py-32 ">
      <div class="mx-auto lg:max-w-6xl w-full px-5 sm:px-10 md:px-12 lg:px-6 flex flex-col lg:flex-row gap-5 lg:gap-9">
        {/* <div class="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
          <span class="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
          <span class="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"></span>
        </div> */}
        <div
          class="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
        >
          <h1
            class="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl
            font-bold text-gray-900"
          >
            Agence{" "}
            <span class="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-50% to-green-300">
              Marketing <br />
            </span>
            Developpement web
          </h1>
          <p class="mt-8 text-gray-700">
            Bienvenue chez [Nom de l'Agence], votre partenaire de confiance pour
            le développement web et le marketing digital. Forts d'une expérience
            solide et d'une équipe talentueuse, nous sommes déterminés à
            propulser votre entreprise vers de nouveaux sommets en ligne.
          </p>
          <div class="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
            <div class="flex sm:flex-row flex-col gap-5 w-full">
              <a
                href="#"
                class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Lancer vous ! <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div class="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
          <img
            src="https://cdn-icons-png.flaticon.com/256/11755/11755412.png"
            alt="Hero image"
            width="2350"
            height="2359"
            class="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-90 hidden sm:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
