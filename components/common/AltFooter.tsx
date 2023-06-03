import React, { FC } from "react";

import Logo from "./Logo";
import AppStoreButton from "./AppStoreButton";
import Container from "./Container";

const AltFooter: FC = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <Container>
        <div className="flex justify-between items-center py-6 max-sm:flex-col gap-4">
          <Logo />
          <div className="flex items-center gap-6">
            <AppStoreButton store="android" variant="dark" />
            <AppStoreButton store="apple" variant="dark" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AltFooter;
