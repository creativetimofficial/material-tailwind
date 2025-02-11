import { Slider } from "@material-tailwind/react";

export default function SliderSizes() {
  return (
    <div className="flex w-64 flex-col gap-8">
      <Slider size="sm">
        <Slider.Range />
        <Slider.Thumb />
      </Slider>
      <Slider size="md">
        <Slider.Range />
        <Slider.Thumb />
      </Slider>
      <Slider size="lg">
        <Slider.Range />
        <Slider.Thumb />
      </Slider>
    </div>
  );
}
