import React, { useRef } from "react";
import Decor from "./Decor";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };
  return (
    <div className="py-10 sm:py-20">
      <Decor />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* ... (rest of your code) */}
        </div>
        {/* --------- */}
        <div className="mx-auto my-8 text-center container">
          <button
            onClick={handlePrev}
            className="mr-4 px-4 py-2 bg-blue-500 text-white"
          >
            Précédent
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white"
          >
            Suivant
          </button>
          <Slider ref={sliderRef} {...settings}>
            <div className="max-w-md mx-4 bg-white overflow-hidden shadow-lg">
              <img
                class="h-32 object-cover mx-auto"
                src="https://placebeard.it/640x360"
                alt="Person 2"
              />
              <div class="p-4">
                <p class="text-gray-800 leading-relaxed">
                  "I am Siddharth Rajpal, a 2014 passout from NSIT and I used to
                  visit your website to prepare for job interviews and once I
                  was ready I started applying to various companies. I got
                  recruited at Google, Amazon, Reliance Jio, Cadence, Mentor
                  Graphics, Delhivery and Octro and all thanks to your website I
                  am living a dream I once had.
                </p>
                <p class="mt-2 text-lg font-bold text-purple-600">
                  Raj Malhotra
                </p>
                <p class="text-sm text-gray-500">Co-founder at Aviator Tech</p>
              </div>
            </div>
            <div className="max-w-md mx-4 bg-white shadow-lg">
              <img
                class="h-32 object-cover mx-auto"
                src="https://placebeard.it/640x360"
                alt="Person 2"
              />
              <div class="p-4">
                <p class="text-gray-800 leading-relaxed">
                  "I am Siddharth Rajpal, a 2014 passout from NSIT and I used to
                  visit your website to prepare for job interviews and once I
                  was ready I started applying to various companies. I got
                  recruited at Google, Amazon, Reliance Jio, Cadence, Mentor
                  Graphics, Delhivery and Octro and all thanks to your website I
                  am living a dream I once had.
                </p>
                <p class="mt-2 text-lg font-bold text-purple-600">
                  Raj Malhotra
                </p>
                <p class="text-sm text-gray-500">Co-founder at Aviator Tech</p>
              </div>
            </div>
            <div className="max-w-md mx-4 bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                class="h-32 object-cover mx-auto"
                src="https://placebeard.it/640x360"
                alt="Person 2"
              />
              <div class="p-4">
                <p class="text-gray-800 leading-relaxed">
                  "I am Siddharth Rajpal, a 2014 passout from NSIT and I used to
                  visit your website to prepare for job interviews and once I
                  was ready I started applying to various companies. I got
                  recruited at Google, Amazon, Reliance Jio, Cadence, Mentor
                  Graphics, Delhivery and Octro and all thanks to your website I
                  am living a dream I once had.
                </p>
                <p class="mt-2 text-lg font-bold text-purple-600">
                  Raj Malhotra
                </p>
                <p class="text-sm text-gray-500">Co-founder at Aviator Tech</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
