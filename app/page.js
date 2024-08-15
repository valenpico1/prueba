import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Horarios from "../components/Horarios";
export default function Home() {
  return (
    <main className="h-screen w-screen relative" style={{ backgroundColor: '#f6ede4' }}>
      <Header />
      <Hero />
      <Horarios />
    </main>
  );
}
