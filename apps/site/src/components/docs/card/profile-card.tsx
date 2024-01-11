import {
  Card,
  Typography,
  IconButton,
  Tooltip,
} from "@material-tailwind/react/dist";
import { X, Facebook, Instagram } from "iconoir-react";

export function ProfileCard() {
  return (
    <Card className="max-w-xs">
      <Card.Header
        as="img"
        src="https://dub.sh/TdSBP0D"
        alt="profile-picture"
      />
      <Card.Body className="text-center">
        <Typography variant="h5">Alex Andrew</Typography>
        <Typography className="my-1 text-gray-600 dark:text-gray-400">
          CEO & Co-Founder
        </Typography>
      </Card.Body>
      <Card.Footer className="flex items-center justify-center gap-1">
        <Tooltip>
          <Tooltip.Trigger
            as={IconButton}
            size="sm"
            variant="ghost"
            color="info"
          >
            <X className="h-3.5 w-3.5" />
          </Tooltip.Trigger>
          <Tooltip.Content>
            Follow
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger
            as={IconButton}
            size="sm"
            variant="ghost"
            color="info"
          >
            <Facebook className="h-4 w-4" />
          </Tooltip.Trigger>
          <Tooltip.Content>
            Like
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger
            as={IconButton}
            size="sm"
            variant="ghost"
            color="info"
          >
            <Instagram className="h-4 w-4" />
          </Tooltip.Trigger>
          <Tooltip.Content>
            Follow
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
      </Card.Footer>
    </Card>
  );
}
