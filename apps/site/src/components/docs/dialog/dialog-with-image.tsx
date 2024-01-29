import {
  Dialog,
  Button,
  Avatar,
  Typography,
  IconButton,
} from "@material-tailwind/react/dist";
import { Heart, ShareIos } from "iconoir-react";

export function DialogWithImage() {
  return (
    <Dialog size="xl">
      <Dialog.Trigger>
        <img
          alt="nature"
          src="https://dub.sh/xxo2Jek"
          className="h-64 w-auto rounded-lg object-cover object-center"
        />
      </Dialog.Trigger>
      <Dialog.Overlay>
        <Dialog.Content>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar
                size="sm"
                alt="alex andrew"
                src="https://dub.sh/TdSBP0D"
              />
              <div className="-mt-px flex flex-col">
                <Typography variant="small" className="font-semibold">
                  Alex Andrew
                </Typography>
                <Typography variant="small" className="text-xs text-gray-600">
                  @alexandrew
                </Typography>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <IconButton size="sm" color="error" variant="ghost">
                <Heart className="h-4 w-4" />
              </IconButton>
              <Button size="sm">Free Download</Button>
            </div>
          </div>
          <div className="my-4">
            <img
              alt="nature"
              src="https://dub.sh/xxo2Jek"
              className="h-[48rem] w-full rounded-lg object-cover object-center"
            />
          </div>
          <div className="flex items-end justify-between">
            <div className="flex items-center gap-16">
              <div>
                <Typography variant="small" className="text-gray-600">
                  Views
                </Typography>
                <Typography className="font-semibold">44,082,044</Typography>
              </div>
              <div>
                <Typography variant="small" className="text-gray-600">
                  Downloads
                </Typography>
                <Typography className="font-semibold">553,031</Typography>
              </div>
            </div>
            <Button size="sm" variant="ghost">
              <ShareIos className="mr-1.5 h-4 w-4" /> Share
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog>
  );
}
