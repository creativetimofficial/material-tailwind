import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";

export default function StepperWithDots() {
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
          <Step className="h-4 w-4" onClick={() => setActiveStep(0)} />
          <Step className="h-4 w-4" onClick={() => setActiveStep(1)} />
          <Step className="h-4 w-4" onClick={() => setActiveStep(2)} />
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
