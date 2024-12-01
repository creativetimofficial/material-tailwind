export function TableWithTitleDescription() {
  return (
    <>
    <div className="w-full">
      <h3 className="text-lg font-semibold ml-3 text-slate-800">Team Members and Roles</h3>
      <p className="text-slate-500 mb-5 ml-3">Overview of the key persons involved in the next project and their geographical distribution.</p>
    </div>
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
                        Role
                    </p>
                </th>
                <th className="p-4 border-b border-slate-300 bg-slate-50">
                    <p className="block text-sm font-normal leading-none text-slate-500">
                        Email
                    </p>
                </th>
                <th className="p-4 border-b border-slate-300 bg-slate-50">
                    <p className="block text-sm font-normal leading-none text-slate-500">
                        Location
                    </p>
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
                        john.michael@example.com
                    </p>
                </td>
                <td className="p-4 border-b border-slate-200">
                    <p className="block text-sm text-slate-800">
                        New York, USA
                    </p>
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
                        alexa.liras@example.com
                    </p>
                </td>
                <td className="p-4 border-b border-slate-200">
                    <p className="block text-sm text-slate-800">
                        San Francisco, USA
                    </p>
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
                        laurent.perrier@example.com
                    </p>
                </td>
                <td className="p-4 border-b border-slate-200">
                    <p className="block text-sm text-slate-800">
                        Paris, France
                    </p>
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
                        michael.levi@example.com
                    </p>
                </td>
                <td className="p-4 border-b border-slate-200">
                    <p className="block text-sm text-slate-800">
                        London, UK
                    </p>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}
