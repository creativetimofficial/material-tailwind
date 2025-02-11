import { Slider } from "@material-tailwind/react";

export default function SliderDemo() {
  return (
    <div className="w-64">
      <Slider>
        <Slider.Range />
        <Slider.Thumb />
      </Slider>
    </div>
  );
}
