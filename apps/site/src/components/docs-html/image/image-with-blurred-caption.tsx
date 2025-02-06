export function ImageWithBlurredCaption() {
  return (
    <figure className="relative h-96 w-full">
      <img
        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/mt-demo.jpg"
        alt="nature-image"
        className="h-full w-full rounded-xl object-cover object-center"
      />
      <figcaption className="absolute bottom-4 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 overflow-hidden rounded-lg border border-surface bg-background bg-opacity-75 shadow-lg shadow-black/5 saturate-200 backdrop-blur-md">
        <div className="flex h-max w-full justify-between rounded px-4 py-2">
          <div>
            <h6 className="font-sans text-base font-bold text-inherit antialiased md:text-lg lg:text-xl">
              Sara Lamalo
            </h6>
            <p className="mt-1 font-sans text-base text-foreground antialiased">
              20 July 2022
            </p>
          </div>
          <p className="font-sans text-base font-bold text-inherit antialiased">
            Growth
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
