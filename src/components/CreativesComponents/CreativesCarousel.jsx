"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { flushSync } from "react-dom";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Big1 from "../../assets/Creatives/big1.webp";
import Big2 from "../../assets/Creatives/big2.webp";

import "./creatives.css";
import ReactPlayer from "react-player";

const videoUrl = "https://www.youtube.com/embed";

const TWEEN_FACTOR = 1.2;

const slides = [Big1, Big2];

const CreativesCarousel = ({ media }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="controls-div absolute z-20 bottom-[-3px] right-10 max-md:bottom-6">
        <button
          className="embla__button embla__button--prev mr-2"
          onClick={() => emblaApi.scrollPrev()}
        >
          <BsFillArrowLeftCircleFill size={56} color="#fff" fontWeight={900} />
        </button>
        <button
          className="embla__button embla__button--next"
          onClick={() => emblaApi.scrollNext()}
        >
          <BsFillArrowRightCircleFill size={56} color="#fff" />
        </button>
      </div>
      <div className="slider-container py-14 bg-black h-[85vh] flex justify-center items-center">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {media?.map((i) =>
              i.media_type == "image" ? (
                <div className="embla__slide mr-2">
                  <img
                    src={`${import.meta.env.VITE_FULL_URL}/${
                      import.meta.env.VITE_IMAGE_URL
                    }/${i.media_link}`}
                    alt=""
                    className="w-full h-[70vh] object-contain"
                  />

                  <img
                    src={`${import.meta.env.VITE_FULL_URL}/${
                      import.meta.env.VITE_IMAGE_URL
                    }/${i.media_link}`}
                    alt=""
                    className="w-full slider-bg h-[70vh] object-cover"
                  />
                  <div className="slider-overlay"></div>
                </div>
              ) : (
                <div className="embla__slide">
                  {/* <ReactPlayer
                    url={`${videoUrl}/${i.media_link}`}
                    
                    className="w-full h-[70vh] object-cover"
                  /> */}
                  <iframe
                    classname="object-contain "
                    width={"98%"}
                    height={"100%"}
                    src={`${videoUrl}/${i.media_link}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativesCarousel;
