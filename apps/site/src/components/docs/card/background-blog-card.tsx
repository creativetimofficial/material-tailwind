import React from "react";
import { Card, Typography, Avatar } from "@material-tailwind/react/dist";

export function BackgroundBlogCard() {
  return (
    <Card className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-end overflow-hidden text-center">
      <Card.Header>
        <div className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center">
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </div>
      </Card.Header>
      <Card.Body className="relative bottom-0 h-full px-6 py-14 md:px-12">
        <Typography
          type="h3"
          className="mb-6 font-medium leading-[1.5] text-white"
        >
          How we design and code open-source projects?
        </Typography>
        <Typography type="h5" className="mb-4 text-gray-400">
          Tania Andrew
        </Typography>
        <Avatar
          size="xl"
          variant="circular"
          alt="tania andrew"
          className="border-2 border-white"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        />
      </Card.Body>
    </Card>
  );
}
