export function DarkTableStripedRows() {
  return (
    <div className="relative flex flex-col w-full h-full overflow-scroll text-slate-300 bg-slate-800 shadow-md rounded-lg bg-clip-border">
        <table className="w-full text-left table-auto min-w-max">
            <thead>
                <tr>
                    <th className="p-4 border-b border-slate-600 bg-slate-700">
                        <p className="text-sm font-normal leading-none text-slate-300">
                            Car Name
                        </p>
                    </th>
                    <th className="p-4 border-b border-slate-600 bg-slate-700">
                        <p className="text-sm font-normal leading-none text-slate-300">
                            Year of Production
                        </p>
                    </th>
                    <th className="p-4 border-b border-slate-600 bg-slate-700">
                        <p className="text-sm font-normal leading-none text-slate-300">
                            Price
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
                <tr className="even:bg-slate-900 hover:bg-slate-700">
                    <td className="p-4 border-b border-slate-700">
                        <p className="text-sm text-slate-100 font-semibold">
                            Ford Mustang
                        </p>
                    </td>
                    <td className="p-4 border-b border-slate-700">
                        <p className="text-sm text-slate-300">
                            2020
                        </p>
                    </td>
                    <td className="p-4 border-b border-slate-700">
                        <p className="text-sm text-slate-300">
                            $35,000
                        </p>
                    </td>
                    <td className="p-4 border-b border-slate-700">
                        <p className="text-sm text-slate-300">
                            New York, USA
                        </p>
                    </td>
                </tr>
                <tr className="even:bg-slate-900 hover:bg-slate-700">
                    <td className="p-4 border-b border-slate-700">
                        <p className="text-sm text-slate-100 font-semibold">
                            Tesla Model S
                        </p>
                    </td>
                    <td className="p-4 border-b border-slate-700">
                        <p className="text-sm text-slate-300">
                            2022
                        </p>
                    </td>
                    <td className="p-4 border-b border-slate-700">
                        <p className="text-sm text-slate-300">
                            $80,000
                        </p>
                    </td>
                    <td className="p-4 border-b border-slate-700">
                        <p className="text-sm text-slate-300">
                            San Francisco, USA
                        </p>
                    </td>
                </tr>
                <tr className="even:bg-slate-900 hover:bg-slate-700">
                    <td className="p-4 border-b border-slate-700">
                        <p className="text-sm text-slate-100 font-semibold">
                            BMW 3 Series
                        </p>
                    </td>
                    <td className="p-4 border-b border-slate-700">
                        <p className="text-sm text-slate-300">
                            2019
                        </p>
                    </td>
                    <td className="p-4 border-b border-slate-700">
                        <p className="text-sm text-slate-300">
                            $25,000
                        </p>
                    </td>
                    <td className="p-4 border-b border-slate-700">
                        <p className="text-sm text-slate-300">
                            Paris, France
                        </p>
                    </td>
                </tr>
                <tr className="even:bg-slate-900 hover:bg-slate-700">
                    <td className="p-4">
                        <p className="text-sm text-slate-100 font-semibold">
                            Audi A4
                        </p>
                    </td>
                    <td className="p-4">
                        <p className="text-sm text-slate-300">
                            2021
                        </p>
                    </td>
                    <td className="p-4">
                        <p className="text-sm text-slate-300">
                            $40,000
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
