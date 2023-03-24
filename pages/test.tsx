import { Typography } from "@material-tailwind/react";
import React from "react";

export default function Test() {
  const iconRef = React.useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState<any>(() => {
    if (iconRef.current) {
      const rect = iconRef.current.getBoundingClientRect();

      return rect.width;
    }
  });

  React.useEffect(() => {
    if (iconRef.current) {
      const rect = iconRef.current.getBoundingClientRect();
      setWidth(rect.width);
    }
  }, []);

  return (
    <div className="grid h-screen w-screen place-items-center">
      <div className="flex w-[32rem] flex-col">
        <div className="relative flex flex-col gap-2">
          <div
            className="absolute left-0 grid h-full justify-center bg-transparent"
            style={{
              width: `${width}px`,
              top: `${width}px`,
            }}
          >
            <span className="h-full w-1 bg-green-500"></span>
          </div>
          <div className="flex items-center gap-4">
            <div ref={iconRef}>
              <span className="relative z-10 block h-5 w-5 flex-shrink-0 rounded-full bg-red-500"></span>
            </div>
            <Typography variant="h4" color="blue-gray">
              Timeline Title
            </Typography>
          </div>
          <div className="flex items-center gap-4">
            <span
              className="pointer-events-none invisible h-full flex-shrink-0"
              style={{
                width: `${width}px`,
              }}
            ></span>
            <Typography color="gray" className="font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              maxime accusantium, natus placeat, esse corporis optio officiis
              expedita odit quisquam dolorum autem deleniti eius sit totam
              labore consequatur, quo alias.
            </Typography>
          </div>
        </div>
        <div className="relative flex flex-col gap-2 [direction:rtl]">
          <div
            className="absolute right-0 grid h-full justify-center bg-transparent"
            style={{
              width: `${width}px`,
              top: `${width}px`,
            }}
          >
            <span className="h-full w-1 bg-green-500"></span>
          </div>
          <div className="flex items-center gap-4">
            <div ref={iconRef}>
              <span className="relative z-10 block h-5 w-5 flex-shrink-0 rounded-full bg-red-500"></span>
            </div>
            <Typography variant="h4" color="blue-gray">
              Timeline Title
            </Typography>
          </div>
          <div className="flex items-center gap-4">
            <span
              className="pointer-events-none invisible h-full flex-shrink-0"
              style={{
                width: `${width}px`,
              }}
            ></span>
            <Typography color="gray" className="font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              maxime accusantium, natus placeat, esse corporis optio officiis
              expedita odit quisquam dolorum autem deleniti eius sit totam
              labore consequatur, quo alias.
            </Typography>
          </div>
        </div>
        <div className="relative flex flex-col gap-2 [direction:rtl]">
          <div
            className="absolute right-0 grid h-full justify-center bg-transparent"
            style={{
              width: `${width}px`,
              top: `${width}px`,
            }}
          >
            <span className="h-full w-1 bg-green-500"></span>
          </div>
          <div className="flex items-center gap-4">
            <div ref={iconRef}>
              <span className="relative z-10 block h-5 w-5 flex-shrink-0 rounded-full bg-red-500"></span>
            </div>
            <Typography variant="h4" color="blue-gray">
              Timeline Title
            </Typography>
          </div>
          <div className="flex items-center gap-4">
            <span
              className="pointer-events-none invisible h-full flex-shrink-0"
              style={{
                width: `${width}px`,
              }}
            ></span>
            <Typography color="gray" className="font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              maxime accusantium, natus placeat, esse corporis optio officiis
              expedita odit quisquam dolorum autem deleniti eius sit totam
              labore consequatur, quo alias.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
