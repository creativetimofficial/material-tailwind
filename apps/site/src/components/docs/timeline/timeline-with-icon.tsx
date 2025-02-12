import { Timeline, Typography } from "@material-tailwind/react";
import { Bell, DollarCircle, HomeSimple } from "iconoir-react";

export default function TimelineWithIcon() {
  return (
    <Timeline color="secondary" orientation="vertical">
      <Timeline.Item>
        <Timeline.Header>
          <Timeline.Separator />
          <Timeline.Icon>
            <HomeSimple className="h-5 w-5" />
          </Timeline.Icon>
        </Timeline.Header>
        <Timeline.Body className="-translate-y-1.5">
          <Typography color="default" className="font-bold">
            Timeline Title Here.
          </Typography>
          <Typography type="small" className="mt-2 text-foreground">
            The key to more success is to have a lot of pillows. Put it this
            way, it took me twenty five years to get these plants, twenty five
            years of blood sweat and tears, and I&apos;m never giving up,
            I&apos;m just getting started. I&apos;m up to something. Fan luv.
          </Typography>
        </Timeline.Body>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Header>
          <Timeline.Separator />
          <Timeline.Icon>
            <Bell className="h-5 w-5" />
          </Timeline.Icon>
        </Timeline.Header>
        <Timeline.Body className="-translate-y-1.5">
          <Typography color="default" className="font-bold">
            Timeline Title Here.
          </Typography>
          <Typography type="small" className="mt-2 text-foreground">
            The key to more success is to have a lot of pillows. Put it this
            way, it took me twenty five years to get these plants, twenty five
            years of blood sweat and tears, and I&apos;m never giving up,
            I&apos;m just getting started. I&apos;m up to something. Fan luv.
          </Typography>
        </Timeline.Body>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Header>
          <Timeline.Icon>
            <DollarCircle className="h-5 w-5" />
          </Timeline.Icon>
        </Timeline.Header>
        <Timeline.Body className="-translate-y-1.5">
          <Typography color="default" className="font-bold">
            Timeline Title Here.
          </Typography>
          <Typography type="small" className="mt-2 text-foreground">
            The key to more success is to have a lot of pillows. Put it this
            way, it took me twenty five years to get these plants, twenty five
            years of blood sweat and tears, and I&apos;m never giving up,
            I&apos;m just getting started. I&apos;m up to something. Fan luv.
          </Typography>
        </Timeline.Body>
      </Timeline.Item>
    </Timeline>
  );
}
