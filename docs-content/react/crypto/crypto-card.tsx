import React from "react";

// @material-tailwind-react
import {
  Card,
  Avatar,
  Button,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const imgs = [
  "https://www.material-tailwind.com/image/web3-card-1.svg",
  "https://www.material-tailwind.com/image/web3-card-2.svg",
  "https://www.material-tailwind.com/image/web3-card-3.svg",
];

export function CryptoCard() {
  return (
    <Card className="overflow-hidden border border-gray-300 shadow-sm">
      <CardBody className="p-4">
        <Typography
          color="blue-gray"
          className="mb-1 !text-base !font-semibold"
        >
          #1
        </Typography>
        <div className="my-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar
              src="https://www.material-tailwind.com/img/avatar1.jpg"
              alt="Tina Andrew"
            />
            <div>
              <Typography color="blue-gray" variant="h6">
                Tina Andrew
              </Typography>
              <Typography variant="small" color="gray" className="font-medium">
                Creator
              </Typography>
            </div>
          </div>
          <Button size="sm" variant="outlined" className="border-gray-300">
            see collection
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {imgs.map((img, key) => (
            <img
              key={key}
              src={img}
              className="h-full w-full rounded-xl object-cover"
              alt="imgs"
            />
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

export default CryptoCard;
