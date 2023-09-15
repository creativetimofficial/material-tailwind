import React from "react";
import { Alert, Button } from "@material-tailwind/react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function AlertCustomCloseIcon() {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      {!open && (
        <Button className="absolute" onClick={() => setOpen(true)}>
          Show Alert
        </Button>
      )}
      <Alert
        variant="gradient"
        open={open}
        icon={<Icon />}
        action={
          <Button
            variant="text"
            color="white"
            size="sm"
            className="!absolute top-3 right-3"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        }
      >
        Sorry, something went wrong please try again.
      </Alert>
    </>
  );
}
