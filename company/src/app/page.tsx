
import Banner from "./Banner/page";
import Hero from "./Hero/page";
import MoneyLeaksSection from "./MoneyLeaksSection/page";
import PrivacyPrinciples from "./PrivacyPrinciples/page";
import StatsSection from "./State/page";
import TeamManagementBanner from "./TeamManagementBanner/page";
import Testonomial from "./testonomial/page";

export default function Home() {
  return (
    <div className=" mt-[77px] ">
    
    
    
  
<Hero/>

<StatsSection/>


<Testonomial/>

<Banner/>

<TeamManagementBanner/>

<MoneyLeaksSection/>

<PrivacyPrinciples/>
    </div>
  );
}
