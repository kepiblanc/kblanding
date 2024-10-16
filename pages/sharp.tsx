
import DownloadCardContainer from "@/components/common/DownloadCardContainer";
import AppHeader from "@/components/common/AppHeader";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import AppCommunity from "@/components/common/AppCommunity";
import GetStartedDriver from "@/components/common/GetStartedDriver";
import NoCarNoProblem from "@/components/common/NoCarNoProblem";
import SafetyFirst from "@/components/common/SafetyFirst";
import JumbotronSharp from "@/components/modules/Home/Jumbotron/JumbotronSharp";
import SharpBackbone from "@/components/common/SharpBackbone";
import ChooseSharp from "@/components/common/ChooseSharp";

export default function Home() {
  return (
    <>
      <AppHeader pageTitle="Kabukabu | Ride with Ease" />
      <Navbar />
      <div className="bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url(/home/sharp-hero-bg.png)`}}>
        <JumbotronSharp />
      </div>
      <SharpBackbone />
      <ChooseSharp />
      <GetStartedDriver />
      <AppCommunity />
      <DownloadCardContainer />
      <Footer />
    </>
  );
}
