import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function AddProductDialog() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Add Product
      </Button>
      <Dialog size="sm" open={open} handler={handleOpen}>
        <DialogHeader className="relative m-0 block p-6">
          <Typography variant="h5" color="blue-gray">
            Manage Item
          </Typography>
          <Typography className="font-normal text-gray-600">
            Keep your records up-to-date and organized.
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
        <DialogBody className="px-6 pb-6 pt-2">Content Here</DialogBody>
        <DialogFooter>
          <Button className="ml-auto" onClick={handleOpen}>
            Add Product
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
