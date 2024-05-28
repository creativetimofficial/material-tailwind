import { Spinner } from "@material-tailwind/react";

export default function Loading() {
  return (
    <div className="grid h-[90%] place-items-center">
      <Spinner />
    </div>
  );
}
