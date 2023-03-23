import { Slider } from "@material-tailwind/react";

export function SliderSizes() {
  return (
    <div className="flex w-full flex-col gap-8">
      <Slider size="sm" defaultValue={50} />
      <Slider size="md" defaultValue={50} />
      <Slider size="lg" defaultValue={50} />
    </div>
  );
}
