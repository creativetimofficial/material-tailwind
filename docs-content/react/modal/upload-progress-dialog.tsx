import React from "react";
import {
  Button,
  Dialog,
  Progress,
  Typography,
  DialogBody,
  IconButton,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

export function UploadProgressDialog() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Upload Progress Modal
      </Button>
      <Dialog open={open} handler={handleOpen} className="p-4">
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Upload Progress
          </Typography>
          <Typography className="mt-1 font-normal text-gray-600">
            Please wait while we process your request. You can track the upload
            progress below.
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
          <div className="w-full">
            <div className="mb-2 flex items-center justify-between gap-4">
              <Typography
                color="blue-gray"
                variant="small"
                className="font-semibold"
              >
                Uploading...
              </Typography>
              <Typography
                variant="small"
                className="font-semibold text-gray-600"
              >
                50%
              </Typography>
            </div>
            <Progress value={50} />
          </div>
          <div className="mt-6 flex gap-16">
            <div>
              <Typography className="font-normal text-gray-600">
                File Name
              </Typography>
              <Typography color="blue-gray" className="font-semibold">
                project_proposal.pdf
              </Typography>
            </div>
            <div>
              <Typography className="font-normal text-gray-600">
                File Size
              </Typography>
              <Typography color="blue-gray" className="font-semibold">
                10 MB
              </Typography>
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="flex flex-wrap justify-between gap-4">
          <Typography
            variant="small"
            className="flex gap-2 font-normal text-gray-600 md:items-center"
          >
            <InformationCircleIcon className="h-5 w-5 text-gray-900" />
            Closing this window may interrupt the upload process.
          </Typography>
          <Button onClick={handleOpen} className="w-full lg:max-w-fit">
            cancel upload
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
