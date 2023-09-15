import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Typography,
} from "@material-tailwind/react";

export function PopoverWithImage() {
  return (
    <Popover>
      <PopoverHandler>
        <Button>More Info</Button>
      </PopoverHandler>
      <PopoverContent className="z-[999] flex w-[28rem] overflow-hidden p-0">
        <div className="p-4">
          <Typography color="blue-gray" className="mb-2 font-medium">
            Material Tailwind
          </Typography>
          <Typography variant="small" color="gray" className="mb-4 font-normal">
            Material Tailwind is an easy to use components library for Tailwind
            CSS and Material Design. It features multiple React and HTML
            components, all written with Tailwind CSS classes and Material
            Design guidelines.
          </Typography>
          <a href="#" className="inline-block">
            <Button
              size="sm"
              variant="text"
              className="flex items-center gap-1 capitalize"
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-3.5 w-3.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </div>
        <img
          src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbSUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="image"
          className="h-full w-1/2 object-cover"
        />
      </PopoverContent>
    </Popover>
  );
}
