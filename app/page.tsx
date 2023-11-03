import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import Design from "@/components/Design";
import Tools from "@/components/Tools";
import More from "@/components/More";
import CreateAndCollaborate from "@/components/CreateAndCollaborate";
import Integrate from "@/components/Integrate";
import GetSpline from "@/components/GetSpline";
import LovedByTeams from "@/components/LovedByTeams";
import Hiring from "@/components/Hiring";

export default function Home() {
  return (
    <main>
      <Hero />
      <Explore />
      <Companies />
      <Design />
      <Tools />
      <More />
      <CreateAndCollaborate />
      <Integrate />
      <GetSpline />
      <LovedByTeams />
      <Hiring />
    </main>
  );
}
