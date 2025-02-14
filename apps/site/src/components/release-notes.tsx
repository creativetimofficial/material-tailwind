"use client";

import { Timeline, Typography } from "@material-tailwind/react";
import { Rocket } from "iconoir-react";
import reactReleases from "./releases";
import htmlReleases from "./releases-html";

export default function ReleaseNotes({ html }: { html?: boolean }) {
  const releases = html ? htmlReleases : reactReleases;

  return (
    <Timeline color="secondary" orientation="vertical">
      {releases.map((release, key) => (
        <Timeline.Item key={key} id={`v${release.version}`}>
          <Timeline.Header>
            {key !== releases.length - 1 && <Timeline.Separator />}
            <Timeline.Icon className="h-9 w-9 z-1">
              <Rocket className="h-5 w-5 rotate-45" />
            </Timeline.Icon>
          </Timeline.Header>
          <Timeline.Body>
            <Typography
              id={`v${release.version}`}
              as="h2"
              type="h6"
              className="scroll-mt-40"
            >
              v{release.version}
            </Typography>
            <Typography className="mb-4 text-foreground">
              {release.date}
            </Typography>
            {release.content.map((content, idx) => (
              <div key={idx}>
                <Typography color="default" className="mb-1 text-lg font-bold">
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
