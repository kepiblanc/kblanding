import Head from "next/head";
import Jumbotron from "@/components/modules/Home/Jumbotron/Jumbotron";
import RiderDriverContainer from "@/components/modules/Home/RiderDriverContainer";
import InstructionContainer from "@/components/modules/Home/InstructionContainer";
import DownloadCardContainer from "@/components/common/DownloadCardContainer";
import AppHeader from "@/components/common/AppHeader";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import WhyYouLoveUs from "@/components/common/WhyYouLoveUs";
import BuildBetterCommunity from "@/components/common/BuildBetterCommunity";
import ThingsWeDo from "@/components/common/ThingsWeDo";
import AppCommunity from "@/components/common/AppCommunity";

export default function Home() {
  return (
    <>
      <AppHeader pageTitle="Kabukabu | Ride with Ease" />
      <Navbar />
      <div className="bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url(/home/rider-hero-bg.png)`}}>
        <Jumbotron />
      </div>
      <WhyYouLoveUs />
      <BuildBetterCommunity />
      <ThingsWeDo />
      <AppCommunity />
      <DownloadCardContainer />
      <Footer />
    </>
  );
}
