import { Card, Typography, Button, Chip } from "@material-tailwind/react/dist";
import { CheckCircleSolid } from "iconoir-react";

export function PricingCard() {
  return (
    <Card color="primary" className="max-w-xs">
      <Card.Header className="py-6 text-center">
        <Chip size="lg">
          <Chip.Label>Standard</Chip.Label>
        </Chip>
        <Typography
          as="span"
          variant="h1"
          color="secondary"
          className="mt-3 flex justify-center gap-1 text-7xl font-normal"
        >
          <span className="mt-2 text-4xl">$</span>29
          <span className="self-end text-4xl">/mo</span>
        </Typography>
      </Card.Header>
      <hr className="mx-3 border-primary-light" />
      <Card.Body as="ul" className="space-y-3 px-8 pb-6 pt-8">
        <li className="flex items-center gap-4 text-secondary-main">
          <CheckCircleSolid className="h-5 w-5" />
          <Typography>5 team members</Typography>
        </li>
        <li className="flex items-center gap-4 text-secondary-main">
          <CheckCircleSolid className="h-5 w-5" />
          <Typography>200+ components</Typography>
        </li>
        <li className="flex items-center gap-4 text-secondary-main">
          <CheckCircleSolid className="h-5 w-5" />
          <Typography>40+ built-in pages</Typography>
        </li>
        <li className="flex items-center gap-4 text-secondary-main">
          <CheckCircleSolid className="h-5 w-5" />
          <Typography>1 year free updates</Typography>
        </li>
        <li className="flex items-center gap-4 text-secondary-main">
          <CheckCircleSolid className="h-5 w-5" />
          <Typography>Life time technical support</Typography>
        </li>
      </Card.Body>
      <Card.Footer>
        <Button isFullWidth color="secondary">
          Buy Now
        </Button>
      </Card.Footer>
    </Card>
  );
}
