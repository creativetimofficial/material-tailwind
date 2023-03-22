import { Rating } from "@material-tailwind/react";

export function RatingColors() {
  return (
    <div className="flex flex-col gap-4">
      <Rating unratedColor="amber" ratedColor="amber" />
      <Rating unratedColor="blue" ratedColor="blue" />
      <Rating unratedColor="green" ratedColor="green" />
      <Rating unratedColor="red" ratedColor="red" />
    </div>
  );
}
