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
      className={
        "flex justify-center items-center rounded-full w-[125px] h-[125px]" +
        primary()
      }
    >
      <p className={"font-bold text-6xl" + secondary()}>{children}</p>
    </div>
  );
}
