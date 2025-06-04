import Aboutus from "./components/pages/home/Aboutus";
import WorldModel from "./components/pages/technology/WorldModel";
import TechBg from "./components/pages/technology/TechBg";
import TechDescription from "./components/pages/technology/TechDescription";

export default function Home() {
  return (
    <section>
      <TechBg />
      <WorldModel />
      <TechDescription />
      <Aboutus />
    </section>
  );
}
