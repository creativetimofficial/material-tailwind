import * as React from "react";
import { Rating, Typography } from "@material-tailwind/react";

export function RatingWithText() {
  const [rated, setRated] = React.useState(4);

  return (
    <div className="flex items-center gap-2">
      <Typography color="primary" className="font-semibold">
        {rated}
      </Typography>
      <Rating value={4} onValueChange={(value) => setRated(value)} />
      <Typography color="default" className="font-semibold">
        Based on 134 Reviews
      </Typography>
    </div>
  );
}
