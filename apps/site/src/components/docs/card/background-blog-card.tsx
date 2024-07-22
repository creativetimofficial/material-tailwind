import React from "react";
import { Card, Typography, Avatar } from "@material-tailwind/react";

export function BackgroundBlogCard() {
  return (
    <Card className="relative flex h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden text-center">
      <Card.Header>
        <div className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 to-black/10 dark:from-black/90 dark:via-black/60 dark:to-black/20" />
        </div>
      </Card.Header>
      <Card.Body className="relative bottom-0 flex h-full flex-col items-center justify-end px-6 py-14 md:px-12">
        <Typography type="h4" className="text-white">
          How we design and code open-source projects?
        </Typography>
        <Typography type="h6" className="my-6 text-white/80">
          Tania Andrew
        </Typography>
        <Avatar
          size="xl"
          shape="circular"
          alt="tania andrew"
          className="border-2 border-white"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        />
      </Card.Body>
    </Card>
  );
}
