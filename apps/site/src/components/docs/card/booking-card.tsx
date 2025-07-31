import React from "react";
import {
  Card,
  Typography,
  Button,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import {
  HeartSolid,
  StarSolid,
  Cash,
  Wifi,
  HomeSimple,
  ModernTv,
  FireFlame,
} from "iconoir-react";

export function BookingCard() {
  return (
    <Card className="w-full max-w-104 shadow-lg">
      <Card.Header className="relative overflow-hidden p-0">
        <img
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="ui/ux review check"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-linear-to-tr from-transparent via-transparent to-black/60 " />
        <IconButton
          size="sm"
          color="error"
          variant="ghost"
          className="!absolute right-2 top-2 rounded-full"
        >
          <HeartSolid className="h-5 w-5" />
        </IconButton>
      </Card.Header>
      <Card.Body>
        <div className="mb-2 flex items-center justify-between">
          <Typography type="h6">Wooden House, Florida</Typography>
          <Typography className="flex items-center gap-1.5 ">
            <StarSolid className="h-[18px] w-[18px] text-warning" />
            5.0
          </Typography>
        </div>
        <Typography className="text-foreground">
          Enter a freshly updated and thoughtfully furnished peaceful home
          surrounded by ancient trees, stone walls, and open meadows.
        </Typography>
        <div className="group mt-6 inline-flex flex-wrap items-center gap-3">
          <Tooltip>
            <Tooltip.Trigger>
              <IconButton
                isCircular
                size="lg"
                color="secondary"
                className="cursor-pointer border border-surface bg-surface-light transition-all hover:opacity-100! group-hover:opacity-70"
              >
                <Cash className="h-5 w-5" />
              </IconButton>
            </Tooltip.Trigger>
            <Tooltip.Content>
              $129 per night
              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip>
          <Tooltip>
            <Tooltip.Trigger>
              <IconButton
                isCircular
                size="lg"
                color="secondary"
                className="cursor-pointer border border-surface bg-surface-light transition-all hover:opacity-100! group-hover:opacity-70"
              >
                <Wifi className="h-5 w-5" />
              </IconButton>
            </Tooltip.Trigger>
            <Tooltip.Content>
              Free wifi
              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip>
          <Tooltip>
            <Tooltip.Trigger>
              <IconButton
                isCircular
                size="lg"
                color="secondary"
                className="cursor-pointer border border-surface bg-surface-light transition-all hover:opacity-100! group-hover:opacity-70"
              >
                <HomeSimple className="h-5 w-5" />
              </IconButton>
            </Tooltip.Trigger>
            <Tooltip.Content>
              2 bedrooms <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip>
          <Tooltip>
            <Tooltip.Trigger>
              <IconButton
                isCircular
                size="lg"
                color="secondary"
                className="cursor-pointer border border-surface bg-surface-light transition-all hover:opacity-100! group-hover:opacity-70"
              >
                <ModernTv className="h-5 w-5" />
              </IconButton>
            </Tooltip.Trigger>
            <Tooltip.Content>
              65" HDTV
              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip>
          <Tooltip>
            <Tooltip.Trigger>
              <IconButton
                isCircular
                size="lg"
                color="secondary"
                className="cursor-pointer border border-surface bg-surface-light transition-all hover:opacity-100! group-hover:opacity-70"
              >
                <FireFlame className="h-5 w-5" />
              </IconButton>
            </Tooltip.Trigger>
            <Tooltip.Content>
              Fire alert <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip>
          <Tooltip>
            <Tooltip.Trigger>
              <IconButton
                isCircular
                size="lg"
                color="secondary"
                className="cursor-pointer border border-surface bg-surface-light transition-all hover:opacity-100! group-hover:opacity-70"
              >
                +20
              </IconButton>
            </Tooltip.Trigger>
            <Tooltip.Content>
              And +20 more
              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip>
        </div>
      </Card.Body>
      <Card.Footer className="pt-3">
        <Button isFullWidth>Reserve</Button>
      </Card.Footer>
    </Card>
  );
}
