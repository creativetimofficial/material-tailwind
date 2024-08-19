import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

export function NotificationDialog() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen}>Notification</Button>
      <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="relative flex items-center justify-center">
          <DialogHeader className="flex justify-center">
            {" "}
            <Typography className="mb-1 text-center" variant="h5">
              Your Attention is Required!
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute right-5 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody className="grid place-items-center gap-4">
          <Typography className="-mt-8 mb-7" variant="lead" color="gray">
            Choose which card you want to connect
          </Typography>
          <svg
            viewBox="0 0 40 40"
            fill="none"
            className="h-16 w-16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M39.2001 3.19999C39.1998 2.79105 39.0951 2.38895 38.8959 2.03184C38.6966 1.67473 38.4094 1.37446 38.0615 1.15952C37.7136 0.944581 37.3166 0.8221 36.908 0.8037C36.4995 0.785301 36.0931 0.871593 35.7272 1.05439L17.0312 10.4H8.00005C6.09049 10.4 4.25914 11.1586 2.90888 12.5088C1.55862 13.8591 0.800049 15.6904 0.800049 17.6C0.800049 19.5095 1.55862 21.3409 2.90888 22.6912C4.25914 24.0414 6.09049 24.8 8.00005 24.8H8.67205L12.9225 37.5584C13.0817 38.0365 13.3874 38.4523 13.7962 38.747C14.205 39.0416 14.6961 39.2001 15.2 39.2H17.6C18.2366 39.2 18.847 38.9471 19.2971 38.497C19.7472 38.047 20 37.4365 20 36.8V26.2832L35.7272 34.1456C36.0931 34.3284 36.4995 34.4147 36.908 34.3963C37.3166 34.3779 37.7136 34.2554 38.0615 34.0405C38.4094 33.8255 38.6966 33.5252 38.8959 33.1681C39.0951 32.811 39.1998 32.4089 39.2001 32V3.19999Z"
              fill="#212121"
            />
          </svg>
          <Typography color="blue-gray" variant="h4">
            You should read this!
          </Typography>
          <Typography className="text-center font-normal">
            Many people limit themselves by their own self-doubt, slowing their
            progress. Fortunately, I was raised with the belief that I could
            achieve anything.
          </Typography>
        </DialogBody>
        <DialogFooter className="flex justify-center space-x-2">
          <Button variant="text" color="gray" onClick={handleOpen}>
            cancel
          </Button>
          <Button variant="gradient" onClick={handleOpen}>
            Got it
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
