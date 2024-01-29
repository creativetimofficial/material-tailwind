import { Card, Typography, Button } from "@material-tailwind/react/dist";

export function CardDemo() {
  return (
    <Card className="max-w-xs">
      <Card.Header as="img" src="https://dub.sh/CLrLpxd" alt="image" />
      <Card.Body>
        <Typography variant="h6">UI/UX Review Check</Typography>
        <Typography className="my-1 text-gray-600">
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
