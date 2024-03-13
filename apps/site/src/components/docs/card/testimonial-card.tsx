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
      <Card.Header className="flex items-center gap-4 pt-0 pb-8 mx-0">
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
            <div className="flex items-center gap-0 5">
              <StarSolid className="w-5 h-5 text-yellow-500" />
              <StarSolid className="w-5 h-5 text-yellow-500" />
              <StarSolid className="w-5 h-5 text-yellow-500" />
              <StarSolid className="w-5 h-5 text-yellow-500" />
              <StarSolid className="w-5 h-5 text-yellow-500" />
            </div>
          </div>
          <Typography>Frontend Lead @ Google</Typography>
        </div>
      </Card.Header>
      <CardBody className="p-0 mb-6">
        <Typography>
          &quot;I found solution to all my design needs from Creative Tim. I use
          them as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!&quot;
        </Typography>
      </CardBody>
    </Card>
  );
}
