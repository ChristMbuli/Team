import React, { useState, useEffect } from "react";
import "../assets/style.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // État pour suivre si la page a été défilée

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Gestionnaire d'événements de défilement
  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    setIsScrolled(isScrolled);
  };

  // Utilisez useEffect pour ajouter le gestionnaire d'événements de défilement
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Le tableau vide signifie que ce useEffect s'exécute une seule fois après le premier rendu

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
            Accueil
          </a>
          <a
            href="#services"
            class="text-sm font-semibold leading-6 text-gray-900"
          >
            Services
          </a>
          <a
            href="#about"
            class="text-sm font-semibold leading-6 text-gray-900"
          >
            A propos
          </a>
          <a
            href="#project"
            class="text-sm font-semibold leading-6 text-gray-900"
          >
            Travails
          </a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#contact"
            class="text-sm font-semibold leading-6 text-gray-900"
          >
            Nous Contacter <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      {/* Menu en petit ecrant */}
      <div
        className={`lg:hidden ${isMenuOpen ? "" : "hidden"}`}
        role="dialog"
        aria-modal="true"
      >
        <div class="fixed inset-0 z-50"></div>
        <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={toggleMenu} // Ajoutez le gestionnaire d'événements  ici
            >
              <span className="sr-only">Close menu</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Accueil
                </a>
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Services
                </a>
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  A propos
                </a>
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Travails
                </a>
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
