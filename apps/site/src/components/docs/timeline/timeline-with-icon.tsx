import { Timeline, Typography } from "@material-tailwind/react/dist";
import { Bell, DollarCircle, HomeAlt } from "iconoir-react";

export function TimelineWithIcon() {
  return (
    <Timeline orientation="vertical">
      <Timeline.Item>
        <Timeline.Header>
          <Timeline.Separator />
          <Timeline.Icon>
            <HomeAlt className="w-4 h-4" />
          </Timeline.Icon>
        </Timeline.Header>
        <Timeline.Body className="-translate-y-1.5">
          <Typography color="primary" className="data-[type=p]:font-bold">
            Timeline Title Here.
          </Typography>
          <Typography type="small" className="mt-2 text-foreground">
            The key to more success is to have a lot of pillows. Put it this
            way, it took me twenty five years to get these plants, twenty five
            years of blood sweat and tears, and I'm never giving up, I'm just
            getting started. I'm up to something. Fan luv.
          </Typography>
        </Timeline.Body>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Header>
          <Timeline.Separator />
          <Timeline.Icon>
            <Bell className="w-4 h-4" />
          </Timeline.Icon>
        </Timeline.Header>
        <Timeline.Body className="-translate-y-1.5">
          <Typography color="primary" className="data-[type=p]:font-bold">
            Timeline Title Here.
          </Typography>
          <Typography type="small" className="mt-2 text-foreground">
            The key to more success is to have a lot of pillows. Put it this
            way, it took me twenty five years to get these plants, twenty five
            years of blood sweat and tears, and I'm never giving up, I'm just
            getting started. I'm up to something. Fan luv.
          </Typography>
        </Timeline.Body>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Header>
          <Timeline.Icon>
            <DollarCircle className="w-4 h-4" />
          </Timeline.Icon>
        </Timeline.Header>
        <Timeline.Body className="-translate-y-1.5">
          <Typography color="primary" className="data-[type=p]:font-bold">
            Timeline Title Here.
          </Typography>
          <Typography type="small" className="mt-2 text-foreground">
            The key to more success is to have a lot of pillows. Put it this
            way, it took me twenty five years to get these plants, twenty five
            years of blood sweat and tears, and I'm never giving up, I'm just
            getting started. I'm up to something. Fan luv.
          </Typography>
        </Timeline.Body>
      </Timeline.Item>
    </Timeline>
  );
}