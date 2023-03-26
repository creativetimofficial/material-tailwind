import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import Timeline from "../packages/material-tailwind-react/src/components/Timeline";

export default function Test() {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <div className="w-96">
        <Timeline>
          <Timeline.Item>
            <Timeline.Connector />
            <Timeline.Header>
              <Timeline.Icon color="purple" variant="outlined">
                <AcademicCapIcon className="h-5 w-5" />
              </Timeline.Icon>
              <Typography variant="h5" color="blue-gray">
                Timeline Title Here.
              </Typography>
            </Timeline.Header>
            <Timeline.Body className="pb-12">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corporis, quaerat sunt ipsam repellendus explicabo culpa eum odio
              molestiae unde, iste doloremque maxime. Eligendi libero animi
              sapiente quaerat inventore provident error.
            </Timeline.Body>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Connector />
            <Timeline.Header>
              <Timeline.Icon color="purple" variant="gradient">
                <AcademicCapIcon className="h-5 w-5" />
              </Timeline.Icon>
              <Typography variant="h5" color="blue-gray">
                Timeline Title Here.
              </Typography>
            </Timeline.Header>
            <Timeline.Body>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corporis, quaerat sunt ipsam repellendus explicabo culpa eum odio
              molestiae unde, iste doloremque maxime. Eligendi libero animi
              sapiente quaerat inventore provident error.
            </Timeline.Body>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
}
