import { Menu, Button } from "@material-tailwind/react";

export default function MenuWithScrollingContent() {
  return (
    <Menu>
      <Menu.Trigger as={Button}>Open</Menu.Trigger>
      <Menu.Content className="max-h-72 overflow-y-scroll">
        <Menu.Item>Menu Item 1</Menu.Item>
        <Menu.Item>Menu Item 2</Menu.Item>
        <Menu.Item>Menu Item 3</Menu.Item>
        <Menu.Item>Menu Item 4</Menu.Item>
        <Menu.Item>Menu Item 5</Menu.Item>
        <Menu.Item>Menu Item 6</Menu.Item>
        <Menu.Item>Menu Item 7</Menu.Item>
        <Menu.Item>Menu Item 8</Menu.Item>
        <Menu.Item>Menu Item 9</Menu.Item>
        <Menu.Item>Menu Item 10</Menu.Item>
        <Menu.Item>Menu Item 11</Menu.Item>
        <Menu.Item>Menu Item 12</Menu.Item>
        <Menu.Item>Menu Item 13</Menu.Item>
        <Menu.Item>Menu Item 14</Menu.Item>
        <Menu.Item>Menu Item 15</Menu.Item>
        <Menu.Item>Menu Item 16</Menu.Item>
        <Menu.Item>Menu Item 17</Menu.Item>
        <Menu.Item>Menu Item 18</Menu.Item>
        <Menu.Item>Menu Item 19</Menu.Item>
        <Menu.Item>Menu Item 20</Menu.Item>
      </Menu.Content>
    </Menu>
  );
}
