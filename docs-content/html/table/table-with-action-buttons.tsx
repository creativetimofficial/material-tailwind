export function TableWithActionButtons() {
  return (
  <>
  <div className="w-full flex justify-between items-center mb-3 mt-1 pl-3">
    <div>
        <h3 className="text-lg font-bold text-slate-800">Manage your Invoice</h3>
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-8 h-8 text-slate-600">
                  <path strokeLinecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
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
          <th className="p-4 border-b border-slate-300 bg-slate-50">
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-slate-50 border-b border-slate-200">
          <td className="p-4 py-5">
            <p className="block font-semibold text-sm text-slate-800">INV-1001</p>
          </td>
          <td className="p-4 py-5">
            <p className="block text-sm text-slate-800">John Doe</p>
          </td>
          <td className="p-4 py-5">
            <p className="block text-sm text-slate-800">$1,200.00</p>
          </td>
          <td className="p-4 py-5">
            <p className="block text-sm text-slate-800">2024-08-01</p>
          </td>
          <td className="p-4 py-5">
            <p className="block text-sm text-slate-800">2024-08-15</p>
          </td>
          <td className="p-4 py-5">
              <div className="block text-center">
                  <button className="text-slate-600 hover:text-slate-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                          <path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087ZM12 10.5a.75.75 0 0 1 .75.75v4.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72v-4.94a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                      </svg>
                  </button>
                  <button className="text-slate-600 hover:text-slate-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
                          <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
                      </svg>
                  </button>
              </div>
          </td>
        </tr>
        <tr className="hover:bg-slate-50 border-b border-slate-200">
          <td className="p-4 py-5">
            <p className="block font-semibold text-sm text-slate-800">INV-1002</p>
          </td>
          <td className="p-4 py-5">
            <p className="block text-sm text-slate-800">Jane Smith</p>
          </td>
          <td className="p-4 py-5">
            <p className="block text-sm text-slate-800">$850.00</p>
          </td>
          <td className="p-4 py-5">
            <p className="block text-sm text-slate-800">2024-08-05</p>
          </td>
          <td className="p-4 py-5">
            <p className="block text-sm text-slate-800">2024-08-20</p>
          </td>
          <td className="p-4 py-5">
              <div className="block text-center">
                  <button className="text-slate-600 hover:text-slate-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                          <path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087ZM12 10.5a.75.75 0 0 1 .75.75v4.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72v-4.94a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                      </svg>
                  </button>
                  <button className="text-slate-600 hover:text-slate-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
                          <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
                      </svg>
                  </button>
              </div>
          </td>
        </tr>
        <tr className="hover:bg-slate-50 border-b border-slate-200">
          <td className="p-4 py-5">
            <p className="block font-semibold text-sm text-slate-800">INV-1003</p>
          </td>
          <td className="p-4 py-5">
            <p className="block text-sm text-slate-800">Acme Corp</p>
          </td>
          <td className="p-4 py-5">
            <p className="block text-sm text-slate-800">$2,500.00</p>
          </td>
          <td className="p-4 py-5">
            <p className="block text-sm text-slate-800">2024-08-07</p>
          </td>
          <td className="p-4 py-5">
            <p className="block text-sm text-slate-800">2024-08-21</p>
          </td>
          <td className="p-4 py-5">
              <div className="block text-center">
                  <button className="text-slate-600 hover:text-slate-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                          <path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087ZM12 10.5a.75.75 0 0 1 .75.75v4.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72v-4.94a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                      </svg>
                  </button>
                  <button className="text-slate-600 hover:text-slate-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
                          <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
                      </svg>
                  </button>
              </div>
          </td>
        </tr>
        <tr className="hover:bg-slate-50">
          <td className="p-4 py-5">
            <p className="block font-semibold text-sm text-slate-800">INV-1004</p>
          </td>
          <td className="p-4 py-5">
            <p className="block text-sm text-slate-800">Global Inc</p>
          </td>
          <td className="p-4 py-5">
            <p className="block text-sm text-slate-800">$4,750.00</p>
          </td>
          <td className="p-4 py-5">
            <p className="block text-sm text-slate-800">2024-08-10</p>
          </td>
          <td className="p-4 py-5">
            <p className="block text-sm text-slate-800">2024-08-25</p>
          </td>
          <td className="p-4 py-5">
              <div className="block text-center">
                  <button className="text-slate-600 hover:text-slate-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                          <path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087ZM12 10.5a.75.75 0 0 1 .75.75v4.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72v-4.94a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                      </svg>
                  </button>
                  <button className="text-slate-600 hover:text-slate-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
                          <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
                      </svg>
                  </button>
              </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </>
  );
}
