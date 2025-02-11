import { Card, Typography, Button } from "@material-tailwind/react";
import { FrameSelect } from "iconoir-react";

export default function CardWithLink() {
  return (
    <Card className="max-w-xs">
      <Card.Header className="mx-3 mt-3">
        <FrameSelect className="h-16 w-16" />
      </Card.Header>
      <Card.Body>
        <Typography type="h6">UI/UX Review Check</Typography>
        <Typography className="my-1 text-foreground">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main night life in
          Barcelona.
        </Typography>
      </Card.Body>
      <Card.Footer>
        <Button isFullWidth size="sm" as="a" href="#">
          Read More
        </Button>
      </Card.Footer>
    </Card>
  );
}
