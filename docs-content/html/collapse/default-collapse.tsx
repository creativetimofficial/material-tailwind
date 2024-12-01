export function DefaultCollapse() {
  return (
    <>
      <button 
        data-collapse-target="collapse"
        className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
        Open Collapse
      </button>
      <div
        data-collapse="collapse"
        className="block h-0 w-full basis-full overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className="relative mx-auto flex w-8/12 flex-col rounded-lg bg-white border border-slate-200 shadow-sm mt-4">
          <div className="p-4">
            <p className="text-slate-600 font-light">
              Use our Tailwind CSS collapse for your website. You can use if for
              accordion, collapsible items and much more.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
