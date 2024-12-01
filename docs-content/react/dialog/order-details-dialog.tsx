import React from "react";
import {
  Button,
  Dialog,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@material-tailwind/react";
import {
  HomeIcon,
  BellIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function OrderDetailsDialog() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Order Details Dialog
      </Button>
      <Dialog size="sm" open={open} handler={handleOpen}>
        <DialogHeader className="relative m-0 block p-6">
          <Typography variant="h4" color="blue-gray">
            Delivery Method
          </Typography>
          <Typography className="mt-1 font-normal text-gray-600">
            Please select your preferred delivery method for your order.
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={handleOpen}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="mx-4 -mt-4">
          <Timeline>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-2">
                  <HomeIcon className="h-4 w-4" />
                </TimelineIcon>
                <Typography color="blue-gray" className="font-semibold">
                  $2,400, Design Changes
                </Typography>
              </TimelineHeader>
              <TimelineBody className="-mt-2 pb-8">
                <Typography color="gray" className="font-normal text-gray-600">
                  22 Dec 6:20 PM
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-2">
                  <BellIcon className="h-4 w-4" />
                </TimelineIcon>
                <Typography color="blue-gray" className="font-semibold">
                  New order #1832412
                </Typography>
              </TimelineHeader>
              <TimelineBody className="-mt-2 pb-8">
                <Typography color="gray" className="font-normal text-gray-600">
                  21 Dec 8:20 PM
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-2">
                  <CurrencyDollarIcon className="h-4 w-4" />
                </TimelineIcon>
                <Typography color="blue-gray" className="font-semibold">
                  Payment Completed
                </Typography>
              </TimelineHeader>
              <TimelineBody className="-mt-2">
                <Typography color="gray" className="font-normal text-gray-600">
                  17 Dec 4:20 PM
                </Typography>
              </TimelineBody>
            </TimelineItem>
          </Timeline>
        </DialogBody>
        <DialogFooter>
          <Button className="mr-auto" onClick={handleOpen}>
            more details
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
