"use client";

import { Timeline, Typography } from "@material-tailwind/react/dist";
import { Bell, DollarCircle, HomeAlt, Rocket } from "iconoir-react";
import releases from "./releases";
export default function ReleaseNotes() {
  return (
    <Timeline color="secondary" orientation="vertical">
      {releases.map((release, key) => (
        <Timeline.Item key={key} id={`v${release.version}`}>
          <Timeline.Header>
            <Timeline.Separator />
            <Timeline.Icon className="h-9 w-9">
              <Rocket className="h-5 w-5 rotate-45" />
            </Timeline.Icon>
          </Timeline.Header>
          <Timeline.Body>
            <Typography type="h6" color="primary">
              v{release.version}
            </Typography>
            <Typography className="mb-4 text-foreground">
              {release.date}
            </Typography>
            {release.content.map((content, idx) => (
              <div key={idx}>
                <Typography color="primary" className="mb-1 text-lg font-bold">
                  {content.title}
                </Typography>
                <ul className="mb-4 ml-4 list-disc space-y-1.5 text-foreground">
                  {content.data.map((arrData, i) => (
                    <li key={i}>{arrData}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Timeline.Body>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}