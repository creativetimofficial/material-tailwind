"use client";
import React from "react";
import { Alert, Button } from "@material-tailwind/react/dist";
import { Star } from "iconoir-react";

export default function Page() {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="flex items-end gap-2 p-24">
      <Alert visible={open} rounded>
        <Alert.Icon>
          <Star className="h-full w-full" />
        </Alert.Icon>
        <Alert.Content>Hello World Material Tailwind</Alert.Content>
        <Alert.DismissTrigger onClick={() => setOpen(false)} />
      </Alert>
    </div>
  );
}
