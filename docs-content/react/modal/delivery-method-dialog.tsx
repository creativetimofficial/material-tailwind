import React from "react";
import {
  Button,
  Dialog,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function DeliveryMethodDialog() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Delivery Method Modal
      </Button>
      <Dialog size="sm" open={open} handler={handleOpen} className="p-4">
        <DialogHeader className="relative m-0 block">
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
        <DialogBody>
          <div className="space-y-4">
            <div>
              <input
                type="radio"
                id="standard"
                name="hosting"
                value="standard"
                className="peer hidden"
                required
              />
              <label
                htmlFor="standard"
                className="block w-full cursor-pointer rounded-lg border border-gray-300 p-4 text-gray-900 ring-1 ring-transparent peer-checked:border-gray-900 peer-checked:ring-gray-900"
              >
                <div className="block">
                  <Typography className="font-semibold">
                    Express Delivery
                  </Typography>
                  <Typography className="font-normal text-gray-600">
                    5-7 business days.{" "}
                    <strong className="text-gray-900">Free</strong>
                  </Typography>
                </div>
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="express"
                name="hosting"
                defaultChecked
                value="express"
                className="peer hidden"
                required
              />
              <label
                htmlFor="express"
                className="block w-full cursor-pointer rounded-lg border border-gray-300 p-4 text-gray-900 ring-1 ring-transparent peer-checked:border-gray-900 peer-checked:ring-gray-900"
              >
                <div className="block">
                  <Typography className="font-semibold">
                    Express Delivery
                  </Typography>
                  <Typography className="font-normal text-gray-600">
                    2-3 business days.{" "}
                    <strong className="text-gray-900">$10.00</strong>
                  </Typography>
                </div>
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="store"
                name="hosting"
                value="store"
                className="peer hidden"
                required
              />
              <label
                htmlFor="store"
                className="block w-full cursor-pointer rounded-lg border border-gray-300 p-4 text-gray-900 ring-1 ring-transparent peer-checked:border-gray-900 peer-checked:ring-gray-900"
              >
                <div className="block">
                  <Typography className="font-semibold">
                    Pickup In-Store
                  </Typography>
                  <Typography className="font-normal text-gray-600">
                    Available for pickup within 24 hours.{" "}
                    <strong className="text-gray-900">Free</strong>
                  </Typography>
                </div>
              </label>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button className="ml-auto" onClick={handleOpen}>
            confirm delivery method
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
