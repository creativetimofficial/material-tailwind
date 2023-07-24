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
import { HomeIcon, BellIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import releases from "./releases";

export default function ReleaseNotes() {
  return (
    <div className="ml-28">
      <Timeline>
        {releases.map((release) => (
          <TimelineItem>
            <div className="absolute -left-28 -top-8 flex flex-col items-end">
              <Chip
                variant="outlined"
                color="blue-gray"
                value={`v${release.version}`}
                className="mb-2 w-max rounded-full border-blue-gray-50 px-2 py-1 lowercase text-blue-gray-900"
              />
              <Typography variant="small" color="blue-gray" className="font-bold">
                {release.date}
              </Typography>
            </div>

            <TimelineConnector />

            <TimelineHeader>
              <TimelineIcon className=" border-2 border-blue-gray-100 !bg-gray-50  p-1.5 ">
                <HomeIcon className="h-3.5 w-3.5 text-blue-gray-200" />
              </TimelineIcon>
              <Typography variant="h5" color="blue-gray-300">
                {release.name}
              </Typography>
            </TimelineHeader>
            <TimelineBody className="w-auto pb-8">
              <Typography className="mb-4 font-medium text-blue-gray-500">
                {release.description}
                {/* <span className="font-bold text-blue-gray-600 ">
                  5 new components and 5 sections.
                </span> */}
              </Typography>
              {release.content.map((conten) => (
                <div>
                  <Typography className="mb-1 font-semibold capitalize text-blue-gray-800">
                    {conten.title}
                  </Typography>
                  <div>
                    {conten.data.map((arrData) => (
                      <div className="mb-1 flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-blue-gray-100"></div>
                        <Typography className="font-medium text-blue-gray-400">
                          {arrData}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </TimelineBody>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
