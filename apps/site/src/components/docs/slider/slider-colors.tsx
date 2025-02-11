import { Slider } from "@material-tailwind/react";

export default function SliderColors() {
  return (
    <div className="flex w-64 flex-col gap-8">
      <Slider color="primary">
        <Slider.Range />
        <Slider.Thumb />
      </Slider>
      <Slider color="secondary">
        <Slider.Range />
        <Slider.Thumb />
      </Slider>
      <Slider color="info">
        <Slider.Range />
        <Slider.Thumb />
      </Slider>
      <Slider color="success">
        <Slider.Range />
        <Slider.Thumb />
      </Slider>
      <Slider color="warning">
        <Slider.Range />
        <Slider.Thumb />
      </Slider>
      <Slider color="error">
        <Slider.Range />
        <Slider.Thumb />
      </Slider>
    </div>
  );
}
