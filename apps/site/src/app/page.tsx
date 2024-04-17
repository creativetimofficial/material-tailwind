"use client";

import { Timeline, Typography } from "@material-tailwind/react/dist";
import { Bell, DollarCircle, HomeAlt, Rocket } from "iconoir-react";

export default function Page() {
  return (
    <Timeline color="secondary" orientation="vertical">
      <Timeline.Item>
        <Timeline.Header>
          <Timeline.Separator />
          <Timeline.Icon className="h-9 w-9">
            <Rocket className="h-5 w-5 rotate-45" />
          </Timeline.Icon>
        </Timeline.Header>
        <Timeline.Body>
          <Typography type="h6" color="primary">
            v2.1.9
          </Typography>
          <Typography className="mb-4 text-foreground">
            February 8, 2024
          </Typography>
          <div>
            <Typography color="primary" className="mb-1 text-lg font-bold">
              Patch Changes
            </Typography>
            <ul className="mb-4 ml-4 list-disc space-y-1.5 text-foreground">
              <li>
                Update accordion component to make it possible to disable the
                animation.
              </li>
              <li>
                Fix select component issue while there is only one option
                available.
              </li>
              <li>Add red asterisk for required textarea component.</li>
              <li>Fix the prop-types issue for menu component.</li>
              <li>
                Fix classname override issue for all components while there is
                default props classname.
              </li>
            </ul>
            <Typography color="primary" className="mb-1 text-lg font-bold">
              Docs Changes
            </Typography>
            <ul className="mb-4 ml-4 list-disc space-y-1.5 text-foreground">
              <li>Fix spelling and grammar issues.</li>
              <li>Add controlled select example.</li>
            </ul>
          </div>
        </Timeline.Body>
      </Timeline.Item>
    </Timeline>
  );
}
