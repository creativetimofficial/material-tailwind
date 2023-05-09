import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import {
  HomeIcon,
  BellIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

export function TimelineWithIcon() {
  return (
    <div className="w-[32rem]">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <HomeIcon className="h-4 w-4" />
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
            <TimelineIcon className="p-2">
              <BellIcon className="h-4 w-4" />
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
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <CurrencyDollarIcon className="h-4 w-4" />
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
