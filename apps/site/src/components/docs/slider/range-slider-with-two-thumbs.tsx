import * as React from "react";
import { Slider } from "@material-tailwind/react";

export function RangeSliderWithTwoThumbs() {
  const [value, setValue] = React.useState([20, 80]);

  return (
    <div className="w-80">
      <Slider value={value} onValueChange={setValue}>
        <Slider.Range />
        <Slider.Thumb />
        <Slider.Tick />
      </Slider>
    </div>
  );
}
