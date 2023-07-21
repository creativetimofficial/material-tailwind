import { Input } from "@material-tailwind/react";

export function InputCustomStyles() {
  return (
    <div className="w-72">
      <Input
        type="email"
        placeholder="Email Address"
        className="!border !border-blue-gray-50 bg-white text-blue-gray-500 shadow-lg shadow-blue-gray-900/5 ring-4 ring-transparent placeholder:text-blue-gray-200 focus:!border-blue-500 focus:!border-t-blue-500 focus:ring-blue-500/20"
        labelProps={{
          className: "hidden",
        }}
        containerProps={{ className: "min-w-[100px]" }}
      />
    </div>
  );
}
