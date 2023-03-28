import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import {
  HomeIcon,
  BellIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

export function TimelineWithAvatar() {
  return (
    <div className="w-[32rem]">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar size="sm" src="/img/team-1.jpg" alt="user 1" withBorder />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corporis, quaerat sunt ipsam repellendus explicabo culpa eum odio
              molestiae unde, iste doloremque maxime. Eligendi libero animi
              sapiente quaerat inventore provident error.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar size="sm" src="/img/team-2.jpg" alt="user 2" withBorder />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corporis, quaerat sunt ipsam repellendus explicabo culpa eum odio
              molestiae unde, iste doloremque maxime. Eligendi libero animi
              sapiente quaerat inventore provident error.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar size="sm" src="/img/team-3.jpg" alt="user 3" withBorder />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gary" className="font-normal text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corporis, quaerat sunt ipsam repellendus explicabo culpa eum odio
              molestiae unde, iste doloremque maxime. Eligendi libero animi
              sapiente quaerat inventore provident error.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
