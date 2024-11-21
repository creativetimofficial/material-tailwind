"use client";
import { Radio, Typography } from "@material-tailwind/react";

export function RadioWithLink() {
  return (
    <Radio>
      <div className="flex items-center gap-2">
        <Radio.Item id="radio-link-agree">
          <Radio.Indicator />
        </Radio.Item>
        <Typography
          as="label"
          htmlFor="radio-link-agree"
          className="flex gap-1 text-foreground"
        >
          I agree with the
          <Typography as="a" href="#" color="primary">
            terms and conditions
          </Typography>
        </Typography>
      </div>
      <div className="flex items-center gap-2">
        <Radio.Item id="radio-link-disagree">
          <Radio.Indicator />
        </Radio.Item>
        <Typography
          as="label"
          htmlFor="radio-link-disagree"
          className="flex gap-1 text-foreground"
        >
          I disagree with the
          <Typography as="a" href="#" color="primary">
            terms and conditions
          </Typography>
        </Typography>
      </div>
    </Radio>
  );
}
