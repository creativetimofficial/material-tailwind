export function CardDemo() {
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-lg border border-surface bg-background shadow-lg shadow-black/5">
      <img
        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/mt-demo.jpg"
        alt="image"
        className="m-1.5 h-max w-[calc(100%-12px)] rounded-[5px]"
      />
      <div className="h-max w-full rounded px-3 py-2">
        <h6 className="font-sans text-base font-bold text-inherit antialiased md:text-lg lg:text-xl">
          UI/UX Review Check
        </h6>
        <p className="my-1 font-sans text-base text-foreground antialiased">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main night life in
          Barcelona.
        </p>
      </div>
      <div className="w-full rounded px-3 pb-3 pt-1.5">
        <button className="inline-flex select-none items-center justify-center rounded-md border border-primary bg-primary px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
          Read More
        </button>
      </div>
    </div>
  );
}
