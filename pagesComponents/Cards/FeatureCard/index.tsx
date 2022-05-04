import { ReactNode } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography
} from "../../../packages/material-tailwind-react/src";

interface FeatureCardProps {
  icon: string;
  iconClass?: string;
  title: string;
  className?: string;
  children: ReactNode;
}

export default function FeatureCard({
  icon,
  iconClass = "material-icons",
  title,
  className,
  children
}: FeatureCardProps) {
  return (
    <Card
      className={`shadow-lg bg-white/80 backdrop-saturate-200 backdrop-blur-2xl border border-white/80 ${className}`}
    >
      <CardHeader
        shadow={false}
        className="bg-[#1A237E] grid place-items-center w-12 h-12 -mb-3 mx-6 !rounded-lg"
      >
        <i className={`${iconClass} text-xl relative text-white`}>{icon}</i>
      </CardHeader>
      <CardBody className="mt-1">
        <Typography variant="h5" className="text-[#1A237E] mb-2">
          {title}
        </Typography>
        <Typography className="font-light text-[#1A237E]/60">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}
