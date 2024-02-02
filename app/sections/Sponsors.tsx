import Image from "next/image";
import Head from "next/head";
import { Fredericka_the_Great } from "next/font/google";

const Fredericka = Fredericka_the_Great({ weight: "400", subsets: ["latin"] });
export default function Sponsors() {
  return (
    <div id="sponsors">
      <h1
        className={
          "text-5xl sm:text-6xl font-bold text-center bg-black text-[#233f95] p-4 font-serif sponsorsHeader " +
          Fredericka.className
        }
      >
        Sponsors
      </h1>
      <div className="flex flex-row flex-wrap justify-around bg-black content-center align-center p-8 gap-8">
        <span>
          <a
            href="https://www.cedar.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/cedarLogo.png"
              alt="Cedar"
              width={200}
              height={200}
              className="object-fill w-[120px] sm:w-[200px]"
            />
          </a>
        </span>

        <span>
          <a
            href="https://www.jjay.cuny.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/johnJayLogo.jpg"
              alt="CUNY Logo"
              width={200}
              height={200}
              className="object-fill w-[120px] sm:w-[200px]"
            />
          </a>
        </span>

        <span>
          <a
            href="https://www.ccny.cuny.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/ccnyLogo.png"
              alt="City College of New York Logo"
              width={200}
              height={200}
              className="object-fill w-[120px] sm:w-[200px]"
            />
          </a>
        </span>
      </div>
    </div>
  );
}
