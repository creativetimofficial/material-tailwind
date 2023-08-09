import { Chip, Avatar, Typography } from "@material-tailwind/react";

export function ChipWithAvatar() {
  return (
    <Chip
      icon={
        <Avatar
          size="xs"
          variant="circular"
          className="h-full w-full -translate-x-0.5"
          alt="Tania Andrew"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        />
      }
      value={
        <Typography
          variant="small"
          color="white"
          className="font-medium capitalize leading-none"
        >
          Tania Andrew
        </Typography>
      }
      className="rounded-full py-1.5"
    />
  );
}
