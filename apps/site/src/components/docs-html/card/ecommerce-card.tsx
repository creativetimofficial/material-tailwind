export function EcommerceCard() {
  return (
    <div className="w-96 overflow-hidden rounded-lg border border-surface bg-background shadow-lg shadow-black/5">
      <img
        src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
        alt="card-image"
        className="m-1.5 h-96 w-[calc(100%-12px)] rounded-[5px] object-cover"
      />
      <div className="h-max w-full rounded px-3 py-2">
        <div className="mb-2 flex items-center justify-between">
          <h6 className="font-sans text-base font-bold text-inherit antialiased md:text-lg lg:text-xl">
            Apple AirPods
          </h6>
          <h6 className="font-sans text-base font-bold text-inherit antialiased md:text-lg lg:text-xl">
            $95.00
          </h6>
        </div>
        <p className="font-sans text-base text-foreground antialiased">
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </p>
      </div>
      <div className="w-full rounded px-3 pb-3 pt-1.5">
        <button className="inline-flex w-full select-none items-center justify-center rounded-md border border-secondary bg-secondary px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:border-secondary-light hover:bg-secondary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
