import React, { FC } from "react";

import Logo from "@/components/common/Logo";

const Header: FC = () => {
  return (
    <>
      <div className="flex flex-col items-center pt-6 gap-16">
        <Logo />
        <h2 className="text-4xl text-center font-bold">Privacy Policy</h2>
      </div>
    </>
  );
};

export default Header;
