export function DarkTable() {
  return (
    <div className="relative flex flex-col w-full h-full overflow-scroll text-slate-300 bg-slate-800 shadow-md rounded-lg bg-clip-border">
      <table className="w-full text-left table-auto min-w-max">
        <thead>
            <tr>
                <th className="p-4 border-b border-slate-600 bg-slate-700">
                    <p className="text-sm font-normal leading-none text-slate-300">
                        Name
                    </p>
                </th>
                <th className="p-4 border-b border-slate-600 bg-slate-700">
                    <p className="text-sm font-normal leading-none text-slate-300">
                        Role
                    </p>
                </th>
                <th className="p-4 border-b border-slate-600 bg-slate-700">
                    <p className="text-sm font-normal leading-none text-slate-300">
                        Email
                    </p>
                </th>
                <th className="p-4 border-b border-slate-600 bg-slate-700">
                    <p className="text-sm font-normal leading-none text-slate-300">
                        Location
                    </p>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="hover:bg-slate-700">
                <td className="p-4 border-b border-slate-700">
                    <p className="text-sm text-slate-100 font-semibold">
                        John Michael
                    </p>
                </td>
                <td className="p-4 border-b border-slate-700">
                    <p className="text-sm text-slate-300">
                        Manager
                    </p>
                </td>
                <td className="p-4 border-b border-slate-700">
                    <p className="text-sm text-slate-300">
                        john.michael@example.com
                    </p>
                </td>
                <td className="p-4 border-b border-slate-700">
                    <p className="text-sm text-slate-300">
                        New York, USA
                    </p>
                </td>
            </tr>
            <tr className="hover:bg-slate-700">
                <td className="p-4 border-b border-slate-700">
                    <p className="text-sm text-slate-100 font-semibold">
                        Alexa Liras
                    </p>
                </td>
                <td className="p-4 border-b border-slate-700">
                    <p className="text-sm text-slate-300">
                        Developer
                    </p>
                </td>
                <td className="p-4 border-b border-slate-700">
                    <p className="text-sm text-slate-300">
                        alexa.liras@example.com
                    </p>
                </td>
                <td className="p-4 border-b border-slate-700">
                    <p className="text-sm text-slate-300">
                        San Francisco, USA
                    </p>
                </td>
            </tr>
            <tr className="hover:bg-slate-700">
                <td className="p-4 border-b border-slate-700">
                    <p className="text-sm text-slate-100 font-semibold">
                        Laurent Perrier
                    </p>
                </td>
                <td className="p-4 border-b border-slate-700">
                    <p className="text-sm text-slate-300">
                        Executive
                    </p>
                </td>
                <td className="p-4 border-b border-slate-700">
                    <p className="text-sm text-slate-300">
                        laurent.perrier@example.com
                    </p>
                </td>
                <td className="p-4 border-b border-slate-700">
                    <p className="text-sm text-slate-300">
                        Paris, France
                    </p>
                </td>
            </tr>
            <tr className="hover:bg-slate-700">
                <td className="p-4">
                    <p className="text-sm text-slate-100 font-semibold">
                        Michael Levi
                    </p>
                </td>
                <td className="p-4">
                    <p className="text-sm text-slate-300">
                        Developer
                    </p>
                </td>
                <td className="p-4">
                    <p className="text-sm text-slate-300">
                        michael.levi@example.com
                    </p>
                </td>
                <td className="p-4">
                    <p className="text-sm text-slate-300">
                        London, UK
                    </p>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}
