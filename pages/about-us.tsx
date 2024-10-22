import { NextPage } from "next";
import React from "react";

import AppHeader from "@/components/common/AppHeader";
import Container from "@/components/common/Container";
import DownloadCardContainer from "@/components/common/DownloadCardContainer";
import Footer from "@/components/common/Footer";
import CoreStrengthContainer from "@/components/modules/AboutUs/CoreStrengthContainer";
import coreStrengthData from "../json_data/core-stength.json";

import { motion } from "framer-motion";
import WhyKabukabu from "@/components/modules/AboutUs/WhyKabukabu";
import MissionVisionCardContainer from "@/components/modules/AboutUs/MissionVisionCardContainer";
import missionVision from "../json_data/mission-vision.json";
import Intro from "@/components/modules/AboutUs/Intro";
import Banner from "@/components/modules/AboutUs/Banner";
import Navbar from "@/components/common/Navbar";
import JumbotronAbout from "@/components/modules/Home/Jumbotron/JumbotronAbout";
import Redefining from "@/components/common/Redefining";
import OurMission from "@/components/common/OurMission";
import SetUsApart from "@/components/common/SetUsApart";
import OurServices from "@/components/common/OurServices";
import Principles from "@/components/common/Principles";
import AppCommunity from "@/components/common/AppCommunity";
import OurVision from "@/components/common/OurVision";
import OurPeople from "@/components/common/OurPeople";

const AboutUs: NextPage = () => {
  return (
    <>
      <AppHeader pageTitle="Kabukabu | About Kabukabu" />
      <Navbar />
      <div className="bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url(/home/about-hero-bg.png)`}}>
        <JumbotronAbout />
      </div>
      <Redefining />
      <OurMission />
      <OurServices />
      <Principles />
      <OurVision />
      <OurPeople />
      <AppCommunity />
      <DownloadCardContainer />
      <Footer />
    </>
  );
};

export default AboutUs;
