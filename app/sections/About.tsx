import { Bungee_Shade } from "next/font/google";
import Image from "next/image";

const bungee = Bungee_Shade({ weight: "400", subsets: ["latin"] });

export default function About() {
  return (
    <div
      className={
        "border-dotted border-yellow-300 border-8 bg-black text-white p-8 min-h-[500px]"
      }
    >
      <h1 className={"text-5xl mb-10 " + bungee.className}>About HackCUNY</h1>
      <div className="flex">
        <p className="text-xl w-[50%] leading-8">
          Welcome to HackCUNY, an annual hackathon exclusively designed for the
          vibrant and diverse student body of the City University of New York
          (CUNY). Our event is more than just a competition; it's a celebration
          of innovation, creativity, and collaboration. Each year, we invite
          CUNY students from all backgrounds and skill levels to come together
          for an exhilarating 48-hour journey of hacking. At HackCUNY, you'll
          get the chance to turn your ideas into reality, learn new
          technologies, and connect with fellow students and industry leaders.
          Whether you're a seasoned coder, a design enthusiast, or a beginner
          with a passion for problem-solving, HackCUNY is the perfect platform
          to challenge yourself, expand your network, and showcase your talents.
          Join us in fostering a community of tech-driven minds, united by the
          spirit of discovery and a shared ambition to drive positive change
          through technology.
        </p>
        <Image
          src="/hackathon_logo.png"
          width={600}
          height={600}
          alt="logo"
          className="ms-[10%]"
        />
      </div>
    </div>
  );
}
