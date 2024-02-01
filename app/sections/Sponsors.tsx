import Image from "next/image"
import Head from "next/head"
import { Fredericka_the_Great } from "next/font/google"

const Fredericka = Fredericka_the_Great({ weight: "400", subsets: ["latin"] })
export default function Sponsors(){
    return (
        <div>
            <h1 className={"text-4xl font-bold text-center bg-black text-white p-4 font-serif " + Fredericka.className}>Sponsors</h1>
            <div className="flex flex-row flex-wrap justify-around bg-black content-center align-center p-8 gap-8">
                    
                    <span>
                        <a href="https://www.cedar.com/" target="_blank" rel="noopener noreferrer">
                            <Image src="/cedarLogo.png" width={200} height={200} alt="Cedar" className="object-fill"/>
                        </a>
                    </span>

                    <span>
                        <a href="https://www.jjay.cuny.edu/" target="_blank" rel="noopener noreferrer">
                            <Image src="/johnJayLogo.jpg" width={200} height={200} alt="CUNY Logo" className="object-fill"/>
                        </a>
                    </span>

                    <span>
                        <a href="https://www.ccny.cuny.edu/" target="_blank" rel="noopener noreferrer">
                            <Image src="/ccnyLogo.png" width={200} height={200} alt="City College of New York Logo" className="object-fill"/>
                        </a>
                    </span>
                    
            </div>
        </div>
    )
}