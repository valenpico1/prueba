import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="h-screen w-screen relative">
      <Header />
      <Hero />
    </main>
  );
}
