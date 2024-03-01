import React from "react";

const About = () => {
  return (
    <div
      class="relative isolate overflow-hidden rounded-md bg-gray-900 py-24 sm:py-32"
      id="about"
    >
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        class="absolute inset-0 -z-10 h-full w-full  object-cover object-right md:object-center"
      />
      <div
        class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      ></div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            A propos
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            Chez [Nom de l'Agence], nous sommes passionnés par la création de
            solutions web innovantes et le renforcement des marques en ligne.
            Forts d'une équipe dévouée, nous nous efforçons de dépasser les
            attentes de nos clients à chaque étape du processus. Notre approche
            axée sur la collaboration, la transparence et l'innovation nous
            permet de fournir des résultats exceptionnels. Nous croyons en la
            puissance de la technologie pour transformer les idées en réalité.
            Que vous soyez une startup ambitieuse ou une entreprise établie,
            nous sommes là pour faire de votre présence en ligne une expérience
            mémorable et performante.
          </p>
        </div>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            <a href="#">
              Expertise <span aria-hidden="true">&rarr;</span>
            </a>
            <a href="#">
              Innovation <span aria-hidden="true">&rarr;</span>
            </a>
            <a href="#">
              Transparence <span aria-hidden="true">&rarr;</span>
            </a>
            <a href="#">
              Résultats <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
