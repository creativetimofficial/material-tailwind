export function AccordionCustomIcon() {
  return (
    <>
      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in"
            data-collapse-target="animated-collapse-1"
          >
            <span>What is Material Tailwind?</span>
            <i className="fa fa-chevron-down absolute right-0 pt-1 text-base transition-transform group-open:rotate-180"></i>
          </button>
        </h6>
        <div
          data-collapse="animated-collapse-1"
          className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </div>
        </div>
      </div>
      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in"
            data-collapse-target="animated-collapse-2"
          >
            <span>How to use Material Tailwind?</span>
            <i className="fa fa-chevron-down absolute right-0 pt-1 text-base transition-transform group-open:rotate-180"></i>
          </button>
        </h6>
        <div
          data-collapse="animated-collapse-2"
          className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </div>
        </div>
      </div>
      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in"
            data-collapse-target="animated-collapse-3"
          >
            <span>What can I do with Material Tailwind?</span>
            <i className="fa fa-chevron-down absolute right-0 pt-1 text-base transition-transform group-open:rotate-180"></i>
          </button>
        </h6>
        <div
          data-collapse="animated-collapse-3"
          className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </div>
        </div>
      </div>
    </>
  );
}
