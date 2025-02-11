import { Radio, Typography } from "@material-tailwind/react";
import { Check, Star, StarSolid } from "iconoir-react";

export default function RadioWithCustomIcon() {
  return (
    <Radio>
      <div className="flex items-center gap-2">
        <Radio.Item
          id="custom-icon-html"
          className="bg-transparent data-[checked=true]:bg-transparent"
        >
          <Radio.Indicator className="relative left-0 top-0 opacity-100">
            <Star className="absolute inset-0 h-5 w-5 text-primary opacity-100 group-data-[checked=true]:opacity-0" />
            <StarSolid className="absolute inset-0 h-5 w-5 text-primary opacity-0 group-data-[checked=true]:opacity-100" />
          </Radio.Indicator>
        </Radio.Item>
        <Typography
          as="label"
          htmlFor="custom-icon-html"
          className="text-foreground"
        >
          HTML
        </Typography>
      </div>
      <div className="flex items-center gap-2">
        <Radio.Item
          id="custom-icon-react"
          className="bg-transparent data-[checked=true]:bg-transparent"
        >
          <Radio.Indicator className="relative left-0 top-0 opacity-100">
            <Star className="absolute inset-0 h-5 w-5 text-primary opacity-100 group-data-[checked=true]:opacity-0" />
            <StarSolid className="absolute inset-0 h-5 w-5 text-primary opacity-0 group-data-[checked=true]:opacity-100" />
          </Radio.Indicator>
        </Radio.Item>
        <Typography
          as="label"
          htmlFor="custom-icon-react"
          className="text-foreground"
        >
          React
        </Typography>
      </div>
    </Radio>
  );
}
