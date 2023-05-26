import { NextPage } from "next";
import React from "react";

import Header from "@/components/modules/PrivacyPolicy/Header";
import Container from "@/components/common/Container";
import DownloadCardContainer from "@/components/common/DownloadCardContainer";
import Footer from "@/components/common/Footer";
import PolicyBody from "@/components/modules/PrivacyPolicy/PolicyBody";
import AppHeader from "@/components/common/AppHeader";

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <AppHeader pageTitle="Kabukabu | Privacy Policy" />
      <Container>
        <Header />
        <PolicyBody />
        <DownloadCardContainer />
      </Container>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
