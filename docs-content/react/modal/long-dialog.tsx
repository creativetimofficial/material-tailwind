import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

export function LongDialog() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen}>Long Modal</Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Long Modal</DialogHeader>
        <DialogBody className="h-[42rem] overflow-scroll">
          <Typography className="font-normal">
            I&apos;ve always had unwavering confidence in my abilities, and I
            believe our thoughts and self-perception are the primary forces that
            shape us. Many people limit themselves by their own self-doubt,
            slowing their progress. Fortunately, I was raised with the belief
            that I could achieve anything.
            <br />
            <br />
            As we journey through life, we often encounter challenges that
            harden our hearts. Pain, insults, broken trust, and betrayal can
            make us hesitant to help others. Love can lead to heartbreak, and
            time can distance us from family. These experiences can gradually
            erode our optimism.
            <br /> <br />
            Life doesn&apos;t always place us where we want to be. We grow, make
            mistakes, and strive to express ourselves and fulfill our dreams. If
            we&apos;re fortunate enough to participate in life&apos;s journey,
            we should cherish every moment. Regrettably, some only recognize the
            value of a moment after it&apos;s passed.
            <br /> <br />
            One thing I&apos;ve learned is that I can excel at anything I set my
            mind to. My skill is my ability to learn. I&apos;m here to learn, to
            grow, and to inspire others to do the same. Don&apos;t fear making
            mistakes; they teach us far more than compliments ever will.
            Ultimately, what truly matters is how our actions inspire and
            motivate others. Some will be ignited by our endeavors, while others
            may be offended—it&apos;s all part of the process. I&apos;m here to
            pursue my dreams and encourage others to do the same.
            <br /> <br />
            Now is the time to embrace greatness without fear of judgment. Some
            may resent those who shine brightly or stand out, but it&apos;s time
            to be the best version of ourselves. Do you have faith in your
            beliefs, even if you&apos;re the only one who does?
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            cancel
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
