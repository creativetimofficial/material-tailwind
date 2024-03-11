import {
  Dialog,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react/dist";
import { Xmark } from "iconoir-react";

export function DialogNotification() {
  return (
    <>
      <Dialog size="sm">
        <Dialog.Trigger as={Button}>Long Dialog</Dialog.Trigger>
        <Dialog.Overlay>
          <Dialog.Content>
            <Dialog.DismissTrigger
              as={IconButton}
              size="sm"
              variant="ghost"
              isCircular
              className="absolute right-2 top-2"
            >
              <Xmark className="h-5 w-5" />
            </Dialog.DismissTrigger>
            <Typography className="text-center" type="h6">
              Your Attention is Required!
            </Typography>
            <Typography className="text-center !text-lg font-normal">
              Choose which card you want to connect
            </Typography>
            <div className="mt-10 grid place-items-center gap-4">
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
                ></path>
              </svg>
              <Typography type="h6">You should read this!</Typography>
              <Typography className="text-center font-normal text-foreground">
                Many people limit themselves by their own self-doubt, slowing
                their progress. Fortunately, I was raised with the belief that I
                could achieve anything.
              </Typography>
            </div>

            <div className="mb-1 mt-8 flex items-center justify-center gap-2">
              <Dialog.DismissTrigger as={Button} variant="ghost">
                Cancel
              </Dialog.DismissTrigger>
              <Button>Got it</Button>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog>
    </>
  );
}
