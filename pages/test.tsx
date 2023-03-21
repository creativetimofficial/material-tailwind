import { Spinner } from "@material-tailwind/react";

export default function Test() {
  return (
    <div className="grid h-screen w-screen place-items-center px-24">
      <Spinner width={48} height={48} color="indigo" />
    </div>
  );
}