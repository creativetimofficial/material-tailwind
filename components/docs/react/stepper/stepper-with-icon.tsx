import React from "react";
import { HomeIcon, CogIcon, UserIcon } from "@heroicons/react/24/outline";
import { Stepper, Step, Button } from "@material-tailwind/react";

export function StepperWithIcon() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="relative grid h-screen w-screen p-24">
      <div>
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step onClick={() => setActiveStep(0)}>
            <HomeIcon className="h-5 w-5" />
          </Step>
          <Step onClick={() => setActiveStep(1)}>
            <UserIcon className="h-5 w-5" />
          </Step>
          <Step onClick={() => setActiveStep(2)}>
            <CogIcon className="h-5 w-5" />
          </Step>
        </Stepper>
        <div className="mt-16 flex justify-between">
          <Button onClick={handlePrev} disabled={isFirstStep}>
            Prev
          </Button>
          <Button onClick={handleNext} disabled={isLastStep}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
