"use client";
import { ComponentPreview } from "@components";
import { List } from "@material-tailwind/react/dist";
import { ProfileCircle } from "iconoir-react";

export default function Page() {
  return (
    <div className="p-24">
      <List>
        <List.Item disabled>
          <List.ItemStart>
            <ProfileCircle className="h-5 w-5" />
          </List.ItemStart>
          Item 1
          <List.ItemEnd>
            <ProfileCircle className="h-5 w-5" />
          </List.ItemEnd>
        </List.Item>
        <List.Item>Item 2</List.Item>
        <List.Item>Item 3</List.Item>
      </List>
    </div>
  );
}
