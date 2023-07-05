import React, { FC } from "react";

import Card from "@/components/common/Card";

const Intro: FC = () => {
  return (
    <div className="px-8 mt-[50px]">
      <Card bg="#FFF5D8">
        <div className="px-4">
          <p className="leading-10 text-base text-center">
            Kabukabu is an easy-to-use ride-hailing platform providing safe
            secure, convenient, affordable, and efficient logistic solutions to
            users nationwide. We strive to become the best e-logistic service
            trusted by Nigerians and African countries as a whole. We provide
            safe and profitable environments for our drivers also where they can
            drive and earn successfully.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Intro;
