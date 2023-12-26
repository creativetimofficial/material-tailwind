"use client";
import Image from "next/image";
import { Avatar } from "@material-tailwind/react/dist";
import { ProfileCircle } from "iconoir-react";

export default function Page() {
  return (
    <div className="flex items-end gap-2 p-24">
      <Avatar
        as={Image}
        size="xl"
        width={768}
        height={768}
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
        alt="username"
      />
    </div>
  );
}
