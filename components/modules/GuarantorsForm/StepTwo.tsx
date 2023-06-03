import React, { FC } from "react";

import Logo from "@/components/common/Logo";
import ImageUpload from "./ImageUpload";

const StepTwo: FC = () => {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center py-4 pt-10">
        <Logo />
      </div>

      <div className="max-w-[400px] mx-auto">
        <ImageUpload />
      </div>
    </div>
  );
};

export default StepTwo;
