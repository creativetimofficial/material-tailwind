"use client";
import React from "react";
import { Card, Typography, Button } from "@material-tailwind/react/dist";
import { NavArrowDown, Xmark } from "iconoir-react";

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-xs py-12">
      <Card color="default" variant="solid">
        <Card.Header className="h-64 bg-gray-100"></Card.Header>
        <Card.Body>
          <Typography variant="h5" className="mb-1">
            Material Tailwind
          </Typography>
          <Typography variant="p" className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            asperiores officiis autem iste alias libero? Pariatur, assumenda.
            Adipisci ullam perferendis hic autem, esse nostrum delectus dicta
            totam sunt quia magnam?
          </Typography>
        </Card.Body>
        <Card.Footer>
          <Button isFullWidth>Read More</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}
