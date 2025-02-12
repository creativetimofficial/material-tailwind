import * as React from "react";
import { Timeline, Button } from "@material-tailwind/react";

export default function StepperWithDots() {
  const [step, setStep] = React.useState(0);

  return (
    <div className="w-full">
      <Timeline
        mode="stepper"
        value={step}
        onChange={(val: any) => setStep(Number(val))}
      >
        <Timeline.Item disabled={step < 0} value={0} className="w-full">
          <Timeline.Header>
            <Timeline.Separator />
            <Timeline.Icon className="h-4 w-4" />
          </Timeline.Header>
        </Timeline.Item>
        <Timeline.Item disabled={step < 1} value={1} className="w-full">
          <Timeline.Header>
            <Timeline.Separator />
            <Timeline.Icon className="h-4 w-4" />
          </Timeline.Header>
        </Timeline.Item>
        <Timeline.Item disabled={step < 2} value={2}>
          <Timeline.Header>
            <Timeline.Icon className="h-4 w-4" />
          </Timeline.Header>
        </Timeline.Item>
      </Timeline>

      <div className="mt-14 flex w-full justify-between gap-4">
        <Button disabled={step === 0} onClick={() => setStep(step - 1)}>
          Previous
        </Button>
        <Button
          variant="solid"
          disabled={step === 2}
          onClick={() => setStep(step + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
