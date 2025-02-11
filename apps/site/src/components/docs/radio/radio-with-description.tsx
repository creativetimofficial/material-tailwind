import { Radio, Typography } from "@material-tailwind/react";

export default function RadioWithDescription() {
  return (
    <Radio className="gap-4">
      <div className="flex gap-2">
        <Radio.Item id="radio-description-html">
          <Radio.Indicator />
        </Radio.Item>
        <label htmlFor="radio-description-html" className="-translate-y-1">
          <Typography color="default" className="font-semibold">
            HTML Version
          </Typography>
          <Typography type="small" className="text-foreground">
            @material-tailwind/html, packed with rich components and widgets.
          </Typography>
        </label>
      </div>
      <div className="flex gap-2">
        <Radio.Item id="radio-description-react">
          <Radio.Indicator />
        </Radio.Item>
        <label htmlFor="radio-description-react" className="-translate-y-1">
          <Typography color="default" className="font-semibold">
            React Version
          </Typography>
          <Typography type="small" className="text-foreground">
            @material-tailwind/react, packed with rich components and widgets.
          </Typography>
        </label>
      </div>
    </Radio>
  );
}
