import { Slider } from "@material-tailwind/react";

export function SliderColors() {
  return (
    <div className="flex w-96 flex-col gap-8">
      <Slider color="blue" defaultValue={50} />
      <Slider color="red" defaultValue={50} />
      <Slider color="green" defaultValue={50} />
      <Slider color="amber" defaultValue={50} />
    </div>
  );
}
