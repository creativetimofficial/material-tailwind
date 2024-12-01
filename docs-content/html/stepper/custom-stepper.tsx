export function CustomStepper() {
  return (
    <div className="w-full px-8 py-4">
      <div className="relative m-0 grid h-24 w-full place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 bg-clip-border text-white shadow-lg shadow-gray-900/20">
        <div className="w-full px-20 pt-4 pb-8">
          <div className="relative flex w-full items-center justify-between">
            <div className="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-white/50"></div>
            <div className="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-white transition-all duration-500"></div>
            <div className="relative z-10 grid h-4 w-4 cursor-pointer place-items-center rounded-full  !bg-white font-bold text-white ring-0 transition-all duration-300">
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased">
                  HTML
                </h6>
              </div>
            </div>
            <div className="relative z-10 grid h-4 w-4 cursor-pointer place-items-center rounded-full  !bg-blue-gray-50 font-bold text-white/75 transition-all duration-300">
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased">
                  React
                </h6>
              </div>
            </div>
            <div className="relative z-10 grid h-4 w-4 cursor-pointer place-items-center rounded-full  !bg-blue-gray-50 font-bold text-white/75 transition-all duration-300">
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased">
                  Vue
                </h6>
              </div>
            </div>
            <div className="relative z-10 grid h-4 w-4 cursor-pointer place-items-center rounded-full  !bg-blue-gray-50 font-bold text-white/75 transition-all duration-300">
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased">
                  Svelte
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
