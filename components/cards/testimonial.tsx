import { ReactNode } from "react";

// @material-tailwind/react components
import { Card, Typography, CardProps } from "@material-tailwind/react";

// prop-types
interface Props {
  name: string;
  date: string;
  children: ReactNode;
  color?: CardProps["color"];
}

export default function Testimonial({
  name,
  date,
  children,
  color = "transparent",
}: Props) {
  return (
    <Card
      color={color}
      shadow={false}
      className={`rounded-lg p-5 ${
        color === "transparent" || color === "white"
          ? "text-[#1A237E]"
          : "text-white"
      }`}
    >
      <Typography variant="h5" color="inherit" className="mb-0 font-black">
        {name}
      </Typography>
      <div className="mb-5 flex items-center">
        <i className="fa fa-clock mr-2 text-sm opacity-60"></i>
        <Typography
          className={
            color === "transparent" || color === "white"
              ? "opacity-60"
              : "opacity-80"
          }
        >
          {date}
        </Typography>
      </div>
      <Typography
        color="inherit"
        className={
          color === "transparent" || color === "white"
            ? "opacity-60"
            : "opacity-80"
        }
      >
        {children}
      </Typography>
      <div className="mt-5 space-x-0.5">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
    </Card>
  );
}
