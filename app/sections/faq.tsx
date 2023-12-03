"use client"
import { useState } from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Faq() {


    const [faqStates, setFaqStates] = useState(Array(20).fill(false));
    const toggleFaq = (index) => {
      setFaqStates((prevStates) => {
        const newStates = [...prevStates];
        newStates[index] = !newStates[index];
        return newStates;
      });
    };
  return (
    <div id="faq" className="backdrop-blur p-8 min-h-[500px] text-center text-4xl bg-black text-white">
        {/* FAQ Header */}

      <h1 className={"text-6xl mb-10 text-center "}>FAQs</h1>
     

     <div className="flex mt-4">
            {/*  General List  */}
        <div id="leftColumn" className=" p-4 w-[50%] leading-12">
                <h3 className="text-6xl">GENERAL</h3>
                <ul id="general" className="list mt-4">
                    <li className='mt-4' onClick={() => toggleFaq(0)}>
                        <p>What is a hackathon?</p>
                      { faqStates[0] && <p className="text-white">A hackathon is a competition where participants from all over the world come together to solve problems in a short period of time.</p>}
                    </li>
                    <li className='mt-4' onClick={() => toggleFaq(1)}>
                        <p>When is HackCUNY?</p>
                        { faqStates[1] && <p className="text-white">A hackathon is a competition where participants from all over the world come together to solve problems in a short period of time.</p>}
                    </li>
                    <li className='mt-4' onClick={() => toggleFaq(2)}>
                        <p>What's the cost?</p>
                        { faqStates[2] && <p className="text-white">A hackathon is a competition where participants from all over the world come together to solve problems in a short period of time.</p>}
                    </li>
                    <li className='mt-4' onClick={() => toggleFaq(3)}>
                        <p>What's the schedule?</p>
                      { faqStates[3] && <p className="text-white">A hackathon is a competition where participants from all over the world come together to solve problems in a short period of time.</p>}
                    </li>
                    <li className='mt-4' onClick={() => toggleFaq(4)}>
                        <p>What can I win?</p>
                      { faqStates[4] && <p className="text-white">A hackathon is a competition where participants from all over the world come together to solve problems in a short period of time.</p>}
                    </li>
                    <li className='mt-4' onClick={() => toggleFaq(5)}>
                        <p>Is there an admissions puzzle?</p>
                        { faqStates[5] && <p className="text-white">A hackathon is a competition where participants from all over the world come together to solve problems in a short period of time.</p>}
                    </li>
                    <li className='mt-4' onClick={() => toggleFaq(6)}>
                        <p>I still have questions!</p>
                      { faqStates[6] && <p className="text-white">A hackathon is a competition where participants from all over the world come together to solve problems in a short period of time.</p>}
                    </li>
                </ul>
            </div>

            {/* Tracks List */}
            <div id="rightColumn" className=" p-4 w-[50%] leading-12">
                <h3 className="text-6xl">Tracks</h3>
                <ul id="general" className="list mt-4">
                    <li className='mt-4'  onClick={() => toggleFaq(17)}>
                        <p>What are hackathon tracks?</p>
                      { faqStates[17] && <p className="text-white">A hackathon is a competition where participants from all over the world come together to solve problems in a short period of time.</p>}
                    </li>
                    <li className='mt-4' onClick={() => toggleFaq(18)}>
                        <p>How will tracks and prizes work?</p>
                      { faqStates[18] && <p className="text-white">A hackathon is a competition where participants from all over the world come together to solve problems in a short period of time.</p>}
                    </li>
                    <li className='mt-4' onClick={() => toggleFaq(19)}>
                        <p>Do I have to submit a project if I attend?</p>
                      { faqStates[19] && <p className="text-white">A hackathon is a competition where participants from all over the world come together to solve problems in a short period of time.</p>}
                    </li>
                </ul>
            </div>
     </div>
     <div className="flex mt-4">
        {/* Registration List */}
        <div id="leftColumn" className=" p-4 w-[50%] leading-12">
                <h3 className="text-6xl">Registration</h3>
                <ul id="general" className="list mt-4">
                <li className='mt-4' onClick={() => toggleFaq(7)}>
                    <p>Can I attend?</p>
                    { faqStates[7] && <p className="text-white">A hackathon is a competition where participants from all over the world come together to solve problems in a short period of time.</p>}
                </li>
                <li className='mt-4' onClick={() => toggleFaq(8)}>
                    <p>How can I know if I'm eligible?</p>
                  { faqStates[8] && <p className="text-white">A hackathon is a competition where participants from all over the world come together to solve problems in a short period of time.</p>}
                </li>
                <li className='mt-4' onClick={() => toggleFaq(9)}>
                    <p>When is the application deadline?</p>
                  { faqStates[9] && <p className="text-white">A hackathon is a competition where participants from all over the world come together to solve problems in a short period of time.</p>}
                </li>
                <li className='mt-4' onClick={() => toggleFaq(10)}>
                    <p>How do teams work?</p>
                  { faqStates[10] && <p className="text-white">A hackathon is a competition where participants from all over the world come together to solve problems in a short period of time.</p>}
                </li>
                <li className='mt-4' onClick={() => toggleFaq(11)}>
                    <p>What if I don't have a team?</p>
                  { faqStates[11] && <p className="text-white">A hackathon is a competition where participants from all over the world come together to solve problems in a short period of time.</p>}
                </li>
                <li className='mt-4' onClick={() => toggleFaq(12)}>
                    <p>What if I go to CUNY?</p>
                  { faqStates[12] && <p className="text-white">A hackathon is a competition where participants from all over the world come together to solve problems in a short period of time.</p>}
                </li>
                <li className='mt-4' onClick={() => toggleFaq(13)}>
                    <p>What if I don't go to CUNY?</p>
                  { faqStates[13] && <p className="text-white">A hackathon is a competition where participants from all over the world come together to solve problems in a short period of time.</p>}
                </li>
            </ul>
        </div>

        {/* In Person Logisics List */}
        <div id="leftColumn" className=" p-4 w-[50%] leading-12">
                <h3 className="text-6xl">In Person Logistics</h3>
                <ul id="general" className="list mt-4">
                <li className='mt-4'  onClick={() => toggleFaq(14)}>
                    <p>Will HackCUNY be fully in person this year?</p>
                  { faqStates[14] && <p className="text-white">A hackathon is a competition where participants from all over the world come together to solve problems in a short period of time.</p>}
                </li>
                <li className='mt-4'  onClick={() => toggleFaq(15)}>
                    <p>What will I eat?</p>
                  { faqStates[15] && <p className="text-white">A hackathon is a competition where participants from all over the world come together to solve problems in a short period of time.</p>}
                </li>
                <li className='mt-4'  onClick={() => toggleFaq(16)}>
                    <p>Where is HackCUNY?</p>
                  { faqStates[16] && <p className="text-white">A hackathon is a competition where participants from all over the world come together to solve problems in a short period of time.</p>}
                </li>
            </ul>
        </div>
        </div>
        
    </div>
  );
}