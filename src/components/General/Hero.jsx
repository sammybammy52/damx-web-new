"use client";

import React, { useState } from "react";
import HeroImg from "../../assets/hero-img.webp";

// import Codm from "../../assets/games/codm.png";
// import Csgo from "../../assets/games/csgo.png";
// import Dota from "../../assets/games/dota.png";
// import Lol from "../../assets/games/lol.webp";
// import Mw2 from "../../assets/games/mw2.png";
// import Pubg from "../../assets/games/pubg2.png";
// import Valorant from "../../assets/games/valorant.webp";
// import Marquee from "react-fast-marquee";
import Typed from "react-typed";
import { FaArrowRight } from "react-icons/fa";
import toast from "react-hot-toast";

// const games = [Codm, Csgo, Dota, Lol, Mw2, Pubg, Valorant];
const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    toast.loading("Subscribing...");
    fetch(`${import.meta.env.VITE_SERVER_URL}/newsletter/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.dismiss();
        toast.success("Successfully subscribed to newsletter");
        setEmail("")
      })
      .catch((err) => {
        toast.dismiss();
        toast.error("Error subscribing to newsletter");
      });
  };

  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className=" flex flex-col justify-center max-md:px-6 max-md:pt-10">
            <h1
              className={`text-white font-extrabold text-4xl mb-4 leading-[45px] max-md:text-3xl`}
            >
              Get the best <br /> gaming insights <br /> on the planet
            </h1>
            <p className={` text-tetiary mb-4`}>
              <Typed
                loop={true}
                strings={[
                  "Here you can find anything gaming related",
                  "from gaming news",
                  "to tutorials",
                  "and many more",
                ]}
                typeSpeed={40}
                backSpeed={20}
              />
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex max-md:flex-col gap-6 lg:gap-3">
                <input
                  type="email"
                  value={email}
                  className="py-3 px-4 rounded-full w-full"
                  placeholder="subscribe to our newsletter"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                {/* <button
                  className={` text-white bg-red-700 rounded-full p-1 max-md:pr-[56px]  max-md:py-4 flex justify-center gap-2 items-center relative hover:scale-110 hover:translate-x-4 transition-all duration-300 w-full`}
                >
                  Subscribe{" "}
                  <div className="rounded-full absolute p-3 bg-red-600 translate-x-[90px] max-md:translate-x-[180px]">
                    {"->"}
                  </div>
                </button> */}

                <button className="bg-red-700 text-white rounded-full max-md:py-4 flex justify-center gap-2 items-center relative hover:scale-110 hover:translate-x-4 transition-all duration-300 w-full">
                  Subscribe <FaArrowRight className="text-white " size={15} />
                </button>
              </div>
            </form>
          </div>

          <div className="lg:w-[500px] max-md:pb-20">
            <img src={HeroImg} className="" />
          </div>
        </div>
      </div>
      {/* <div className="absolute left-0 bottom-14 max-md:bottom-28 w-full z-[-1]">
        <Marquee>
          {games?.map((i) => (
            <img src={i} alt="" className="w-[50px] mr-6" />
          ))}
        </Marquee>
      </div> */}
    </>
  );
};

export default Hero;
