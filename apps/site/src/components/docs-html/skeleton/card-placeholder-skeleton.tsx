
export default function CardPlacehoderSkeleton() {
  return (
    <div
    className="w-full place-items-center"
    dangerouslySetInnerHTML={{
      __html: `<div class="mt-6 w-96 animate-pulse">
  <div class="relative grid h-56 place-items-center bg-gray-300 rounded-md">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-12 w-12 text-gray-500">
      <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
    </svg>
  </div>
  <div>
    <div class="font-sans antialiased text-base text-inherit mb-4 mt-4 h-3 w-56 rounded-full bg-gray-300"></div>
    <div class="font-sans antialiased text-base text-inherit mb-2 h-2 w-full rounded-full bg-gray-300"></div>
    <div class="font-sans antialiased text-base text-inherit mb-2 h-2 w-full rounded-full bg-gray-300"></div>
    <div class="font-sans antialiased text-base text-inherit mb-2 h-2 w-full rounded-full bg-gray-300"></div>
    <div class="font-sans antialiased text-base text-inherit mb-2 h-2 w-full rounded-full bg-gray-300"></div>
  </div>
  <div class="pt-0">
    <button disabled tabindex="-1" class="inline-flex items-center justify-center align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:cursor-not-allowed text-sm rounded-md py-2 px-4 h-8 w-20 bg-gray-300 border-none shadow-none hover:shadow-none">
      &nbsp;
    </button>
  </div>
</div>
`
    }}
  />

  );
}