"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { flushSync } from "react-dom";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
// import "./creatives.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// Default theme. ~960B
import "@vime/core/themes/default.css";

// Optional light theme (extends default). ~400B
import "@vime/core/themes/light.css";
import { Player, Youtube } from "@vime/react";

const videoUrl = "https://www.youtube.com/embed";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 2,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
};

const CreativesCarousel = ({ media }) => {
  return (
    <div className="relative">
      {/* <h1 className="text-white text-5xl">Helloo</h1> */}
      {/* <div className="controls-div absolute z-20 bottom-[-3px] right-10 max-md:bottom-6">
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
      </div> */}
      <div className="slider-container fixed top-[15%] left-0 w-full px-10">
        <Slider {...settings}>
          {media?.map((i) =>
            i.media_type == "image" ? (
              <div className="px-3">
                <img
                  src={`${import.meta.env.VITE_FULL_URL}/${
                    import.meta.env.VITE_IMAGE_URL
                  }/${i.media_link}`}
                  alt=""
                  className="w-full h-[40vh] object-cover rounded-2xl"
                />
              </div>
            ) : (
              // <div className="embla__slide">
              // <div className="h-[40vh]">
              //   <Player controls>
              //     <Youtube videoId={i?.media_link} />
              //     {/* ... */}
              //   </Player>
              // </div>
              <div className="h-[40vh] rounded-2xl">
                <iframe
                  classname="object-contain rounded-2xl"
                  width={"96%"}
                  height={"100%"}
                  src={`${videoUrl}/${i.media_link}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              //                 </div>

              // </div>
            )
          )}
        </Slider>
      </div>
    </div>
  );
};

export default CreativesCarousel;
// "use client";
// import React, { useCallback, useEffect, useState } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import { flushSync } from "react-dom";
// import {
//   BsFillArrowLeftCircleFill,
//   BsFillArrowRightCircleFill,
// } from "react-icons/bs";
// import Big1 from "../../assets/Creatives/big1.webp";
// import Big2 from "../../assets/Creatives/big2.webp";

// import "./creatives.css";
// import ReactPlayer from "react-player";

// const videoUrl = "https://www.youtube.com/embed";

// const TWEEN_FACTOR = 1.2;

// const slides = [Big1, Big2];

// const CreativesCarousel = ({ media }) => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
//   useEffect(() => {
//     if (emblaApi) {
//       console.log(emblaApi.slideNodes()); // Access API
//     }
//   }, [emblaApi]);

//   return (
//     <div className="relative">
//       <div className="controls-div absolute z-20 bottom-[-3px] right-10 max-md:bottom-6">
//         <button
//           className="embla__button embla__button--prev mr-2"
//           onClick={() => emblaApi.scrollPrev()}
//         >
//           <BsFillArrowLeftCircleFill size={56} color="#fff" fontWeight={900} />
//         </button>
//         <button
//           className="embla__button embla__button--next"
//           onClick={() => emblaApi.scrollNext()}
//         >
//           <BsFillArrowRightCircleFill size={56} color="#fff" />
//         </button>
//       </div>
//       <div className="slider-container py-14 bg-black h-[85vh] flex justify-center items-center">
//         <div className="embla" ref={emblaRef}>
//           <div className="embla__container">
//             {media?.map((i) =>
//               i.media_type == "image" ? (
//                 <div className="embla__slide mr-2">
//                   <img
//                     src={`${import.meta.env.VITE_FULL_URL}/${
//                       import.meta.env.VITE_IMAGE_URL
//                     }/${i.media_link}`}
//                     alt=""
//                     className="w-full h-[40vh] object-contain"
//                   />

//                   <img
//                     src={`${import.meta.env.VITE_FULL_URL}/${
//                       import.meta.env.VITE_IMAGE_URL
//                     }/${i.media_link}`}
//                     alt=""
//                     className="w-full slider-bg h-[40vh] object-cover"
//                   />
//                   <div className="slider-overlay"></div>
//                 </div>
//               ) : (
//                 <div className="embla__slide">
//                   {/* <ReactPlayer
//                     url={`${videoUrl}/${i.media_link}`}

//                     className="w-full h-[40vh] object-cover"
//                   /> */}
//                   <iframe
//                     classname="object-contain "
//                     width={"98%"}
//                     height={"100%"}
//                     src={`${videoUrl}/${i.media_link}`}
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                     allowFullScreen
//                   />
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreativesCarousel;
