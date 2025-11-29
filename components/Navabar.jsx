import React, { useEffect, useRef,useState } from "react";
import Image from "next/image";
import { assets } from "../asset/assets";

const Navabar = () => {
  const [isScroll, setIsScroll] = useState(false);

  const sideMenu = useRef();

  const openMenu = () => {
    sideMenu.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenu.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 
     flex items-center justify-between z-50 
     ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""}`}>
        <a href="#top">
          <Image
            src={assets.logo}
            alt=""
            className="w-16 cursor-pointer mr-14"
          />
        </a>

        <ul
         className={`hidden md:flex items-center gap-6 lg:gap-8
  rounded-full px-12 py-3 transition-all duration-300
  ${isScroll ? "" : "bg-white/40 backdrop-blur-lg shadow-sm"}`}>

          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="" className="w-6"></Image>
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10
          py-2.5 border border-gray-500 rounded-full ml-4 "
          >
            Contact
            <Image src={assets.arrow_icon} alt="" className="w-3" />{" "}
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className="w-6"></Image>
          </button>
        </div>

        {/* mobile menu */}

        <ul
          ref={sideMenu}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
         top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-6 cursor-pointer"
            />
          </div>

          <li>
            <a onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#about">
              About me
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navabar;
