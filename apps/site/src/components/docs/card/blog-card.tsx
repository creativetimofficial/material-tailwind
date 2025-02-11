import React from "react";
import { Card, Typography, Avatar, Tooltip } from "@material-tailwind/react";

export default function BlogCard() {
  return (
    <Card className="max-w-[24rem] overflow-hidden">
      <Card.Header
        as="img"
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
        alt="ui/ux review check"
      />
      <Card.Body>
        <Typography type="h6">UI/UX Review Check</Typography>
        <Typography className="mt-1 text-foreground">
          Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire others.
        </Typography>
      </Card.Body>
      <Card.Footer className="mt-4 flex items-center justify-between">
        <div className="flex items-center -space-x-3">
          <Tooltip>
            <Tooltip.Trigger>
              <Avatar
                size="sm"
                alt="natali craig"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                className="border-2 border-secondary hover:z-10"
              />
            </Tooltip.Trigger>
            <Tooltip.Content>
              Natali Craig
              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip>
          <Tooltip>
            <Tooltip.Trigger>
              <Avatar
                size="sm"
                alt="tania andrew"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                className="border-2 border-secondary hover:z-10"
              />
            </Tooltip.Trigger>
            <Tooltip.Content>
              Tania Andrew
              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip>
        </div>
        <Typography type="small">January 10</Typography>
      </Card.Footer>
    </Card>
  );
}
