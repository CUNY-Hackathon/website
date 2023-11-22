"use client";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="flex items-center h-[85px]">
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
        <li className="list-none text-xl">
          <a href="#">About</a>
        </li>
        <li className="list-none text-xl">
          <a href="#">FAQs</a>
        </li>
      </div>
      <div className="grow"></div>
    </nav>
  );
}
