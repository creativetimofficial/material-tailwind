import { Card, Typography, Button } from "@material-tailwind/react";

export function HorizontalCard() {
  return (
    <Card className="flex h-full w-full max-w-3xl flex-row">
      <Card.Header className="m-0 h-full w-2/5 shrink-0 rounded-r-none">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </Card.Header>
      <Card.Body className="p-4">
        <Typography
          type="small"
          className="mb-4 font-bold uppercase text-foreground"
        >
          startups
        </Typography>
        <Typography type="h5" className="mb-2">
          Lyft launching cross-platform service this week
        </Typography>
        <Typography className="mb-8 text-foreground">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part
          of the story
        </Typography>
        <Button as="a" href="#" className="mb-2 flex w-fit items-center gap-2">
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </Card.Body>
    </Card>
  );
}
