export default function TrainSymbol({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) {
  function primary() {
    switch (color) {
      case "green":
        return " bg-[#00933c]";
      case "red":
        return " bg-[#ee352e]";
      case "yellow":
        return " bg-[#fccc0a]";
      case "orange":
        return " bg-[#ff6319]";
      default:
        return "";
    }
  }

  function secondary() {
    switch (color) {
      case "green":
        return " text-[#fff]";
      case "red":
        return " text-[#fff]";
      case "yellow":
        return " text-[#000]";
      case "orange":
        return " text-[#fff]";
      default:
        return "";
    }
  }

  return (
    <div
      className={`flex justify-center items-center rounded-full phone:w-[35px] phone:h-[35px] sm:w-[50px] sm:h-[50px] lg:w-[85px] lg:h-[85px] 2xl:w-[110px] 2xl:h-[110px] 3xl:w-[125px] 3xl:h-[125px] ${primary()}`}
    >
      <p
        className={`font-bold phone:text-lg sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ${secondary()}`}
      >
        {children}
      </p>
    </div>
  );
}
