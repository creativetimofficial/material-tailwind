export function CardWithFooter() {
  return (
    <div className="relative flex flex-col mt-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div className="p-4">
          <h5 className="mb-2 text-slate-800 text-xl font-semibold">
          The key is to enjoy life
          </h5>
          <p className="text-slate-600 leading-normal font-light">
          Surround yourself with angels. Life is what you make it, so let’s make it. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it.
          </p>
      </div>
      <div className="mx-3 border-t border-slate-200 pb-3 pt-2 px-1">
          <span className="text-sm text-slate-500">
              Last updated: 4 hours ago
          </span>
      </div>
    </div>
  );
}
