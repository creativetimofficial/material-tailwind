import { Typography } from "@material-tailwind/react";

export function ImgWithCaption() {
  return (
    <figure>
      <img
        className="h-full w-full rounded-lg"
        src="https://images.unsplash.com/photo-1681121311532-e4882571a74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"
        alt="nature image"
      />
      <Typography as="caption" variant="small" className="mt-2 text-center font-normal">
        Image caption
      </Typography>
    </figure>
  );
}
