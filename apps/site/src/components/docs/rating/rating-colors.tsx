import { Rating } from "@material-tailwind/react";

export function RatingColors() {
  return (
    <div className="flex flex-col gap-4">
      <Rating value={4} color="primary" />
      <Rating value={4} color="secondary" />
      <Rating value={4} color="info" />
      <Rating value={4} color="success" />
      <Rating value={4} color="warning" />
      <Rating value={4} color="error" />
    </div>
  );
}
