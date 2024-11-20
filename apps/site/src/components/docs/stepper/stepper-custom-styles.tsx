import * as React from "react";
import { Timeline, Card } from "@material-tailwind/react";

export default function StepperCustomStyles() {
  const [step, setStep] = React.useState(0);

  return (
    <Card color="primary" className="mx-auto w-full rounded-full p-6">
      <Timeline
        mode="stepper"
        value={step}
        onValueChange={(val) => setStep(Number(val))}
      >
        <Timeline.Item value={0} className="w-full">
          <Timeline.Header>
            <Timeline.Separator className="bg-gray-300 group-data-[completed=true]:bg-white" />
            <Timeline.Icon className="h-4 w-4 bg-gray-300 group-data-[active=true]:bg-white group-data-[completed=true]:bg-white" />
          </Timeline.Header>
        </Timeline.Item>
        <Timeline.Item value={1} className="w-full">
          <Timeline.Header>
            <Timeline.Separator className="bg-gray-300 group-data-[completed=true]:bg-white" />
            <Timeline.Icon className="h-4 w-4 bg-gray-300 group-data-[active=true]:bg-white group-data-[completed=true]:bg-white" />
          </Timeline.Header>
        </Timeline.Item>
        <Timeline.Item value={2} className="w-full">
          <Timeline.Header>
            <Timeline.Separator className="bg-gray-300 group-data-[completed=true]:bg-white" />
            <Timeline.Icon className="h-4 w-4 bg-gray-300 group-data-[active=true]:bg-white group-data-[completed=true]:bg-white" />
          </Timeline.Header>
        </Timeline.Item>
        <Timeline.Item value={3}>
          <Timeline.Header>
            <Timeline.Icon className="h-4 w-4 bg-gray-300 group-data-[active=true]:bg-white group-data-[completed=true]:bg-white" />
          </Timeline.Header>
        </Timeline.Item>
      </Timeline>
    </Card>
  );
}
