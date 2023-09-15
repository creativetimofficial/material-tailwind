import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import {
  PlusIcon,
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";

export function CustomSpeedDial() {
  return (
    <div className="relative h-80 w-full">
      <div className="absolute bottom-0 right-0">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton color="white" size="lg" className="rounded-full border border-blue-gray-50 shadow-xl">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent className="rounded-full border border-blue-gray-50 bg-white shadow-xl shadow-black/10">
            <SpeedDialAction className="bg-blue-gray-50">
              <HomeIcon className="h-5 w-5" />
            </SpeedDialAction>
            <SpeedDialAction className="bg-blue-gray-50">
              <CogIcon className="h-5 w-5" />
            </SpeedDialAction>
            <SpeedDialAction className="bg-blue-gray-50">
              <Square3Stack3DIcon className="h-5 w-5" />
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}
