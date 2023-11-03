import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import Design from "@/components/Design";
import Tools from "@/components/Tools";
import More from "@/components/More";

export default function Home() {
  return (
    <main>
      <Hero />
      <Explore />
      <Companies />
      <Design />
      <Tools />
      <More />
    </main>
  );
}
