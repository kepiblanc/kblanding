import AltFooter from "@/components/common/AltFooter";
import Logo from "@/components/common/Logo";
import React, { FC } from "react";

const UserDidNotConfirm: FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <div className="flex justify-center py-4 pt-10">
          <Logo />
        </div>
        <div className="max-w-[600px] mx-auto pt-16">
          <p className="pt-20 text-center text-5xl">🙏🏽🙏🏽</p>
          <h1 className="text-center pt-4 text-5xl font-bold pb-4">
            Thank you
          </h1>
          <p className="text-center leading-9 text-base font-semibold">
            John Doe has mentioned you as his guarantor when applying to drive
            with us at Kabukabu. If you confirm this, kindly tap “Continue” and
            fill our Guarantor’s Form. If you do not confirm this, kindly tap “I
            do not confirm”
          </p>
        </div>
      </div>

      <AltFooter />
    </div>
  );
};

export default UserDidNotConfirm;
