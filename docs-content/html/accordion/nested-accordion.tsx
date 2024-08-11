export function NestedAccordion() {
  return (
    <>
      <div className="relative mt-1 mb-7">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
            data-collapse-target="collapse-1"
          >
            <span>What is Material Tailwind?</span>
            <i className="absolute right-0 pt-1 text-xs fa fa-plus group-open:opacity-0"></i>
            <i className="absolute right-0 pt-1 text-xs opacity-0 fa fa-minus group-open:opacity-100"></i>
          </button>
        </h6>
        <div
          data-collapse="collapse-1"
          className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
            <div className="relative ">
              <h6 className="">
                <button
                  className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                  data-collapse-target="collapse-4"
                >
                  <span>What is Material Tailwind?</span>
                  <i className="absolute right-0 pt-1 text-xs fa fa-plus group-open:opacity-0"></i>
                  <i className="absolute right-0 pt-1 text-xs opacity-0 fa fa-minus group-open:opacity-100"></i>
                </button>
              </h6>
              <div
                data-collapse="collapse-4"
                className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
              >
                <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mb-3.5 mt-1">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
            data-collapse-target="collapse-2"
          >
            <span>How to use Material Tailwind?</span>
            <i className="absolute right-0 pt-1 text-xs fa fa-plus group-open:opacity-0"></i>
            <i className="absolute right-0 pt-1 text-xs opacity-0 fa fa-minus group-open:opacity-100"></i>
          </button>
        </h6>
        <div
          data-collapse="collapse-2"
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
      <div className="relative mb-3.5 mt-1">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
            data-collapse-target="collapse-3"
          >
            <span>What can I do with Material Tailwind?</span>
            <i className="absolute right-0 pt-1 text-xs fa fa-plus group-open:opacity-0"></i>
            <i className="absolute right-0 pt-1 text-xs opacity-0 fa fa-minus group-open:opacity-100"></i>
          </button>
        </h6>
        <div
          data-collapse="collapse-3"
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
