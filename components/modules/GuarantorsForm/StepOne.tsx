import React, { FC } from "react";

import Logo from "@/components/common/Logo";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/common/Container";

interface Props {
  handleNextStep: () => void;
  handleCancel: () => void;
}

const StepOne: FC<Props> = ({ handleNextStep, handleCancel }) => {
  return (
    <Container>
      <div className="min-h-screen px-3">
        <div className="flex justify-center py-4 pt-10">
          <Logo />
        </div>
        <div>
          <h1 className="text-center pt-20 text-5xl font-bold">
            Guarantor's Form
          </h1>
        </div>

        <div className="max-w-[600px] mx-auto pt-16">
          <p className="text-center leading-9 text-base font-semibold">
            John Doe has mentioned you as his guarantor when applying to drive
            with us at Kabukabu. If you confirm this, kindly tap “Continue” and
            fill our Guarantor’s Form. If you do not confirm this, kindly tap “I
            do not confirm”
          </p>

          <div className="flex flex-col gap-4 pt-14">
            <Button
              title="Continue"
              size="large"
              className="w-full"
              onClick={handleNextStep}
            />
            <Button
              title="I do not confirm"
              color="tetiary"
              size="large"
              className="w-full !bg-[#F1F1F1] !text-[#EF2C5B]"
              onClick={handleCancel}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default StepOne;
