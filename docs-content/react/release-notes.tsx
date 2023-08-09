import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Chip,
} from "@material-tailwind/react";
import { HomeIcon } from "@heroicons/react/24/solid";
import releases from "./releases";

export function ReleaseNotes() {
  return (
    <div className="ml-28">
      <Timeline>
        {releases.map((release, key) => (
          <TimelineItem
            key={key}
            id={`v${release.version}`}
            className="scroll-mt-48"
          >
            <div className="absolute -left-28 -top-8 flex flex-col items-end">
              <Chip
                variant="outlined"
                value={`v${release.version}`}
                className="mb-2 w-max rounded-full border-blue-gray-50 px-2 py-1 lowercase text-primary"
              />
              <Typography
                variant="small"
                className="font-bold capitalize text-primary"
              >
                {release.date}
              </Typography>
            </div>

            <TimelineConnector />

            <TimelineHeader>
              <TimelineIcon className=" border-2 border-blue-gray-100 !bg-gray-50  p-1.5 ">
                <HomeIcon className="h-3.5 w-3.5 text-blue-gray-200" />
              </TimelineIcon>
              <Typography variant="h5" className="text-primary">
                {release.name}
              </Typography>
            </TimelineHeader>
            <TimelineBody className="w-auto pb-8">
              <Typography className="mb-4 font-normal text-gray-600">
                {release.description}
              </Typography>
              {release.content.map((content, idx) => (
                <div key={idx}>
                  <Typography className="mb-1 font-semibold capitalize text-primary">
                    {content.title}
                  </Typography>
                  <ul className="ml-4 list-disc space-y-1">
                    {content.data.map((arrData, i) => (
                      <li key={i}>
                        <Typography className="font-normal text-gray-600">
                          {arrData}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </TimelineBody>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}

export default ReleaseNotes;
