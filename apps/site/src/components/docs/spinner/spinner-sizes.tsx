import { Spinner } from "@material-tailwind/react";

export default function SpinnerSizes() {
  return (
    <div className="flex items-end gap-4">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
      <Spinner size="xxl" />
    </div>
  );
}
