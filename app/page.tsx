import { Header, TrainSymbol } from "@/app/components/index";

export default function Home() {
  return (
    <main className="h-full">
      <Header />
      <div className="flex justify-center items-center">
        <h1>HackCUNY 2024</h1>
        <TrainSymbol color="green">1</TrainSymbol>
      </div>
    </main>
  );
}
