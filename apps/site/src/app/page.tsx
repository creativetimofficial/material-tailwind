"use client";
import * as React from "react";
import { Breadcrumb } from "@material-tailwind/react/dist";

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-xs py-12">
      <Breadcrumb>
        <Breadcrumb.Link href="#">About</Breadcrumb.Link>
        <Breadcrumb.Separator>-</Breadcrumb.Separator>
        <Breadcrumb.Link href="#">Contact</Breadcrumb.Link>
      </Breadcrumb>
    </div>
  );
}
