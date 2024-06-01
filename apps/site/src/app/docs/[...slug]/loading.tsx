import { Spinner } from "@material-tailwind/react";

export default function Loading() {
  return (
    <div className="animate-in fade-in grid h-screen w-full place-items-center duration-500">
      <Spinner />
    </div>
  );
}
