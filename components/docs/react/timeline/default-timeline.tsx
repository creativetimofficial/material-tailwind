import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

export function DefaultTimeline() {
  return (
    <div className="w-[32rem]">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              variant="small"
              color="gary"
              className="font-normal text-gray-600"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corporis, quaerat sunt ipsam repellendus explicabo culpa eum odio
              molestiae unde, iste doloremque maxime. Eligendi libero animi
              sapiente quaerat inventore provident error.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              variant="small"
              color="gary"
              className="font-normal text-gray-600"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corporis, quaerat sunt ipsam repellendus explicabo culpa eum odio
              molestiae unde, iste doloremque maxime. Eligendi libero animi
              sapiente quaerat inventore provident error.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography
              variant="small"
              color="gary"
              className="font-normal text-gray-600"
            >
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
