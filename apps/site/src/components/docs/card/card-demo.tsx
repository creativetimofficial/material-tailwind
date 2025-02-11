import { Card, Typography, Button } from "@material-tailwind/react";

export default function CardDemo() {
  return (
    <Card className="max-w-xs">
      <Card.Header as="img" src="https://images.unsplash.com/photo-1581337204873-ef36aa186caa?q=80&w=800&auto=format&fit=crop" alt="image" />
      <Card.Body>
        <Typography type="h6">UI/UX Review Check</Typography>
        <Typography className="my-1 text-foreground">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main night life in
          Barcelona.
        </Typography>
      </Card.Body>
      <Card.Footer>
        <Button>Read More</Button>
      </Card.Footer>
    </Card>
  );
}
