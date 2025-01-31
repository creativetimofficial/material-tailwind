

export default function ImageWithBlurredCaption() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<figure class="relative h-96 w-full"><img src="https://dub.sh/Y0NxRWv" alt="nature-image" class="h-full w-full rounded-xl object-cover object-center" />
  <figcaption class="absolute bottom-4 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 overflow-hidden rounded-lg border border-slate-200 bg-white bg-opacity-75 shadow-lg shadow-slate-950/5 saturate-200 backdrop-blur-md">
    <div class="flex h-max w-full justify-between rounded px-4 py-2">
      <div>
        <h6 class="font-sans text-base font-bold text-current antialiased md:text-lg lg:text-xl">Sara Lamalo</h6>
        <p class="mt-1 font-sans text-base text-slate-600 antialiased">20 July 2022</p>
      </div>
      <p class="font-sans text-base font-bold text-current antialiased">Growth</p>
    </div>
  </figcaption>
</figure>
`
      }}
    />
  );
}
