
import DownloadCardContainer from "@/components/common/DownloadCardContainer";
import AppHeader from "@/components/common/AppHeader";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import JumbotronDriver from "@/components/modules/Home/Jumbotron/JumbotronDriver";
import DriversBackbone from "@/components/common/DriversBackbone";
import AppCommunity from "@/components/common/AppCommunity";
import MakeMoney from "@/components/common/MakeMoney";
import GetStartedDriver from "@/components/common/GetStartedDriver";
import NoCarNoProblem from "@/components/common/NoCarNoProblem";
import SafetyFirst from "@/components/common/SafetyFirst";

export default function Home() {
  return (
    <>
      <AppHeader pageTitle="Kabukabu | Ride with Ease" />
      <Navbar />
      <div className="bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url(/home/driver-hero-bg.png)`}}>
        <JumbotronDriver />
      </div>
      <DriversBackbone />
      <MakeMoney />
      <GetStartedDriver />
      <NoCarNoProblem />
      <SafetyFirst />
      <AppCommunity />
      <DownloadCardContainer />
      <Footer />
    </>
  );
}
