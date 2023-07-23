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

export default function ReleaseNotes() {
  return (
    <div className="ml-28">
      <Timeline>
        <TimelineItem>
          <div className="absolute -left-28 -top-8 flex flex-col items-end">
            <Chip
              variant="outlined"
              color="blue-gray"
              value="v2.1.1"
              className="mb-2 w-max rounded-full border-blue-gray-50 px-2 py-1 lowercase text-blue-gray-900"
            />
            <Typography variant="small" color="blue-gray" className="font-bold">
              May 28, 2023
            </Typography>
          </div>

          <TimelineConnector />

          <TimelineHeader>
            <TimelineIcon className=" border-2 border-blue-gray-100 !bg-gray-50  p-1.5 ">
              <HomeIcon className="h-3.5 w-3.5 text-blue-gray-200" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray-300">
              New Components & Section
            </Typography>
          </TimelineHeader>
          <TimelineBody className="w-auto pb-8">
            <Typography className="mb-4 font-medium text-blue-gray-500">
              Material Tailwind v2.1.1 - this release feature{" "}
              <span className="font-bold text-blue-gray-600 ">
                5 new components and 5 sections.
              </span>
            </Typography>
            <Typography className="mb-1 font-semibold text-blue-gray-800">Components:</Typography>
            <div>
              <div className="mb-1 flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-gray-100"></div>
                <Typography className="font-medium text-blue-gray-400">Badge</Typography>
              </div>
              <div className="mb-1 flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-gray-100"></div>
                <Typography className="font-medium text-blue-gray-400">Indicator</Typography>
              </div>
              <div className="mb-1 flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-gray-100"></div>
                <Typography className="font-medium text-blue-gray-400">Progress Bar</Typography>
              </div>
              <div className="mb-1 flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-gray-100"></div>
                <Typography className="font-medium text-blue-gray-400">Sliders</Typography>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-gray-100"></div>
                <Typography className="font-medium text-blue-gray-400">Toogles</Typography>
              </div>
            </div>

            <Typography className="my-3 font-semibold text-blue-gray-800">Sections:</Typography>
            <div>
              <div className="mb-1 flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-gray-100"></div>
                <Typography className="font-medium text-blue-gray-400">Blog</Typography>
              </div>
              <div className="mb-1 flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-gray-100"></div>
                <Typography className="font-medium text-blue-gray-400">Testmonial</Typography>
              </div>
              <div className="mb-1 flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-gray-100"></div>
                <Typography className="font-medium text-blue-gray-400">FAQ</Typography>
              </div>
              <div className="mb-1 flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-gray-100"></div>
                <Typography className="font-medium text-blue-gray-400">Content</Typography>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-gray-100"></div>
                <Typography className="font-medium text-blue-gray-400">Metrics</Typography>
              </div>
            </div>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <div className="absolute -left-28 -top-8 flex flex-col items-end">
            <Chip
              variant="outlined"
              color="blue-gray"
              value="v2.1.0"
              className="mb-2 w-max rounded-full border-blue-gray-50 px-2 py-1 lowercase text-blue-gray-900"
            />
            <Typography variant="small" color="blue-gray" className="font-bold">
              May 28, 2023
            </Typography>
          </div>

          <TimelineConnector />

          <TimelineHeader>
            <TimelineIcon className=" border-2 border-blue-gray-100 !bg-gray-50  p-1.5 ">
              <HomeIcon className="h-3.5 w-3.5 text-blue-gray-200" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray-300">
              New Components & Section
            </Typography>
          </TimelineHeader>
          <TimelineBody className="w-auto pb-8">
            <Typography className="mb-4 font-medium text-blue-gray-500">
              Material Tailwind v2.1.0 - this release feature{" "}
              <span className="font-bold text-blue-gray-600 ">
                5 new components and 5 sections.
              </span>
            </Typography>
            <Typography className="mb-1 font-semibold text-blue-gray-800">Components:</Typography>
            <div>
              <div className="mb-1 flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-gray-100"></div>
                <Typography className="font-medium text-blue-gray-400">Badge</Typography>
              </div>
              <div className="mb-1 flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-gray-100"></div>
                <Typography className="font-medium text-blue-gray-400">Indicator</Typography>
              </div>
              <div className="mb-1 flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-gray-100"></div>
                <Typography className="font-medium text-blue-gray-400">Progress Bar</Typography>
              </div>
              <div className="mb-1 flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-gray-100"></div>
                <Typography className="font-medium text-blue-gray-400">Sliders</Typography>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-gray-100"></div>
                <Typography className="font-medium text-blue-gray-400">Toogles</Typography>
              </div>
            </div>

            <Typography className="my-3 font-semibold text-blue-gray-800">Sections:</Typography>
            <div>
              <div className="mb-1 flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-gray-100"></div>
                <Typography className="font-medium text-blue-gray-400">Blog</Typography>
              </div>
              <div className="mb-1 flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-gray-100"></div>
                <Typography className="font-medium text-blue-gray-400">Testmonial</Typography>
              </div>
              <div className="mb-1 flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-gray-100"></div>
                <Typography className="font-medium text-blue-gray-400">FAQ</Typography>
              </div>
              <div className="mb-1 flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-gray-100"></div>
                <Typography className="font-medium text-blue-gray-400">Content</Typography>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-gray-100"></div>
                <Typography className="font-medium text-blue-gray-400">Metrics</Typography>
              </div>
            </div>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
