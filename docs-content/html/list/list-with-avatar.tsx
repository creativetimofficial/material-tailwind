export function ListWithAvatar() {
  return (
    <div className="relative flex w-96 flex-col rounded-lg border border-slate-200 bg-white shadow-sm">
      <nav className="flex min-w-[240px] flex-col gap-1 p-1.5">
        <div
          role="button"
          className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          <div className="mr-4 grid place-items-center">
            <img
              alt="candice"
              src="https://docs.material-tailwind.com/img/face-1.jpg"
              className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
            />
          </div>
          <div>
            <h6 className="text-slate-800 font-medium">
              Tania Andrew
            </h6>
            <p className="text-slate-500 text-sm">
              Software Engineer @ Material Tailwind
            </p>
          </div>
        </div>
        <div
          role="button"
          className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          <div className="mr-4 grid place-items-center">
            <img
              alt="alexander"
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
            />
          </div>
          <div>
            <h6 className="text-slate-800 font-medium">
              Alexander
            </h6>
            <p className="text-slate-500 text-sm">
              Backend Developer @ Material Tailwind
            </p>
          </div>
        </div>
        <div
          role="button"
          className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          <div className="mr-4 grid place-items-center">
            <img
              alt="emma"
              src="https://docs.material-tailwind.com/img/face-3.jpg"
              className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
            />
          </div>
          <div>
            <h6 className="text-slate-800 font-medium">
              Emma Willever
            </h6>
            <p className="text-slate-500 text-sm">
              UI/UX Designer @ Material Tailwind
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}
