import {
  Card,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react/dist";
import { StarSolid } from "iconoir-react";

export function TestimonialCard() {
  return (
    <Card className="w-full max-w-[26rem] border-none shadow-none">
      <Card.Header className="mx-0 flex items-center gap-4 pb-8 pt-0">
        <Avatar
          size="lg"
          shape="rounded"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="tania andrew"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography type="h5" color="blue-gray">
              Tania Andrew
            </Typography>
            <div className="5 flex items-center gap-0">
              <StarSolid className="h-5 w-5 text-warning" />
              <StarSolid className="h-5 w-5 text-warning" />
              <StarSolid className="h-5 w-5 text-warning" />
              <StarSolid className="h-5 w-5 text-warning" />
              <StarSolid className="h-5 w-5 text-warning" />
            </div>
          </div>
          <Typography>Frontend Lead @ Google</Typography>
        </div>
      </Card.Header>
      <CardBody className="mb-6 p-0">
        <Typography className="text-foreground">
          &quot;I found solution to all my design needs from Creative Tim. I use
          them as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!&quot;
        </Typography>
      </CardBody>
    </Card>
  );
}
