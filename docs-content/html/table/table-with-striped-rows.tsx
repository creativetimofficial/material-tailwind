export function TableWithStripedRows() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-scroll rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <p className="block font-sans text-sm font-normal leading-none text-blue-gray-900 antialiased opacity-70">
                Name
              </p>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <p className="block font-sans text-sm font-normal leading-none text-blue-gray-900 antialiased opacity-70">
                Job
              </p>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <p className="block font-sans text-sm font-normal leading-none text-blue-gray-900 antialiased opacity-70">
                Employed
              </p>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <p className="block font-sans text-sm font-normal leading-none text-blue-gray-900 antialiased opacity-70"></p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-blue-gray-50/50">
            <td className="p-4">
              <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                John Michael
              </p>
            </td>
            <td className="p-4">
              <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                Manager
              </p>
            </td>
            <td className="p-4">
              <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                23/04/18
              </p>
            </td>
            <td className="p-4">
              <a
                href="#"
                className="block font-sans text-sm font-medium leading-normal text-blue-gray-900 antialiased"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="even:bg-blue-gray-50/50">
            <td className="p-4">
              <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                Alexa Liras
              </p>
            </td>
            <td className="p-4">
              <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                Developer
              </p>
            </td>
            <td className="p-4">
              <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                23/04/18
              </p>
            </td>
            <td className="p-4">
              <a
                href="#"
                className="block font-sans text-sm font-medium leading-normal text-blue-gray-900 antialiased"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="even:bg-blue-gray-50/50">
            <td className="p-4">
              <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                Laurent Perrier
              </p>
            </td>
            <td className="p-4">
              <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                Executive
              </p>
            </td>
            <td className="p-4">
              <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                19/09/17
              </p>
            </td>
            <td className="p-4">
              <a
                href="#"
                className="block font-sans text-sm font-medium leading-normal text-blue-gray-900 antialiased"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="even:bg-blue-gray-50/50">
            <td className="p-4">
              <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                Michael Levi
              </p>
            </td>
            <td className="p-4">
              <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                Developer
              </p>
            </td>
            <td className="p-4">
              <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                24/12/08
              </p>
            </td>
            <td className="p-4">
              <a
                href="#"
                className="block font-sans text-sm font-medium leading-normal text-blue-gray-900 antialiased"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="even:bg-blue-gray-50/50">
            <td className="p-4">
              <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                Richard Gran
              </p>
            </td>
            <td className="p-4">
              <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                Manager
              </p>
            </td>
            <td className="p-4">
              <p className="block font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased">
                04/10/21
              </p>
            </td>
            <td className="p-4">
              <a
                href="#"
                className="block font-sans text-sm font-medium leading-normal text-blue-gray-900 antialiased"
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
