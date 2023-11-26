"use client";
import Image from "next/image";
import { useContext, useEffect } from "react";
import ScreenWidthContext from "../utils/ScreenWidthContext";
import HamburgerContext from "../utils/HamburgerContext";
import { Menu } from "lucide-react";

export default function Header() {
  const screenWidth = useContext(ScreenWidthContext);
  const setHam = useContext(HamburgerContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.onscroll = function () {
      makeSticky();
    };
    var header = document.getElementById("myHeader")!;
    var sticky = header.offsetTop + (window.innerWidth <= 1200 ? 80 : 150);

    function makeSticky() {
      if (window.scrollY > sticky) {
        header.classList.add("fixed", "top-0");
        header.classList.remove("absolute");
      } else {
        header.classList.remove("fixed", "top-0");
        header.classList.add("absolute");
      }
    }
  }, []);

  return (
    <nav
      className="flex items-center h-[55px] lg:h-[85px] absolute top-0 w-full transition-all ease-out duration-300 bg-gradient-to-b from-black to-transparent"
      id="myHeader"
    >
      <div className="grow flex justify-center">
        <Image
          className="cursor-pointer phone:w-[100px] sm:w-[125px] 2xl:w-[175px]"
          src="/hackathon_logo.png"
          alt="logo"
          width={150}
          height={150}
          onClick={scrollToTop}
        />
      </div>
      {screenWidth < 450 ? (
        <div className="grow-[18] flex justify-end items-start">
          <div className="cursor-pointer me-4 rounded-full bg-[#003796] p-1">
            <Menu color="white" size={32} onClick={() => setHam(true)} />
          </div>
        </div>
      ) : (
        <>
          <div className="grow-[18] flex justify-center items-center gap-10">
            <li className="list-none phone:text-sm sm:text-lg xl:text-xl text-white">
              <a href="#about">About</a>
            </li>
            <li className="list-none phone:text-sm sm:text-lg xl:text-xl text-white">
              <a href="#faqs">FAQs</a>
            </li>
          </div>
          <div className="grow"></div>
        </>
      )}
    </nav>
  );
}
