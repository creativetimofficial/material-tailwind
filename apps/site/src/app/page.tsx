"use client";
import React from "react";
import { Menu, Button } from "@material-tailwind/react/dist";

export default function Page() {
  return (
    <div className="flex items-end gap-2 p-24">
      <Menu>
        <Menu.Trigger as={Button}>Open Menu Menu</Menu.Trigger>
        <Menu.Content>
          <Menu.Item disabled>Menu Item 1</Menu.Item>
          <Menu>
            <Menu.Trigger as={Menu.Item}>Menu Item 2</Menu.Trigger>
            <Menu.Content>
              <Menu>
                <Menu.Trigger as={Menu.Item}>Menu Item 1</Menu.Trigger>
                <Menu.Content>
                  <Menu.Item>Menu Item 1</Menu.Item>
                  <Menu.Item>Menu Item 2</Menu.Item>
                  <Menu.Item>Menu Item 3</Menu.Item>
                </Menu.Content>
              </Menu>
              <Menu.Item>Menu Item 2</Menu.Item>
              <Menu.Item>Menu Item 3</Menu.Item>
            </Menu.Content>
          </Menu>
          <Menu.Item>Menu Item 3</Menu.Item>
        </Menu.Content>
      </Menu>
    </div>
  );
}
