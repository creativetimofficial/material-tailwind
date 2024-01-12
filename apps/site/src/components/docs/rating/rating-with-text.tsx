import React from "react";
import { Rating, Typography } from "@material-tailwind/react/dist";

export function RatingWithText() {
  const [rated, setRated] = React.useState(4);

  return (
    <div className="flex items-center gap-2">
      <Typography color="primary" className="font-semibold">
        {rated}.7
      </Typography>
      <Rating value={4} onChange={(value) => setRated(value)} />
      <Typography color="primary" className="font-semibold">
        Based on 134 Reviews
      </Typography>
    </div>
  );
}
