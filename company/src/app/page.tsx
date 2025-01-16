import Footer from "./_Footer/page";
import Navbar from "./_Navbar/page";
import Banner from "./Banner/page";
import Hero from "./Hero/page";
import MoneyLeaksSection from "./MoneyLeaksSection/page";
import PrivacyPrinciples from "./PrivacyPrinciples/page";
import Project from "./Project/page";

import StatsSection from "./State/page";
import TeamManagementBanner from "./TeamManagementBanner/page";
import Testimonial from "./testonomial/page";
import Tracking from "./Tracking/page";

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

<Project/>

<Tracking/>
      <Footer/>
    </div>
  );
}
