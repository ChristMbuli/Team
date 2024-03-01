import React from "react";
import Decor from "./Decor";

const Project = () => {
  return (
    <>
      <div class="py-10 sm:py-20" id="project">
        <Decor />
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:text-center">
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Réalisations
            </p>

            <p class="mt-6 text-lg leading-8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
          {/* --------- */}

          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex="0"
            >
              <div class="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
                <span class="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
                <span class="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"></span>
              </div>
              <div class="">
                <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                  <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div class="group relative">
                      <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                          src="https://www.yeeply.com/fr/wp-content/uploads/2018/06/Image2-2.jpg"
                          alt="Front of men&#039;s Basic Tee in black."
                          class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div class="mt-4 flex justify-between">
                        <div>
                          <h3 class="text-sm text-gray-700">
                            <a href="#">
                              <span
                                aria-hidden="true"
                                class="absolute inset-0"
                              ></span>
                              Application e-commerce
                            </a>
                          </h3>
                          <p class="mt-1 text-sm text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Recusandae tempore aut, repellendus minima
                            dolores alias odit fugiat expedita mollitia
                            perferendis.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="group relative">
                      <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                          src="https://www.slagon.fr/wp-content/uploads/2022/04/rental-min.png"
                          alt="Front of men&#039;s Basic Tee in black."
                          class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div class="mt-4 flex justify-between">
                        <div>
                          <h3 class="text-sm text-gray-700">
                            <a href="#">
                              <span
                                aria-hidden="true"
                                class="absolute inset-0"
                              ></span>
                              Site Location Voiture
                            </a>
                          </h3>
                          <p class="mt-1 text-sm text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Est enim recusandae cum. Nulla, temporibus
                            accusamus?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="group relative">
                      <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                          src="https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/3d55210921d9a0b85e53a2a22bbdd01edcb735ca1c1cc60daae184d461981833.jpg"
                          alt="Front of men&#039;s Basic Tee in black."
                          class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div class="mt-4 flex justify-between">
                        <div>
                          <h3 class="text-sm text-gray-700">
                            <a href="#">
                              <span
                                aria-hidden="true"
                                class="absolute inset-0"
                              ></span>
                              Application Blog
                            </a>
                          </h3>
                          <p class="mt-1 text-sm text-gray-500">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Inventore eius ea distinctio quibusdam et
                            nesciunt?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="group relative">
                      <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                          src="https://neilpatel.com/wp-content/uploads/2023/06/Best_landing_pages3-700x397.jpg"
                          alt="Front of men&#039;s Basic Tee in black."
                          class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div class="mt-4 flex justify-between">
                        <div>
                          <h3 class="text-sm text-gray-700">
                            <a href="#">
                              <span
                                aria-hidden="true"
                                class="absolute inset-0"
                              ></span>
                              Landing Page
                            </a>
                          </h3>
                          <p class="mt-1 text-sm text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsum eius repudiandae nostrum quas,
                            accusantium similique!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Voir Plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
