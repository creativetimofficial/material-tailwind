import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import React from "react";

export function NFTCardDialog() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Card className="group w-96">
        <CardHeader floated={false} className=" h-80">
          <img
            src={`https://media.elrond.com/nfts/asset/bafybeigfsavl3figwpet6uy6bcllpahkmuabxioxahuxbvrdx36kqfcjt4/2360.png`}
            alt="profile-picture  "
          />
          <div className="absolute inset-0 z-10 h-full w-full bg-black/10 opacity-0 group-hover:opacity-100"></div>
          <Button
            onClick={handleOpen}
            size="md"
            ripple={false}
            className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 rounded-full group-hover:block"
          >
            view attributes
          </Button>
        </CardHeader>
        <CardBody className="flex items-center justify-between">
          <Typography variant="h6" color="blue-gray" className="mb-2">
            NFT Name
          </Typography>
          <Typography color="blue-gray" className="mb-2 font-bold">
            #5
          </Typography>
        </CardBody>
      </Card>
      <Dialog
        size="lg"
        open={open}
        className="flex flex-row"
        handler={handleOpen}
      >
        <DialogBody className="grid grid-cols-3 gap-4">
          <div className="col-span-1 p-3">
            <img
              src={`https://devnet-media.elrond.com/nfts/asset/bafybeibzmmggzyvvedoryo4qwlxg7tup6ruk22aktqtyyx3cyq7xkrsmmq/4.png`}
              alt="profile-picture"
              className="bg-no-repeatz h-[300px] w-full rounded-md bg-cover"
            />
          </div>
          <div className="col-span-2">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Meta-Bot #5
            </Typography>
            <div className="flex items-center justify-between ">
              <Typography color="blue-gray" className="">
                Attributes
              </Typography>
              <Typography color="blue-gray" className=" text-end">
                Rarity Score: <span className="font-bold"> 100.000</span>
              </Typography>
            </div>
            <div className="grid w-full grid-cols-2 gap-x-5 gap-y-2">
              <Card
                shadow={false}
                className="mt-2 w-full border border-gray-300 "
              >
                <CardBody className="px-4 py-2">
                  <Typography>bot_background</Typography>
                  <Typography variant="h6">bot_bg_vue</Typography>
                </CardBody>
              </Card>
              <Card
                shadow={false}
                className="mt-2 w-full border border-gray-300 "
              >
                <CardBody className="px-4 py-2">
                  <Typography>bot_body</Typography>
                  <Typography variant="h6">bot_body_blue</Typography>
                </CardBody>
              </Card>
              <Card
                shadow={false}
                className="mt-2 w-full border border-gray-300 "
              >
                <CardBody className="px-4 py-2">
                  <Typography>bot_head</Typography>
                  <Typography variant="h6">bot_head_rounded_yellow</Typography>
                </CardBody>
              </Card>

              <Card
                shadow={false}
                className="mt-2 w-full border border-gray-300 "
              >
                <CardBody className="px-4 py-2">
                  <Typography>bot_antena_top</Typography>
                  <Typography variant="h6">bot_antena_pin</Typography>
                </CardBody>
              </Card>
              <Card
                shadow={false}
                className="mt-2 w-full border border-gray-300 "
              >
                <CardBody className="px-4 py-2">
                  <Typography>bot_antena_side</Typography>
                  <Typography variant="h6">bot_antena_points_blue</Typography>
                </CardBody>
              </Card>
              <Card
                shadow={false}
                className="mt-2 w-full border border-gray-300 "
              >
                <CardBody className="px-4 py-2">
                  <Typography>bot_eyes</Typography>
                  <Typography variant="h6">bot_eyes_round_inside</Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
