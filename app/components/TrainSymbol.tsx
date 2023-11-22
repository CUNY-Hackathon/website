export default function TrainSymbol({
  color,
  size,
  children,
}: {
  color: string;
  size?: number;
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
      default:
        return "";
    }
  }

  function getSize() {
    return size ? ` w-[${size}px] h-[${size}px]` : " w-[50px] h-[50px]";
  }

  return (
    <div
      className={
        "flex justify-center items-center rounded-full" + primary() + getSize()
      }
    >
      <p className={"font-bold" + secondary()}>{children}</p>
    </div>
  );
}
