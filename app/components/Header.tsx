import Image from "next/image";

export default function Header() {
  return (
    <nav className="flex items-center h-[85px] bg-slate-800">
      <div className="grow flex justify-center">
        <Image src="/200.webp" alt="logo" width={75} height={75} />
      </div>
      <div className="grow-[18] flex justify-center items-center gap-10">
        <li className="list-none text-lg">
          <a href="#">about</a>
        </li>
        <li className="list-none text-lg">
          <a href="#">FAQs</a>
        </li>
      </div>
      <div className="grow"></div>
    </nav>
  );
}
