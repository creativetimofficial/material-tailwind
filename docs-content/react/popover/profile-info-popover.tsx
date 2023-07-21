import React from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Avatar,
  Typography,
} from "@material-tailwind/react";

export function ProfileInfoPopover() {
  const [openPopover, setOpenPopover] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  return (
    <Popover open={openPopover} handler={setOpenPopover}>
      <PopoverHandler {...triggers}>
        <Button variant="text">Profile Info</Button>
      </PopoverHandler>
      <PopoverContent {...triggers} className="max-w-[24rem]">
        <div className="mb-2 flex items-center justify-between gap-4">
          <Avatar
            size="md"
            variant="circular"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt="tania andrew"
          />
          <Button
            variant="gradient"
            color="blue"
            size="sm"
            className="font-medium capitalize"
          >
            Follow
          </Button>
        </div>
        <Typography
          variant="h6"
          color="blue-gray"
          className="mb-2 flex items-center gap-2 font-medium"
        >
          <span>Tania Andrew</span> •{" "}
          <a href="#" className="text-sm text-blue-gray-700">
            @canwu
          </a>
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          Frontend Developer • Major interest in Web Development: motivated to
          achieve measurable results, to deepen my knowledge and improve my
          skills.
        </Typography>
        <div className="mt-6 flex items-center gap-8 border-t border-blue-gray-50 pt-4">
          <Typography
            variant="small"
            color="gray"
            className="flex items-center gap-1 text-xs font-normal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="-mt-0.5 h-3.5 w-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            United Kingdom
          </Typography>
          <Typography
            as="a"
            href="#"
            variant="small"
            color="gray"
            className="flex items-center gap-1 text-xs font-normal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="-mt-0.5 h-3.5 w-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
              />
            </svg>
            Material Tailwind
          </Typography>
        </div>
      </PopoverContent>
    </Popover>
  );
}
