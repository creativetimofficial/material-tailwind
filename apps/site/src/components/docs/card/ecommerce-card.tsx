import { Card, Typography, Button } from "@material-tailwind/react";

export function EcommerceCard() {
  return (
    <Card className="w-96">
      <Card.Header
        as="img"
        src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
        alt="card-image"
        className="h-96 object-cover"
      />
      <Card.Body>
        <div className="mb-2 flex items-center justify-between">
          <Typography type="h6">Apple AirPods</Typography>
          <Typography type="h6">$95.00</Typography>
        </div>
        <Typography className="text-foreground">
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </Card.Body>
      <Card.Footer>
        <Button isFullWidth color="secondary">
          Add to Cart
        </Button>
      </Card.Footer>
    </Card>
  );
}
