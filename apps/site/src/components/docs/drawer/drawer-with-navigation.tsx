import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  Chip,
} from "@material-tailwind/react/dist";
import {
  Xmark,
  ShoppingBag,
  Settings,
  StatsDownSquare,
  ProfileCircle,
  HomeAlt,
} from "iconoir-react";

export function DrawerWithNavigation() {
  return (
    <Drawer>
      <Drawer.Trigger as={Button}>Open Drawer</Drawer.Trigger>
      <Drawer.Overlay>
        <Drawer.Panel placement="left">
          <div className="flex items-center justify-between gap-4">
            <Typography type="h6">Material Tailwind</Typography>
            <Drawer.DismissTrigger
              as={IconButton}
              size="sm"
              variant="ghost"
              className="absolute right-2 top-2"
              isCircular
            >
              <Xmark className="w-5 h-5" />
            </Drawer.DismissTrigger>
          </div>
          <List className="mt-8 space-y-3">
            <List.Item as="a" href="#">
              <List.ItemStart>
                <HomeAlt className="w-5 h-5" />
              </List.ItemStart>
              Dashboard
            </List.Item>
            <List.Item as="a" href="#">
              <List.ItemStart>
                <ShoppingBag className="w-5 h-5" />
              </List.ItemStart>
              Analytics
              <List.ItemEnd>
                <Chip size="sm" color="success">
                  <Chip.Label>5</Chip.Label>
                </Chip>
              </List.ItemEnd>
            </List.Item>
            <List.Item as="a" href="#">
              <List.ItemStart>
                <StatsDownSquare className="w-5 h-5" />
              </List.ItemStart>
              Sales
            </List.Item>
            <List.Item as="a" href="#">
              <List.ItemStart>
                <ProfileCircle className="w-5 h-5" />
              </List.ItemStart>
              Profile
            </List.Item>
            <List.Item as="a" href="#">
              <List.ItemStart>
                <Settings className="w-5 h-5" />
              </List.ItemStart>
              Tables
            </List.Item>
            <Button className="ml-2.5 mt-2 w-fit">Documentation</Button>
          </List>
        </Drawer.Panel>
      </Drawer.Overlay>
    </Drawer>
  );
}
