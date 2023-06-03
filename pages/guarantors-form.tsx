import { NextPage } from "next";
import React, { useState } from "react";

import StepOne from "@/components/modules/GuarantorsForm/StepOne";
import StepTwo from "@/components/modules/GuarantorsForm/StepTwo";
import StepThree from "@/components/modules/GuarantorsForm/StepThree";
import Container from "@/components/common/Container";

const GuarantorsForm: NextPage = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <Container>
      {currentStep === 1 && (
        <StepOne
          handleNextStep={() => {
            setCurrentStep((step) => (step = 2));
          }}
          handleCancel={()=>{}}
        />
      )}
      {currentStep === 2 && <StepTwo />}
      {currentStep === 3 && <StepThree />}
    </Container>
  );
};

export default GuarantorsForm;