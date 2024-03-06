import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import React from "react";

export function NFTStatsCard() {
  return (
    <Card className="w-full max-w-3xl ">
      <CardHeader
        floated={false}
        shadow={false}
        className="flex items-center gap-x-4 "
      >
        <img
          src={`https://devnet-media.elrond.com/nfts/asset/bafybeibzmmggzyvvedoryo4qwlxg7tup6ruk22aktqtyyx3cyq7xkrsmmq/4.png`}
          alt="profile-picture"
          className="h-40 w-40 rounded-lg"
        />
        <div>
          <Typography variant="h5" color="blue-gray" className="mb-3">
            NFTim Collection
          </Typography>
          <div className="flex items-center gap-x-4">
            <Typography
              color="blue-gray"
              className="text-sm text-blue-gray-400"
            >
              NFTs: <span className="font-normal text-gray-700">9,999</span>
            </Typography>
            <Typography
              color="blue-gray"
              className="text-sm text-blue-gray-400"
            >
              Collection:{" "}
              <span className="font-normal text-gray-700">NFTIM-4586bc</span>
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody className="">
        <div className="mt-3 h-[1px] w-full bg-gray-200" />
        <div className="grid grid-cols-3 gap-y-3">
          <Card
            shadow={false}
            className="mt-2 w-full rounded-none border-r border-gray-300 "
          >
            <CardBody className="px-4 py-2">
              <Typography variant="h6">4,258 EGLD</Typography>
              <Typography className="to-blue-gray-400 text-xs ">
                Total volume
              </Typography>
            </CardBody>
          </Card>
          <Card
            shadow={false}
            className="mt-2 w-full rounded-none border-r border-gray-300 "
          >
            <CardBody className="px-4 py-2">
              <Typography variant="h6">0.5 EGLD</Typography>
              <Typography className="to-blue-gray-400 text-xs ">
                Floor price
              </Typography>
            </CardBody>
          </Card>

          <Card shadow={false} className="mt-2 w-full rounded-none">
            <CardBody className="px-4 py-2">
              <Typography variant="h6">60 EGLD</Typography>
              <Typography className="to-blue-gray-400 text-xs ">ATH</Typography>
            </CardBody>
          </Card>
          <Card
            shadow={false}
            className="mt-2 w-full rounded-none border-r border-gray-300"
          >
            <CardBody className="px-4 py-2">
              <Typography variant="h6">1,202</Typography>
              <Typography className="to-blue-gray-400 text-xs ">
                Holders
              </Typography>
            </CardBody>
          </Card>
          <Card
            shadow={false}
            className="mt-2 w-full rounded-none border-r border-gray-300"
          >
            <CardBody className="px-4 py-2">
              <Typography variant="h6">1.36</Typography>
              <Typography className="to-blue-gray-400 text-xs ">
                Avg. price
              </Typography>
            </CardBody>
          </Card>
          <Card shadow={false} className="mt-2 w-full rounded-none">
            <CardBody className="px-4 py-2">
              <Typography variant="h6">3,135</Typography>
              <Typography className="to-blue-gray-400 text-xs ">
                Total Trades
              </Typography>
            </CardBody>
          </Card>
        </div>
      </CardBody>
    </Card>
  );
}
