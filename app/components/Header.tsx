"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    window.onscroll = function () {
      makeSticky();
    };
    var header = document.getElementById("myHeader")!;
    var sticky = header.offsetTop + 150;

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
      className="flex items-center h-[85px] absolute top-0 w-full transition-all ease-out duration-300 bg-gradient-to-b from-black to-transparent"
      id="myHeader"
    >
      <div className="grow flex justify-center">
        <Image
          className="cursor-pointer"
          src="/hackathon_logo.png"
          alt="logo"
          width={150}
          height={150}
          onClick={() => document.body.scrollTo(0, 0)}
        />
      </div>
      <div className="grow-[18] flex justify-center items-center gap-10">
        <li className="list-none text-xl text-white">
          <a href="#">About</a>
        </li>
        <li className="list-none text-xl text-white">
          <a href="#">FAQs</a>
        </li>
      </div>
      <div className="grow bg-pink-300"></div>
    </nav>
  );
}
