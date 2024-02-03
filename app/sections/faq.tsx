"use client";
import { useState } from "react";
import Image from "next/image";
import { Fredericka_the_Great } from "next/font/google";

const Fredericka = Fredericka_the_Great({ weight: "400", subsets: ["latin"] });
export default function Faq() {
  const [faqStates, setFaqStates] = useState(Array(20).fill(false));
  /*const toggleFaq = (index) => {
    setFaqStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };*/
  return (
    <></>
    // <div
    //   id="faq"
    //   className={
    //     "p-8 min-h-[500px] text-center text-4xl bg-black text-white " +
    //     Fredericka.className
    //   }
    // >
    //   {/* FAQ Header */}

    //   <h1 className={"text-6xl mb-10 text-center " + Fredericka.className}>
    //     FAQs
    //   </h1>

    //   <div className="flex mt-4">
    //     {/*  General List  */}
    //     <div id="leftColumn" className=" p-4 w-[100%] leading-12">
    //       <h3 className="text-6xl">GENERAL</h3>
    //       <ul id="general" className="list mt-4">
    //         <li className="mt-4" onClick={() => toggleFaq(0)}>
    //           <p>What is a hackathon?</p>
    //           {faqStates[0] && (
    //             <p className="text-white">
    //               A hackathon is a competition where participants from all over
    //               the world come together to solve problems in a short period of
    //               time.
    //             </p>
    //           )}
    //         </li>
    //         <li className="mt-4" onClick={() => toggleFaq(1)}>
    //           <p>When is HackCUNY?</p>
    //           {faqStates[1] && (
    //             <p className="text-white">
    //               A hackathon is a competition where participants from all over
    //               the world come together to solve problems in a short period of
    //               time.
    //             </p>
    //           )}
    //         </li>
    //         <li className="mt-4" onClick={() => toggleFaq(2)}>
    //           <p>What&aposs the cost?</p>
    //           {faqStates[2] && (
    //             <p className="text-white">
    //               A hackathon is a competition where participants from all over
    //               the world come together to solve problems in a short period of
    //               time.
    //             </p>
    //           )}
    //         </li>
    //         <li className="mt-4" onClick={() => toggleFaq(3)}>
    //           <p>What&aposs the schedule?</p>
    //           {faqStates[3] && (
    //             <p className="text-white">
    //               A hackathon is a competition where participants from all over
    //               the world come together to solve problems in a short period of
    //               time.
    //             </p>
    //           )}
    //         </li>
    //         <li className="mt-4" onClick={() => toggleFaq(4)}>
    //           <p>What can I win?</p>
    //           {faqStates[4] && (
    //             <p className="text-white">
    //               A hackathon is a competition where participants from all over
    //               the world come together to solve problems in a short period of
    //               time.
    //             </p>
    //           )}
    //         </li>
    //         <li className="mt-4" onClick={() => toggleFaq(5)}>
    //           <p>Is there an admissions puzzle?</p>
    //           {faqStates[5] && (
    //             <p className="text-white">
    //               A hackathon is a competition where participants from all over
    //               the world come together to solve problems in a short period of
    //               time.
    //             </p>
    //           )}
    //         </li>
    //         <li className="mt-4" onClick={() => toggleFaq(6)}>
    //           <p>I still have questions!</p>
    //           {faqStates[6] && (
    //             <p className="text-white">
    //               A hackathon is a competition where participants from all over
    //               the world come together to solve problems in a short period of
    //               time.
    //             </p>
    //           )}
    //         </li>
    //       </ul>
    //     </div>

    //     {/* Tracks List */}
    //     <div id="rightColumn" className=" p-4 w-[100%] leading-12">
    //       <h3 className="text-6xl">Tracks</h3>
    //       <ul id="general" className="list mt-4">
    //         <li className="mt-4" onClick={() => toggleFaq(17)}>
    //           <p>What are hackathon tracks?</p>
    //           {faqStates[17] && (
    //             <p className="text-white">
    //               A hackathon is a competition where participants from all over
    //               the world come together to solve problems in a short period of
    //               time.
    //             </p>
    //           )}
    //         </li>
    //         <li className="mt-4" onClick={() => toggleFaq(18)}>
    //           <p>How will tracks and prizes work?</p>
    //           {faqStates[18] && (
    //             <p className="text-white">
    //               A hackathon is a competition where participants from all over
    //               the world come together to solve problems in a short period of
    //               time.
    //             </p>
    //           )}
    //         </li>
    //         <li className="mt-4" onClick={() => toggleFaq(19)}>
    //           <p>Do I have to submit a project if I attend?</p>
    //           {faqStates[19] && (
    //             <p className="text-white">
    //               A hackathon is a competition where participants from all over
    //               the world come together to solve problems in a short period of
    //               time.
    //             </p>
    //           )}
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
}
