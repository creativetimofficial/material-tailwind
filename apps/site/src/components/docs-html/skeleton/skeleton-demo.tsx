import { Typography } from "@material-tailwind/react";
 
export default function SkeletonDemo() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="max-w-full animate-pulse">
  <div class="font-sans antialiased text-base text-inherit mb-4 h-3 w-56 rounded-full bg-gray-300"></div>
  <div class="font-sans antialiased text-base text-inherit mb-2 h-2 w-72 rounded-full bg-gray-300"></div>
  <div class="font-sans antialiased text-base text-inherit mb-2 h-2 w-72 rounded-full bg-gray-300"></div>
  <div class="font-sans antialiased text-base text-inherit mb-2 h-2 w-72 rounded-full bg-gray-300"></div>
  <div class="font-sans antialiased text-base text-inherit mb-2 h-2 w-72 rounded-full bg-gray-300"></div>
</div>

`
      }}
    />
  );
}