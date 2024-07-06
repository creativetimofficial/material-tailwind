export function AlertVariants() {
  return (
    <div className="flex w-full flex-col gap-2">
      <div
        role="alert"
        className="font-regular relative flex w-full rounded-lg bg-gray-900 px-4 py-4 text-base text-white"
      >
        <div className="mr-12 ">A simple filled alert for showing message.</div>
      </div>
      <div
        role="alert"
        className="font-regular relative flex w-full rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 px-4 py-4 text-base text-white"
      >
        <div className="mr-12 ">
          <span>A simple gradient alert for showing message.</span>
        </div>
      </div>
      <div
        role="alert"
        className="font-regular relative flex w-full rounded-lg border border-gray-900 px-4 py-4 text-base text-gray-900"
      >
        <div className="mr-12 ">
          <span>A simple outlined alert for showing message.</span>
        </div>
      </div>
      <div
        role="alert"
        className="font-regular relative flex w-full rounded-lg bg-gray-900/10 px-4 py-4 text-base text-gray-900"
      >
        <div className="mr-12 ">
          <span>A simple ghost alert for showing message.</span>
        </div>
      </div>
    </div>
  );
}
