export function ListWithAvatar() {
  return (
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
        <div
          role="button"
          className="flex w-full items-center rounded-lg p-3 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div className="mr-4 grid place-items-center">
            <img
              alt="candice"
              src="https://docs.material-tailwind.com/img/face-1.jpg"
              className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
            />
          </div>
          <div>
            <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
              Tania Andrew
            </h6>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
              Software Engineer @ Material Tailwind
            </p>
          </div>
        </div>
        <div
          role="button"
          className="flex w-full items-center rounded-lg p-3 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div className="mr-4 grid place-items-center">
            <img
              alt="alexander"
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
            />
          </div>
          <div>
            <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
              Alexander
            </h6>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
              Backend Developer @ Material Tailwind
            </p>
          </div>
        </div>
        <div
          role="button"
          className="flex w-full items-center rounded-lg p-3 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div className="mr-4 grid place-items-center">
            <img
              alt="emma"
              src="https://docs.material-tailwind.com/img/face-3.jpg"
              className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
            />
          </div>
          <div>
            <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
              Emma Willever
            </h6>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
              UI/UX Designer @ Material Tailwind
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}
