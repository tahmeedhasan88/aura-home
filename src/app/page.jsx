import Image from "next/image";
import Banner from "./Home/Banner";
import HomeCards from "./Home/HomeCards";

export default function Home() {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>

      <section>
        <HomeCards></HomeCards>
      </section>


      
    </div>
  );
}
