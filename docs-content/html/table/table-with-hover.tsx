export function TableWithHover() {
  return (
    <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            <th className="p-4 border-b border-slate-300 bg-slate-50">
              <p className="block text-sm font-normal leading-none text-slate-500">
                Name
              </p>
            </th>
            <th className="p-4 border-b border-slate-300 bg-slate-50">
              <p className="block text-sm font-normal leading-none text-slate-500">
                Job
              </p>
            </th>
            <th className="p-4 border-b border-slate-300 bg-slate-50">
              <p className="block text-sm font-normal leading-none text-slate-500">
                Employed
              </p>
            </th>
            <th className="p-4 border-b border-slate-300 bg-slate-50">
              <p className="block text-sm font-normal leading-none text-slate-500"></p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-slate-50">
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm text-slate-800">
                John Michael
              </p>
            </td>
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm text-slate-800">
                Manager
              </p>
            </td>
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm text-slate-800">
                23/04/18
              </p>
            </td>
            <td className="p-4 border-b border-slate-200">
              <a href="#" className="block text-sm font-semibold text-slate-800">
                Edit
              </a>
            </td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm text-slate-800">
                Alexa Liras
              </p>
            </td>
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm text-slate-800">
                Developer
              </p>
            </td>
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm text-slate-800">
                23/04/18
              </p>
            </td>
            <td className="p-4 border-b border-slate-200">
              <a href="#" className="block text-sm font-semibold text-slate-800">
                Edit
              </a>
            </td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm text-slate-800">
                Laurent Perrier
              </p>
            </td>
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm text-slate-800">
                Executive
              </p>
            </td>
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm text-slate-800">
                19/09/17
              </p>
            </td>
            <td className="p-4 border-b border-slate-200">
              <a href="#" className="block text-sm font-semibold text-slate-800">
                Edit
              </a>
            </td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm text-slate-800">
                Michael Levi
              </p>
            </td>
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm text-slate-800">
                Developer
              </p>
            </td>
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm text-slate-800">
                24/12/08
              </p>
            </td>
            <td className="p-4 border-b border-slate-200">
              <a href="#" className="block text-sm font-semibold text-slate-800">
                Edit
              </a>
            </td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4">
              <p className="block text-sm text-slate-800">
                Richard Gran
              </p>
            </td>
            <td className="p-4">
              <p className="block text-sm text-slate-800">
                Manager
              </p>
            </td>
            <td className="p-4">
              <p className="block text-sm text-slate-800">
                04/10/21
              </p>
            </td>
            <td className="p-4">
              <a href="#" className="block text-sm font-semibold text-slate-800">
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
