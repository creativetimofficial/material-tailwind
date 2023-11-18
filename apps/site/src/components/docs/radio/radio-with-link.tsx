import { Radio, Typography } from "@material-tailwind/react/dist";

export function RadioWithLink() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Radio name="terms" id="radio-link-agreen" />
        <Typography
          as="label"
          htmlFor="radio-link-agreen"
          className="flex gap-1 text-gray-500 dark:text-gray-400"
        >
          I agree with the
          <Typography as="a" href="#" color="info">
            terms and conditions
          </Typography>
        </Typography>
      </div>
      <div className="flex items-center gap-2">
        <Radio name="terms" id="radio-link-disagree" />
        <Typography
          as="label"
          htmlFor="radio-link-disagree"
          className="flex gap-1 text-gray-500 dark:text-gray-400"
        >
          I disagree with the
          <Typography as="a" href="#" color="info">
            terms and conditions
          </Typography>
        </Typography>
      </div>
    </div>
  );
}
