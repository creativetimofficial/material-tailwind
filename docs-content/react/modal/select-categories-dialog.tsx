import React from "react";
import {
  Button,
  Dialog,
  Checkbox,
  Typography,
  DialogBody,
  IconButton,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function SelectCategoriesDialog() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Select Categories Modal
      </Button>
      <Dialog size="sm" open={open} handler={handleOpen} className="p-4">
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Select Categories
          </Typography>
          <Typography className="mt-1 font-normal text-gray-600">
            Categories help you organize your contacts based on their interests
            and interactions.
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
        <DialogBody className="space-y-4 px-2">
          <Checkbox
            label={
              <div>
                <Typography color="blue-gray" className="text-base font-medium">
                  Updates
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Receive the latest news and updates.
                </Typography>
              </div>
            }
            containerProps={{
              className: "-mt-5",
            }}
          />
          <Checkbox
            label={
              <div>
                <Typography color="blue-gray" className="font-medium">
                  Leads
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Potential clients and interested parties.
                </Typography>
              </div>
            }
            containerProps={{
              className: "-mt-5",
            }}
          />
          <Checkbox
            label={
              <div>
                <Typography color="blue-gray" className="font-medium">
                  Webinars
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Interested in attending webinars and online events.
                </Typography>
              </div>
            }
            containerProps={{
              className: "-mt-5",
            }}
          />
        </DialogBody>
        <DialogFooter>
          <Button className="ml-auto" onClick={handleOpen}>
            save categories
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
