import { ReactNode } from "react";
import {
  Card,
  Typography,
  CardProps
} from "../../../packages/material-tailwind-react/src";

interface TestimonialCardProps {
  name: string;
  date: string;
  children: ReactNode;
  color?: CardProps["color"];
}

export default function TestimonialCard({
  name,
  date,
  children,
  color = "transparent"
}: TestimonialCardProps) {
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
      <Typography variant="h5" color="inherit" className="font-black mb-0">
        {name}
      </Typography>
      <div className="flex items-center mb-5">
        <i className="fa fa-clock text-sm opacity-60 mr-2"></i>
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
      <div className="space-x-0.5 mt-5">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
    </Card>
  );
}
