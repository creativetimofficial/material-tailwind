export function CardWithHeader() {
  return (
    <div className="relative flex flex-col mt-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
          <span className="text-sm text-slate-500">
              Header for the card
          </span>
      </div>
      <div className="p-4">
          <h5 className="mb-2 text-slate-800 text-xl font-semibold">
          Website Review Check Text
          </h5>
          <p className="text-slate-600 leading-normal font-light">
          Surround yourself with angels. Life is what you make it, so let’s make it. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it.
          </p>
      </div>
    </div>
  );
}
