import React from "react";
import {
  Stepper,
  Step,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

export function CustomStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className="w-full py-4 px-8">
      <CardHeader
        floated={false}
        variant="gradient"
        color="gray"
        className="m-0 grid h-24 place-items-center"
      >
        <div className="w-full px-20 pt-4 pb-8">
          <Stepper
            activeStep={activeStep}
            lineClassName="bg-white/50"
            activeLineClassName="bg-white"
          >
            <Step
              className="h-4 w-4 cursor-pointer !bg-blue-gray-50 text-white/75"
              activeClassName="ring-0 !bg-white text-white"
              completedClassName="!bg-white text-white"
              onClick={() => setActiveStep(0)}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h6" color="inherit">
                  HTML
                </Typography>
              </div>
            </Step>
            <Step
              className="h-4 w-4 cursor-pointer !bg-blue-gray-50 text-white/75"
              activeClassName="ring-0 !bg-white text-white"
              completedClassName="!bg-white text-white"
              onClick={() => setActiveStep(1)}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h6" color="inherit">
                  React
                </Typography>
              </div>
            </Step>
            <Step
              className="h-4 w-4 cursor-pointer !bg-blue-gray-50 text-white/75"
              activeClassName="ring-0 !bg-white text-white"
              completedClassName="!bg-white text-white"
              onClick={() => setActiveStep(2)}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h6" color="inherit">
                  Vue
                </Typography>
              </div>
            </Step>
            <Step
              className="h-4 w-4 cursor-pointer !bg-blue-gray-50 text-white/75"
              activeClassName="ring-0 !bg-white text-white"
              completedClassName="!bg-white text-white"
              onClick={() => setActiveStep(3)}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h6" color="inherit">
                  Svelte
                </Typography>
              </div>
            </Step>
          </Stepper>
        </div>
      </CardHeader>
    </div>
  );
}
