import * as React from "react";
import { Timeline, Button, Typography } from "@material-tailwind/react/dist";

export function StepperCustomStyles() {
  const [step, setStep] = React.useState(0);

  return (
    <div className="w-full p-4 mx-auto rounded-xl bg-primary">
      <Timeline
        mode="stepper"
        value={step}
        onChange={(val) => setStep(Number(val))}
        color="secondary"
      >
        <Timeline.Item disabled={step < 0} value={0} className="w-full">
          <Timeline.Header>
            <Timeline.Separator />
            <div className="relative grid w-4 h-4 rounded-full place-items-center bg-secondary"></div>
          </Timeline.Header>
          <Typography
            color="secondary"
            type="small"
            className="mt-2 !font-bold"
          >
            HTML
          </Typography>
        </Timeline.Item>
        <Timeline.Item disabled={step < 1} value={1} className="w-full">
          <Timeline.Header>
            <Timeline.Separator />
            <div className="relative grid w-4 h-4 rounded-full place-items-center bg-secondary"></div>
          </Timeline.Header>
          <Typography
            color="secondary"
            type="small"
            className="mt-2 !font-bold"
          >
            React
          </Typography>
        </Timeline.Item>
        <Timeline.Item disabled={step < 2} value={2} className="w-full">
          <Timeline.Header>
            <Timeline.Separator />
            <div className="relative grid w-4 h-4 rounded-full place-items-center bg-secondary"></div>
          </Timeline.Header>
          <Typography
            color="secondary"
            type="small"
            className="mt-2 !font-bold"
          >
            Vue
          </Typography>
        </Timeline.Item>
        <Timeline.Item disabled={step < 3} value={3} className="w-full">
          <Timeline.Header>
            <div className="relative grid w-4 h-4 rounded-full place-items-center bg-secondary"></div>
          </Timeline.Header>
          <Typography
            color="secondary"
            type="small"
            className="mt-2 !font-bold"
          >
            Svelte
          </Typography>
        </Timeline.Item>
      </Timeline>

      <div className="flex justify-between w-full gap-4 mt-14">
        <Button
          color="secondary"
          disabled={step === 0}
          onClick={() => setStep(step - 1)}
        >
          Previous
        </Button>
        <Button
          variant="solid"
          color="secondary"
          disabled={step === 3}
          onClick={() => setStep(step + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
