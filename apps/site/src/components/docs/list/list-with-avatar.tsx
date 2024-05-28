import * as React from "react";
import { List, Avatar, Typography } from "@material-tailwind/react";

const ListItem = React.forwardRef<
  typeof List.Item,
  {
    img: string;
    title: string;
    description: string;
  }
>(({ img, title, description, ...rest }, ref) => {
  return (
    <List.Item ref={ref as any} {...rest}>
      <List.ItemStart>
        <Avatar src={img} alt="profile-picture" />
      </List.ItemStart>
      <div>
        <Typography color="default" className="font-semibold">
          {title}
        </Typography>
        <Typography type="small" className="text-foreground">
          {description}
        </Typography>
      </div>
    </List.Item>
  );
});

export function ListWithAvatar() {
  return (
    <List>
      <ListItem
        img="https://dub.sh/TdSBP0D"
        title="Alex Andrew"
        description="Software Engineer @ Material Tailwind"
      />
      <ListItem
        img="https://dub.sh/rNFOKKJ"
        title="Alexander"
        description="Backend Developer @ Material Tailwind"
      />
      <ListItem
        img="https://dub.sh/6i238JA"
        title="Emma Willever"
        description="UI/UX Designer @ Material Tailwind"
      />
    </List>
  );
}
