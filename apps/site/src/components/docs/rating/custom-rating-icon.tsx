import { Rating } from "@material-tailwind/react";
import { Heart, HeartSolid } from "iconoir-react";

export function CustomRatingIcon() {
  return <Rating value={4} unratedIcon={Heart} ratedIcon={HeartSolid} />;
}
