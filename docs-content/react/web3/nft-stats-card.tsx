import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import React from "react";

export function NFTStatsCard() {
  return (
    <Card className="w-full max-w-3xl ">
      <CardHeader
        floated={false}
        shadow={false}
        className="flex flex-col gap-4 sm:flex-row sm:items-center"
      >
        <Avatar
          size="xxl"
          variant="rounded"
          alt="profile-picture"
          src="https://devnet-media.elrond.com/nfts/asset/bafybeibzmmggzyvvedoryo4qwlxg7tup6ruk22aktqtyyx3cyq7xkrsmmq/4.png"
        />
        <div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            NFTim Collection
          </Typography>
          <div className="flex items-center gap-x-4">
            <Typography
              color="blue-gray"
              className="text-sm font-normal text-blue-gray-500"
            >
              NFTs: <span className="font-medium text-gray-700">9,999</span>
            </Typography>
            <Typography
              color="blue-gray"
              className="text-sm font-normal text-blue-gray-500"
            >
              Collection:{" "}
              <span className="font-medium text-gray-700">NFTIM-4586bc</span>
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody className="">
        <div className="h-px w-full bg-blue-gray-50" />
        <div className="grid grid-cols-2 gap-y-3 md:grid-cols-3">
          <Card
            shadow={false}
            className="mt-2 w-full rounded-none md:border-r md:border-blue-gray-50"
          >
            <CardBody className="px-4 py-2">
              <Typography variant="h6">4,258 EGLD</Typography>
              <Typography className="text-sm font-normal text-blue-gray-500">
                Total volume
              </Typography>
            </CardBody>
          </Card>
          <Card
            shadow={false}
            className="mt-2 w-full rounded-none md:border-r md:border-blue-gray-50"
          >
            <CardBody className="px-4 py-2">
              <Typography variant="h6">0.5 EGLD</Typography>
              <Typography className="text-sm font-normal text-blue-gray-500">
                Floor price
              </Typography>
            </CardBody>
          </Card>

          <Card shadow={false} className="mt-2 w-full rounded-none">
            <CardBody className="px-4 py-2">
              <Typography variant="h6">60 EGLD</Typography>
              <Typography className="text-sm font-normal text-blue-gray-500">
                ATH
              </Typography>
            </CardBody>
          </Card>
          <Card
            shadow={false}
            className="mt-2 w-full rounded-none md:border-r md:border-blue-gray-50"
          >
            <CardBody className="px-4 py-2">
              <Typography variant="h6">1,202</Typography>
              <Typography className="text-sm font-normal text-blue-gray-500">
                Holders
              </Typography>
            </CardBody>
          </Card>
          <Card
            shadow={false}
            className="mt-2 w-full rounded-none md:border-r md:border-blue-gray-50"
          >
            <CardBody className="px-4 py-2">
              <Typography variant="h6">1.36</Typography>
              <Typography className="text-sm font-normal text-blue-gray-500">
                Avg. price
              </Typography>
            </CardBody>
          </Card>
          <Card shadow={false} className="mt-2 w-full rounded-none">
            <CardBody className="px-4 py-2">
              <Typography variant="h6">3,135</Typography>
              <Typography className="text-sm font-normal text-blue-gray-500">
                Total Trades
              </Typography>
            </CardBody>
          </Card>
        </div>
      </CardBody>
    </Card>
  );
}