export function DefaultCollapse() {
  return (
    <>
      <button
        data-ripple-light="true"
        data-collapse-target="collapse"
        className="mb-4 select-none rounded-lg bg-gray-900 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        Open Collapse
      </button>
      <div
        data-collapse="collapse"
        className="block h-0 w-full basis-full overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className="relative mx-auto flex w-8/12 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="p-6">
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Use our Tailwind CSS collapse for your website. You can use if for
              accordion, collapsible items and much more.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
