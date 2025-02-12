import { Radio, Typography } from "@material-tailwind/react";
import { Check } from "iconoir-react";

export default function CustomRadio() {
  return (
    <Radio>
      <div className="flex items-center gap-2">
        <Radio.Item id="custom-html" className="rounded">
          <Radio.Indicator>
            <Check className="h-4 w-4 stroke-2" />
          </Radio.Indicator>
        </Radio.Item>
        <Typography
          as="label"
          htmlFor="custom-html"
          className="text-foreground"
        >
          HTML
        </Typography>
      </div>
      <div className="flex items-center gap-2">
        <Radio.Item id="custom-react" className="rounded">
          <Radio.Indicator>
            <Check className="h-4 w-4 stroke-2" />
          </Radio.Indicator>
        </Radio.Item>
        <Typography
          as="label"
          htmlFor="custom-react"
          className="text-foreground"
        >
          React
        </Typography>
      </div>
    </Radio>
  );
}
