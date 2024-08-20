export function ComparisonTable() {
  return (
    <div className="flex w-full flex-col overflow-scroll rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="py-4">
        <table className="w-full min-w-[768px] table-auto">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="px-6 py-3 text-left">
                <span className="font-semibold text-slate-700">The Plans</span>
              </th>
              <th className="px-6 py-3 text-center">
                <span className="block mb-1 text-base font-normal text-slate-400">Team</span>
                <h5 className="block text-xl font-bold text-slate-800"> $39 </h5>
              </th>
              <th className="px-6 py-3 text-center">
                <span className="block mb-1 text-base font-normal text-slate-400">Growth</span>
                <h5 className="block text-xl font-bold text-slate-800"> $79 </h5>
              </th>
              <th className="px-6 py-3 text-center">
                <span className="block mb-1 text-base  font-normal text-slate-400">Enterprise</span>
                <h5 className="block text-xl font-bold text-slate-800"> $99 </h5>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-200">
              <td className="px-6 py-5 text-left">
                <p className="font-sans text-sm font-medium text-slate-500"> 50+ Section Examples </p>
              </td>
              <td className="px-6 py-5 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-green-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                </svg>
              </td>
              <td className="px-6 py-5 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-green-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                </svg>
              </td>
              <td className="px-6 py-5 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-green-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                </svg>
              </td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="px-6 py-5 text-left">
                <p className="font-sans text-sm font-medium text-slate-500"> Multiple use </p>
              </td>
              <td className="px-6 py-5 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-green-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                </svg>
              </td>
              <td className="px-6 py-5 text-center">
                <p className="block font-sans text-sm font-normal leading-normal text-inherit !text-gray-500"> upon request </p>
              </td>
              <td className="px-6 py-5 text-center">
                <p className="block font-sans text-sm font-normal leading-normal text-inherit !text-gray-500"> upon request </p>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-5 text-left"></td>
              <td className="px-6 py-5 text-center">
                <button className="select-none rounded bg-slate-800 py-2.5 px-4 text-center text-sm font-semibold text-white shadow-md shadow-slate-900/10 transition-all hover:shadow-lg hover:shadow-slate-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" data-ripple-light="true"> Buy Now </button>
              </td>
              <td className="px-6 py-5 text-center">
                <button className="select-none rounded bg-slate-800 py-2.5 px-4 text-center text-sm font-semibold text-white shadow-md shadow-slate-900/10 transition-all hover:shadow-lg hover:shadow-slate-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" data-ripple-light="true"> Buy Now </button>
              </td>
              <td className="px-6 py-5 text-center">
                <button className="select-none rounded bg-slate-800 py-2.5 px-4 text-center text-sm font-semibold text-white shadow-md shadow-slate-900/10 transition-all hover:shadow-lg hover:shadow-slate-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" data-ripple-light="true"> Buy Now </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
