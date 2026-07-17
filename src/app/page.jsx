import Image from "next/image";
import Banner from "./Home/Banner";
import HomeCards from "./Home/HomeCards";
import PremiumDevelopers from "./Home/PremiumDevelopers";
import SupportCenter from "./Home/SupportCenter";
import Recommendation from "./Home/Recommendation";

export default function Home() {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>

      <section>
        <Recommendation></Recommendation>
      </section>

      <section>
        <PremiumDevelopers></PremiumDevelopers>
      </section>

      <section>
        <HomeCards></HomeCards>
      </section>

      <section>
        <SupportCenter></SupportCenter>
      </section>

      
    </div>
  );
}
