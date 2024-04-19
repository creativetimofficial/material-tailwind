import { Timeline, Typography } from "@material-tailwind/react";
import { CreditCard, Bell, DollarCircle } from "iconoir-react";

export function ActivitiesTimeline() {
  return (
    <Timeline orientation="vertical">
      <Timeline.Item>
        <Timeline.Header>
          <Timeline.Separator />
          <Timeline.Icon>
            <Bell className="h-4 w-4" />
          </Timeline.Icon>
        </Timeline.Header>
        <Timeline.Body className="-translate-y-1.5">
          <Typography color="primary" className="data-[type=p]:font-bold">
            $2400, Design changes
          </Typography>
          <Typography type="small" className="mt-2 text-foreground">
            22 DEC 7:20 PM
          </Typography>
        </Timeline.Body>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Header>
          <Timeline.Separator />
          <Timeline.Icon>
            <CreditCard className="h-4 w-4" />
          </Timeline.Icon>
        </Timeline.Header>
        <Timeline.Body className="-translate-y-1.5">
          <Typography color="primary" className="data-[type=p]:font-bold">
            New order #1832412
          </Typography>
          <Typography type="small" className="mt-2 text-foreground">
            21 DEC 11 PM
          </Typography>
        </Timeline.Body>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Header>
          <Timeline.Icon>
            <DollarCircle className="h-4 w-4" />
          </Timeline.Icon>
        </Timeline.Header>
        <Timeline.Body className="-translate-y-1.5">
          <Typography color="primary" className="data-[type=p]:font-bold">
            Payment completed for order #4395133
          </Typography>
          <Typography type="small" className="mt-2 text-foreground">
            20 DEC 2:20 AM
          </Typography>
        </Timeline.Body>
      </Timeline.Item>
    </Timeline>
  );
}
