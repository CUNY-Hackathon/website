"use client";
import { useContext } from "react";
import { Bungee_Shade } from "next/font/google";
import Image from "next/image";
import ScreenWidthContext from "@/app/utils/ScreenWidthContext";






const bungee = Bungee_Shade({ weight: "400", subsets: ["latin"] });

export default function About() {
  const screenWidth = useContext(ScreenWidthContext);

  return (
    <div
      id="about"
      className={
        "border-dotted border-yellow-300 phone:border-[6px] sm:border-[8px] lg:border-[10px] bg-black text-white p-5 2xl:p-10"
      }
    >
      <h1
        className={
          "phone:text-xl sm:text-2xl lg:text-4xl 2xl:text-5xl phone:mb-4 sm:mb-6 lg:mb-10 " +
          bungee.className
        }
      >
        About HackCUNY
      </h1>
      <div className="flex">
        <p className="text-sm lg:text-md 2xl:text-xl 2xl:w-[50%] phone:leading-5 sm:leading-6 2xl:leading-8">
          Welcome to HackCUNY, an annual hackathon exclusively designed for the
          vibrant and diverse student body of the City University of New York
          (CUNY). Our event is more than just a competition; it&apos;s a
          celebration of innovation, creativity, and collaboration. Each year,
          we invite CUNY students from all backgrounds and skill levels to come
          together for an exhilarating 48-hour journey of hacking. At HackCUNY,
          you&apos;ll get the chance to turn your ideas into reality, learn new
          technologies, and connect with fellow students and industry leaders.
          {screenWidth > 450
            ? " Whether you&apos;re a seasoned coder, a design enthusiast, or a \
          beginner with a passion for problem-solving, HackCUNY is the perfect \
          platform to challenge yourself, expand your network, and showcase your \
          talents. Join us in fostering a community of tech-driven minds, united \
          by the spirit of discovery and a shared ambition to drive positive \
          change through technology."
            : ""}
        </p>
        <Image
          src="/hackathon_logo.png"
          width={600}
          height={600}
          alt="logo"
          className="2xl:ms-[10%] hidden lg:block w-[300px] h-[100px] lg:w-[420px] lg:h-[180px] 2xl:w-[620px] 2xl:h-[300px] self-center"
        />
      </div>
    </div>
  );
}
