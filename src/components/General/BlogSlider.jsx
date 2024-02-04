"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import ReactPlayer from "react-player";

const videoUrl = "https://www.youtube.com/embed";
const thumb = (videoId) => {
  return `https://img.youtube.com/vi/${videoId}/0.jpg`;
};

const BlogSlider = ({ media, videos }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);
  return (
    <>
      <div className="relative">
        <div className="controls-div absolute z-20 bottom-2 right-6">
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
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {media?.map((i) => (
              <div className="embla__slide">
                <img
                  src={`${import.meta.env.VITE_FULL_URL}/${
                    import.meta.env.VITE_IMAGE_URL
                  }/${i}`}
                  alt=""
                  className="w-full object-contain"
                />
                <img
                  src={`${import.meta.env.VITE_FULL_URL}/${
                    import.meta.env.VITE_IMAGE_URL
                  }/${i}`}
                  alt=""
                  className="w-full slider-bg"
                />
              </div>
            ))}

            {videos?.map((i) => (
              <div className="embla__slide">
                <ReactPlayer
                  url={`${videoUrl}/${i}`}
                  controls={true}
                  className="w-full h-[60vh] rounded-lg object-cover"
                />

                <img src={`${thumb(i)}`} alt="" className="w-full slider-bg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSlider;
