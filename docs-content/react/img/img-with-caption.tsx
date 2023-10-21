import { Typography } from "@material-tailwind/react";

export function ImgWithCaption() {
  return (
    <figure>
      <img
        className="h-96 w-full rounded-lg object-cover object-center"
        src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        alt="nature image"
      />
      <Typography as="caption" variant="small" className="mt-2 text-center font-normal">
        Image caption
      </Typography>
    </figure>
  );
}
