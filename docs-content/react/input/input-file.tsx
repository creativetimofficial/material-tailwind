import { Input } from "@material-tailwind/react";

export function InputFile() {
  return (
    <div>
      <Input
        type="file"
        id="file-input"
        className="block w-full rounded-lg !border !border-gray-300  !px-0   !pt-0 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent  file:me-4 file:cursor-pointer file:rounded-md file:border-0 file:bg-blue-gray-900 file:px-3 file:py-[9px] file:text-white placeholder:!opacity-0 hover:cursor-pointer focus:z-10 focus:!border-gray-500    disabled:pointer-events-none disabled:opacity-50"
        labelProps={{
          className: "hidden",
        }}
      />
    </div>
  );
}
