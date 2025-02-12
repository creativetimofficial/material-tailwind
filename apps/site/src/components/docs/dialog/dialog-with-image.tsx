import {
  Dialog,
  Button,
  Avatar,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Heart, ShareIos } from "iconoir-react";

export default function DialogWithImage() {
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
                size="md"
                alt="Andrew Alexa"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind/team-1.jpg"
              />
              <div className="flex flex-col">
                <Typography className="font-semibold">Andrew Alexa</Typography>
                <Typography type="small" className="text-foreground">
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
                <Typography type="small" className="text-foreground">
                  Views
                </Typography>
                <Typography className="font-semibold">44,082,044</Typography>
              </div>
              <div>
                <Typography type="small" className="text-foreground">
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
