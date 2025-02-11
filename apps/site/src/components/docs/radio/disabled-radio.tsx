import { Radio, Typography } from "@material-tailwind/react";

export default function DisabledRadio() {
  return (
    <Radio>
      <div className="flex items-center gap-2">
        <Radio.Item disabled id="html">
          <Radio.Indicator />
        </Radio.Item>
        <Typography as="label" htmlFor="html" className="text-foreground">
          HTML
        </Typography>
      </div>
      <div className="flex items-center gap-2">
        <Radio.Item disabled id="react">
          <Radio.Indicator />
        </Radio.Item>
        <Typography as="label" htmlFor="react" className="text-foreground">
          React
        </Typography>
      </div>
    </Radio>
  );
}
