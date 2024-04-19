"use client";

import * as React from "react";
import Link from "next/link";
import { Card, Tooltip } from "@material-tailwind/react";

interface Props {
  name: string;
  route: string;
  children: React.ReactNode;
}

export function FrameworkCard({ name, route, children }: Props) {
  return (
    <Tooltip placement="bottom">
      <Tooltip.Trigger>
        <Link href={route} className="grid h-full w-full">
          <Card
            variant="outline"
            color="secondary"
            className="grid min-h-[160px] place-items-center p-2 transition-transform hover:scale-105"
          >
            {children}
          </Card>
        </Link>
      </Tooltip.Trigger>
      <Tooltip.Content>
        {name}
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip>
  );
}

export default FrameworkCard;
