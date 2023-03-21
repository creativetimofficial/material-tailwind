import React from "react";
import { Slider } from "@material-tailwind/react";

export default function Test() {
  const [value, setValue] = React.useState(50);

  console.log(value);
  return (
    <div className="grid h-screen w-screen place-items-center px-24">
      <Slider
        color="green"
        size="lg"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </div>
  );
}

/**
 * showing warning if only value is provided
 * showing warning if only onChange is provided
 */
