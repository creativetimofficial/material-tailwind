export function CardWithHover() {
  return (
    <div className="relative flex flex-col mt-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:border-slate-300 hover:shadow-md rounded-lg transition-all cursor-pointer">
      <div className="p-4">
          <h5 className="mb-2 text-slate-800 text-xl font-semibold">
          It’s important to shape up
          </h5>
          <p className="text-slate-600 leading-normal font-light">
          Surround yourself with angels. Life is what you make it, so let’s make it. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it.
          </p>
      </div>
  </div>
  );
}
