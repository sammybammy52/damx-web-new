"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Nuts from "../../assets/HomeCarousel/nuts.png";
import Alto from "../../assets/HomeCarousel/alto.png";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const HomeSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);
  return (
    <>
      <div className="lg:fixed lg:top-[70px]  lg:left-0 lg:right-0 w-full">
      <div className="relative">
        <div className="controls-div absolute z-20 bottom-3 right-10 max-md:hidden">
          <button
            className="embla__button embla__button--prev mr-2"
            onClick={() => emblaApi.scrollPrev()}
          >
            <BsFillArrowLeftCircleFill
              size={36}
              color="#fff"
              fontWeight={900}
            />
          </button>
          <button
            className="embla__button embla__button--next"
            onClick={() => emblaApi.scrollNext()}
          >
            <BsFillArrowRightCircleFill size={36} color="#fff" />
          </button>
        </div>
        <div className="embla " ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <img src={Nuts} alt="" className="w-full object-contain  " />
              <img src={Nuts} alt="" className="w-full slider-bg" />
            </div>
            <div className="embla__slide">
              <img src={Alto} alt="" className="w-full object-contain " />
              <img src={Alto} alt="" className="w-full slider-bg" />
            </div>
            {/* <div className="embla__slide">Slide 3</div> */}
          </div>
        </div>
        {/* <div className="lg:hidden">
          <div className="box">
            <div className="item">
              <img src={Nuts} alt="" className="w-full object-contain" />
            </div>
            <div className="item">
              <img src={Alto} alt="" className="w-full object-contain" />
            </div>
          </div>
        </div> */}
      </div>
      </div>
      
    </>
  );
};

export default HomeSlider;
