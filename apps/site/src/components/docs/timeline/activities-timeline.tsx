import { Timeline, Typography, Card } from "@material-tailwind/react";
import { CreditCard, Bell, DollarCircle } from "iconoir-react";

export default function ActivitiesTimeline() {
  return (
    <Timeline orientation="vertical" className="max-w-md space-y-6">
      <Timeline.Item className="w-full">
        <Card className="flex items-center gap-3 px-3 py-2">
          <Timeline.Header>
            <Timeline.Icon>
              <Bell className="h-4 w-4" />
            </Timeline.Icon>
          </Timeline.Header>
          <Timeline.Body className="!pb-0">
            <Typography color="default" className="font-bold">
              $2400, Design changes
            </Typography>
            <Typography type="small" className="mt-2 text-foreground">
              22 DEC 7:20 PM
            </Typography>
          </Timeline.Body>
        </Card>
      </Timeline.Item>
      <Timeline.Item className="w-full">
        <Card className="flex items-center gap-3 px-3 py-2">
          <Timeline.Header>
            <Timeline.Icon>
              <CreditCard className="h-4 w-4" />
            </Timeline.Icon>
          </Timeline.Header>
          <Timeline.Body className="!pb-0">
            <Typography color="default" className="font-bold">
              New order #1832412
            </Typography>
            <Typography type="small" className="mt-2 text-foreground">
              21 DEC 11 PM
            </Typography>
          </Timeline.Body>
        </Card>
      </Timeline.Item>
      <Timeline.Item className="w-full">
        <Card className="flex items-center gap-3 px-3 py-2">
          <Timeline.Header>
            <Timeline.Icon>
              <DollarCircle className="h-4 w-4" />
            </Timeline.Icon>
          </Timeline.Header>
          <Timeline.Body className="!pb-0">
            <Typography color="default" className="font-bold">
              Payment completed for order #4395133
            </Typography>
            <Typography type="small" className="mt-2 text-foreground">
              20 DEC 2:20 AM
            </Typography>
          </Timeline.Body>
        </Card>
      </Timeline.Item>
    </Timeline>
  );
}
