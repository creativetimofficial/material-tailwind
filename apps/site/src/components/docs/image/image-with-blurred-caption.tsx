import { Card, Typography } from "@material-tailwind/react";

export function ImageWithBlurredCaption() {
  return (
    <figure className="relative h-96 w-full">
      <img
        src="https://dub.sh/Y0NxRWv"
        alt="nature-image"
        className="h-full w-full rounded-xl object-cover object-center"
      />
      <Card
        as="figcaption"
        className="absolute bottom-4 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 bg-opacity-75 saturate-200 backdrop-blur-md"
      >
        <Card.Body className="flex justify-between px-4">
          <div>
            <Typography type="h6">Sara Lamalo</Typography>
            <Typography className="mt-1 text-foreground">
              20 July 2022
            </Typography>
          </div>
          <Typography className="font-bold">Growth</Typography>
        </Card.Body>
      </Card>
    </figure>
  );
}
