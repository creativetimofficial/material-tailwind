import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import React from "react";

export function NFTCard() {
  return (
    <Card className="group w-96">
      <CardHeader floated={false} className=" h-80">
        <img
          src={`https://media.elrond.com/nfts/asset/bafybeigfsavl3figwpet6uy6bcllpahkmuabxioxahuxbvrdx36kqfcjt4/2360.png`}
          alt="profile-picture  "
        />
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
  );
}
