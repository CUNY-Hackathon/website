import { Header } from "@/app/components";
import { Main, About } from "@/app/sections";

export default function Home() {
  return (
    <main className="h-full ">
      <Header />
      <Main />
      <About />
    </main>
  );
}
