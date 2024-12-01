export function TableWithSearch() {
  return (
  <>
    <div className="w-full flex justify-between items-center mb-3 mt-1 pl-3">
      <div>
          <h3 className="text-lg font-semibold text-slate-800">Generated Invoice for this Month</h3>
          <p className="text-slate-500">Overview of the invoices.</p>
      </div>
      <div className="ml-3">
          <div className="w-full max-w-sm min-w-[200px] relative">
          <div className="relative">
              <input
              className="bg-white w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
              placeholder="Search for invoice..."
              />
              <button
              className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded "
              type="button"
              >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-8 h-8 text-slate-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              </button>
          </div>
          </div>
      </div>
    </div>

    <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            <th className="p-4 border-b border-slate-300 bg-slate-50">
              <p className="block text-sm font-normal leading-none text-slate-500">
                Invoice Number
              </p>
            </th>
            <th className="p-4 border-b border-slate-300 bg-slate-50">
              <p className="block text-sm font-normal leading-none text-slate-500">
                Customer
              </p>
            </th>
            <th className="p-4 border-b border-slate-300 bg-slate-50">
              <p className="block text-sm font-normal leading-none text-slate-500">
                Amount
              </p>
            </th>
            <th className="p-4 border-b border-slate-300 bg-slate-50">
              <p className="block text-sm font-normal leading-none text-slate-500">
                Issued
              </p>
            </th>
            <th className="p-4 border-b border-slate-300 bg-slate-50">
              <p className="block text-sm font-normal leading-none text-slate-500">
                Due Date
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-slate-50">
            <td className="p-4 border-b border-slate-200 py-5">
              <p className="block font-semibold text-sm text-slate-800">INV-1001</p>
            </td>
            <td className="p-4 border-b border-slate-200 py-5">
              <p className="text-sm text-slate-500">John Doe</p>
            </td>
            <td className="p-4 border-b border-slate-200 py-5">
              <p className="text-sm text-slate-500">$1,200.00</p>
            </td>
            <td className="p-4 border-b border-slate-200 py-5">
              <p className="text-sm text-slate-500">2024-08-01</p>
            </td>
            <td className="p-4 border-b border-slate-200 py-5">
              <p className="text-sm text-slate-500">2024-08-15</p>
            </td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4 border-b border-slate-200 py-5">
              <p className="block font-semibold text-sm text-slate-800">INV-1002</p>
            </td>
            <td className="p-4 border-b border-slate-200 py-5">
              <p className="text-sm text-slate-500">Jane Smith</p>
            </td>
            <td className="p-4 border-b border-slate-200 py-5">
              <p className="text-sm text-slate-500">$850.00</p>
            </td>
            <td className="p-4 border-b border-slate-200 py-5">
              <p className="text-sm text-slate-500">2024-08-05</p>
            </td>
            <td className="p-4 border-b border-slate-200 py-5">
              <p className="text-sm text-slate-500">2024-08-20</p>
            </td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4 border-b border-slate-200 py-5">
              <p className="block font-semibold text-sm text-slate-800">INV-1003</p>
            </td>
            <td className="p-4 border-b border-slate-200 py-5">
              <p className="text-sm text-slate-500">Acme Corp</p>
            </td>
            <td className="p-4 border-b border-slate-200 py-5">
              <p className="text-sm text-slate-500">$2,500.00</p>
            </td>
            <td className="p-4 border-b border-slate-200 py-5">
              <p className="text-sm text-slate-500">2024-08-07</p>
            </td>
            <td className="p-4 border-b border-slate-200 py-5">
              <p className="text-sm text-slate-500">2024-08-21</p>
            </td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4 py-5">
              <p className="block font-semibold text-sm text-slate-800">INV-1004</p>
            </td>
            <td className="p-4 py-5">
              <p className="text-sm text-slate-500">Global Inc</p>
            </td>
            <td className="p-4 py-5">
              <p className="text-sm text-slate-500">$4,750.00</p>
            </td>
            <td className="p-4 py-5">
              <p className="text-sm text-slate-500">2024-08-10</p>
            </td>
            <td className="p-4 py-5">
              <p className="text-sm text-slate-500">2024-08-25</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
  );
}
