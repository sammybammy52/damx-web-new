"use client";

import { Container } from "@chakra-ui/react";

import { useState } from "react";
import Damx from "../../assets/damx.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Fade as Hamburger } from "hamburger-react";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";;
import { useDisclosure } from "@chakra-ui/react";
import SearchModal from "../modals/SearchModal";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mobileToggle, setMobileToggle] = useState(false);
  const mobileSearch = () => {
    setMobileToggle(false);
    setOpen(false);
    onOpen();
  };
  return (
    <>
      <SearchModal isOpen={isOpen} onClose={onClose} />
      <div
        className={` bg-black max-md:hidden fixed top-0 left-0 right-0 z-50`}
      >
        <Container maxW={"8xl"}>
          <div className="navbar-div flex items-center justify-between ">
            <div className="img-div">
              <Link to={`/`}>
                <img src={Damx} alt="damx studio" className="w-[70px]" />
              </Link>
            </div>

            <div className="social-icons-div flex items-center gap-[30px]">
              <a href="https://www.instagram.com/damxstudio/">
                <AiFillInstagram
                  className="text-primary hover:text-tetiary"
                  size={25}
                />
              </a>
              <a href="https://tiktok.com/@damxstudio">
                <FaTiktok
                  className="text-primary hover:text-tetiary"
                  size={25}
                />
              </a>
              <a href="https://twitter.com/DamxStudio">
                <AiOutlineTwitter
                  className="text-primary hover:text-tetiary"
                  size={25}
                />
              </a>
              {/* <Link to="">
                <FaLinkedinIn
                  className="text-primary hover:text-tetiary"
                  size={25}
                />
              </Link> */}
            </div>

            <div className="">
              <ul className="flex items-center lg:gap-[40px] nav-links">
                <Link to="/news">
                  <li className=" hover:text-tetiary">News</li>
                </Link>
                <Link to="/discover">
                  <li className=" hover:text-tetiary">Discover</li>
                </Link>
                {/* <Link to="/services">
                  <li className=" hover:text-tetiary">Services</li>
                </Link> */}

                <Link to="/contact">
                  <li className=" hover:text-tetiary">Contact</li>
                </Link>

                <div onClick={onOpen}>
                  <li className=" hover:text-tetiary flex gap-2 items-center">
                    Search
                    <BiSearchAlt size={38} />
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* mobile navbar */}

      <div className="mobile-nav bg-black hidden  max-md:flex justify-between items-center relative">
        <div className="img-div">
          <img src={Damx} alt="damx studio" className="w-[75px]" />
        </div>
        <div
          className="burger-div absolute z-50 right-3"
          onClick={() => setMobileToggle(!mobileToggle)}
        >
          <Hamburger toggled={open} toggle={setOpen} color="#FCFF53" />
        </div>
      </div>

      <div
        className={` ${
          mobileToggle ? "w-[100vw]" : " w-0 overflow-hidden"
        } mobile-nav-items fixed bg-black h-full z-30 lg:hidden transition-all ease-in-out duration-300  flex justify-center py-20 text-3xl  `}
      >
        <ul className="flex flex-col gap-10">
        <Link to="/news">
            <li className="text-primary text-center">News</li>
          </Link>
          <Link to="/discover">
            <li className="text-primary text-center">Discover</li>
          </Link>
          {/* <Link to="/services">
            <li className="text-primary text-center">Services</li>
          </Link> */}
          <Link to="/contact">
            <li className="text-primary text-center">Contact</li>
          </Link>

          <div onClick={mobileSearch}>
            <li className=" hover:text-tetiary flex items-center gap-2 text-primary">
              Search
              <BiSearchAlt size={38} />
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
