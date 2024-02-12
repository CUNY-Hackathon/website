import { Fredericka_the_Great } from "next/font/google";

const Fredericka = Fredericka_the_Great({ weight: "400", subsets: ["latin"] });

export default function Schedule() {
  return (
    <div id="schedule" className="bg-black text-white">
      <h2
        className={
          "text-5xl sm:text-6xl font-bold text-center bg-black text-[#233f95] p-4 font-serif sponsorsHeader " +
          Fredericka.className
        }
      >
        Schedule
      </h2>

      <div className="flex flex-wrap gap-y-12 justify-between  px-4 sm:px-14">
        <div className="w-[35%]">
          <h3 className="text-sm sm:text-3xl font-bold">
            Friday,<span className="px-4 sm:px-0"></span> February 16
          </h3>
          <div className="border-b-[#233f95] border-b-2 sm:mt-2"></div>
          <div className="mt-3 sm:mt-6 text-[11px] sm:text-xs">
            12:00 PM
            <p className="sm:float-right">Cedar HQ</p>
            <p className="text-xs sm:text-lg">Check-In commences</p>
          </div>
          <div className="mt-3 sm:mt-6 text-[11px] sm:text-xs">
            1:00 PM - 1:30 PM
            <p className="sm:float-right">Cedar HQ</p>
            <p className="text-xs sm:text-lg">Welcome Ceremony</p>
          </div>
          <div className="mt-3 sm:mt-6 text-[11px] sm:text-xs">
            1:30 PM
            <p className="sm:float-right">Cedar HQ</p>
            <p className="text-xs sm:text-lg">Check-In commences</p>
          </div>
          <div className="mt-3 sm:mt-6 text-[11px] sm:text-xs">
            1:45 PM - 2:45 PM
            <p className="sm:float-right">Cedar HQ</p>
            <p className="text-xs sm:text-lg">How to Hackathon workshop</p>
          </div>
          <div className="mt-3 sm:mt-6 text-[11px] sm:text-xs">
            3:00 PM
            <p className="sm:float-right">Cedar HQ</p>
            <div className="text-lg flex gap-2 items-center">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 2.5V9.5C3 10.6 3.9 11.5 5 11.5H9C9.53043 11.5 10.0391 11.2893 10.4142 10.9142C10.7893 10.5391 11 10.0304 11 9.5V2.5"
                  stroke="#FFE8C7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 2.5V22.5"
                  stroke="#FFE8C7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 15.5V2.5C19.6739 2.5 18.4021 3.02678 17.4645 3.96447C16.5268 4.90215 16 6.17392 16 7.5V13.5C16 14.6 16.9 15.5 18 15.5H21ZM21 15.5V22.5"
                  stroke="#FFE8C7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-xs sm:text-lg">Lunch Commence</p>
            </div>
          </div>

          <div className="mt-3 sm:mt-6 text-[11px] sm:text-xs">
            3:30 PM - 7:30 PM
            <p className="sm:float-right">Cedar HQ</p>
            <p className="text-xs sm:text-lg">Workshops</p>
          </div>

          <div className="mt-3 sm:mt-6 text-[11px] sm:text-xs">
            11:30 PM
            <p className="sm:float-right">(Online, Discord)</p>
            <p className="text-xs sm:text-lg">Game Night</p>
          </div>
        </div>

        <div className="w-[33%]">
          <h3 className="text-sm sm:text-3xl font-bold">
            Saturday,<span className="px-4 sm:px-0"></span> February 17
          </h3>
          <div className="border-b-[#233f95] border-b-2 sm:mt-2"></div>
          <div className="mt-3 sm:mt-6 text-[11px] sm:text-xs">
            12:00 PM - 8:00 PM
            <p className="sm:float-right">Online</p>
            <p className="text-xs sm:text-lg">Workshops Commence</p>
          </div>
        </div>

        <div className="w-[33%]">
          <h3 className="text-sm sm:text-3xl font-bold">
            Sunday,<span className="px-4 sm:px-0"></span> February 18
          </h3>
          <div className="border-b-[#233f95] border-b-2 sm:mt-2"></div>
          <div className="mt-3 sm:mt-6 text-[11px] sm:text-xs">
            9:00 AM - 11:30 PM
            <p className="sm:float-right">Cedar HQ</p>
            <p className="text-xs sm:text-lg">Hacker Hour</p>
          </div>

          <div className="mt-3 sm:mt-6 text-[11px] sm:text-xs">
            10:30 AM
            <p className="sm:float-right">Cedar HQ</p>
            <div className="text-lg flex gap-2 items-center">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 2.5V9.5C3 10.6 3.9 11.5 5 11.5H9C9.53043 11.5 10.0391 11.2893 10.4142 10.9142C10.7893 10.5391 11 10.0304 11 9.5V2.5"
                  stroke="#FFE8C7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 2.5V22.5"
                  stroke="#FFE8C7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 15.5V2.5C19.6739 2.5 18.4021 3.02678 17.4645 3.96447C16.5268 4.90215 16 6.17392 16 7.5V13.5C16 14.6 16.9 15.5 18 15.5H21ZM21 15.5V22.5"
                  stroke="#FFE8C7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-xs sm:text-lg">Breakfast Commences</p>
            </div>
          </div>

          <div className="mt-3 sm:mt-6 text-[11px] sm:text-xs">
            11:30 - 12:00 PM
            <p className="sm:float-right">Cedar HQ</p>
            <p className="text-xs sm:text-lg">
              Late Submissions + Judging Preparation
            </p>
          </div>

          <div className="mt-3 sm:mt-6 text-[11px] sm:text-xs">
            3:00 PM - 4:00 PM
            <p className="sm:float-right">Cedar HQ</p>
            <p className="text-xs sm:text-lg">Closing Ceremony</p>
          </div>
        </div>
      </div>
    </div>
  );
}
