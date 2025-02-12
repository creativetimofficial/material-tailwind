import { Card, Typography } from "@material-tailwind/react";

export default function ImageWithBlurredCaption() {
  return (
    <figure className="relative h-96 w-full">
      <img
        src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80" 
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
