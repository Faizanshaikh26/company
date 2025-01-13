import Footer from "./_Footer/page";
import Navbar from "./_Navbar/page";
import Banner from "./Banner/page";
import Hero from "./Hero/page";
import MoneyLeaksSection from "./MoneyLeaksSection/page";
import PrivacyPrinciples from "./PrivacyPrinciples/page";
import StatsSection from "./State/page";
import TeamManagementBanner from "./TeamManagementBanner/page";
import Testimonial from "./testonomial/page";

export default function Home() {
  return (
    <div className="">

      <Navbar/>
      <Hero />

      <StatsSection />

      <Testimonial />

      <Banner />

      <TeamManagementBanner />

      <MoneyLeaksSection />

      <PrivacyPrinciples />

      <Footer/>
    </div>
  );
}
