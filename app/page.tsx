"use client";
import { useState, useEffect } from "react";
import { Header, Main, About, Footer } from "@/app/sections";
import ScreenWidthContext from "@/app/utils/ScreenWidthContext";
import HamburgerContext from "@/app/utils/HamburgerContext";
import { X } from "lucide-react";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [ham, setHam] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <main className="h-full">
      <ScreenWidthContext.Provider value={screenWidth}>
        <div
          className={`transition-all duration-700 w-[100%] h-[100vh] fixed z-50 ${
            ham ? "overflow-hidden" : ""
          } ${
            ham
              ? "visible opacity-100 right-0"
              : "invisible opacity-0 right-[-300px]"
          }`}
        >
          <div
            onClick={() => setHam(false)}
            className={`bg-[rgba(0,0,0,.5)] fixed top-0 left-0 z-[-1] w-[100%] h-[100vh] ${
              ham ? "visible" : "invisible"
            }`}
          ></div>
          <div className="w-[150px] bg-[#003796] absolute right-0 h-[100%] z-50 text-white">
            <div className="flex justify-end pe-1">
              <X color="white" size={32} onClick={() => setHam(false)} />
            </div>
            <div className="mt-6 flex justify-center">
              <a
                className="text-xl"
                href="#about"
                onClick={() => setHam(false)}
              >
                About
              </a>
            </div>
            <div className="mt-6 flex justify-center">
              <a className="text-xl" href="#faqs" onClick={() => setHam(false)}>
                FAQs
              </a>
            </div>
          </div>
        </div>
        <HamburgerContext.Provider value={setHam}>
          <Header />
        </HamburgerContext.Provider>
        <Main />
        <About />
        <Footer />
      </ScreenWidthContext.Provider>
    </main>
  );
}
