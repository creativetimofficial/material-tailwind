export function TimelineDemo() {
  return (
    <div className="flex w-full flex-col items-start ">
      <div className="group flex gap-x-6">
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-secondary"></div>
          <span className="relative z-10 grid h-3 w-3 place-items-center rounded-full bg-secondary text-secondary-foreground"></span>
        </div>
        <div className="-translate-y-1.5 pb-8 text-foreground">
          <p className="font-sans text-base font-bold text-black antialiased dark:text-white">
            Timeline Title Here.
          </p>
          <small className="mt-2 font-sans text-sm text-foreground antialiased">
            The key to more success is to have a lot of pillows. Put it this
            way, it took me twenty five years to get these plants, twenty five
            years of blood sweat and tears, and I'm never giving up, I'm just
            getting started. I'm up to something. Fan luv.
          </small>
        </div>
      </div>
      <div className="group flex gap-x-6">
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-secondary"></div>
          <span className="relative z-10 grid h-3 w-3 place-items-center rounded-full bg-secondary text-secondary-foreground"></span>
        </div>
        <div className="-translate-y-1.5 pb-8 text-foreground">
          <p className="font-sans text-base font-bold text-black antialiased dark:text-white">
            Timeline Title Here.
          </p>
          <small className="mt-2 font-sans text-sm text-foreground antialiased">
            The key to more success is to have a lot of pillows. Put it this
            way, it took me twenty five years to get these plants, twenty five
            years of blood sweat and tears, and I'm never giving up, I'm just
            getting started. I'm up to something. Fan luv.
          </small>
        </div>
      </div>
      <div className="group flex gap-x-6">
        <div className="relative">
          <span className="relative z-10 grid h-3 w-3 place-items-center rounded-full bg-secondary text-secondary-foreground"></span>
        </div>
        <div className="-translate-y-1.5 pb-8 text-foreground">
          <p className="font-sans text-base font-bold text-black antialiased dark:text-white">
            Timeline Title Here.
          </p>
          <small className="mt-2 font-sans text-sm text-foreground antialiased">
            The key to more success is to have a lot of pillows. Put it this
            way, it took me twenty five years to get these plants, twenty five
            years of blood sweat and tears, and I'm never giving up, I'm just
            getting started. I'm up to something. Fan luv.
          </small>
        </div>
      </div>
    </div>
  );
}
