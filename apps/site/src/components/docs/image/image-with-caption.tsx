import { Typography } from "@material-tailwind/react";

export function ImageWithCaption() {
  return (
    <figure>
      <img
        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/mt-demo.jpg"
        alt="nature-image"
        className="h-96 w-full rounded-lg object-cover object-center"
      />
      <Typography as="caption" type="small" className="mt-2 block text-center">
        Image Caption
      </Typography>
    </figure>
  );
}
