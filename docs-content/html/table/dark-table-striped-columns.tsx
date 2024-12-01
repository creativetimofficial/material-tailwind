export function DarkTableStripedColumns() {
  return (
    <div className="relative flex flex-col w-full h-full overflow-scroll text-slate-300 bg-slate-800 shadow-md rounded-lg bg-clip-border">
        <table className="w-full text-left table-auto min-w-max">
            <thead>
                <tr>
                    <th className="p-4 border-b border-slate-600 bg-slate-700">
                        <p className="text-sm font-normal leading-none text-slate-300">
                            Book Title
                        </p>
                    </th>
                    <th className="p-4 border-b border-slate-600 bg-slate-700">
                        <p className="text-sm font-normal leading-none text-slate-300">
                            Author
                        </p>
                    </th>
                    <th className="p-4 border-b border-slate-600 bg-slate-700">
                        <p className="text-sm font-normal leading-none text-slate-300">
                            Year of Publication
                        </p>
                    </th>
                    <th className="p-4 border-b border-slate-600 bg-slate-700">
                        <p className="text-sm font-normal leading-none text-slate-300">
                            Genre
                        </p>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="hover:bg-slate-700">
                    <td className="p-4 border-b border-slate-700 bg-slate-900">
                        <p className="text-sm text-slate-100 font-semibold">
                            To Kill a Mockingbird
                        </p>
                    </td>
                    <td className="p-4 border-b border-slate-700 bg-slate-800">
                        <p className="text-sm text-slate-300">
                            Harper Lee
                        </p>
                    </td>
                    <td className="p-4 border-b border-slate-700 bg-slate-900">
                        <p className="text-sm text-slate-300">
                            1960
                        </p>
                    </td>
                    <td className="p-4 border-b border-slate-700 bg-slate-800">
                        <p className="text-sm text-slate-300">
                            Fiction
                        </p>
                    </td>
                </tr>
                <tr className="hover:bg-slate-700">
                    <td className="p-4 border-b border-slate-700 bg-slate-900">
                        <p className="text-sm text-slate-100 font-semibold">
                            1984
                        </p>
                    </td>
                    <td className="p-4 border-b border-slate-700 bg-slate-800">
                        <p className="text-sm text-slate-300">
                            George Orwell
                        </p>
                    </td>
                    <td className="p-4 border-b border-slate-700 bg-slate-900">
                        <p className="text-sm text-slate-300">
                            1949
                        </p>
                    </td>
                    <td className="p-4 border-b border-slate-700 bg-slate-800">
                        <p className="text-sm text-slate-300">
                            Dystopian
                        </p>
                    </td>
                </tr>
                <tr className="hover:bg-slate-700">
                    <td className="p-4 border-b border-slate-700 bg-slate-900">
                        <p className="text-sm text-slate-100 font-semibold">
                            The Great Gatsby
                        </p>
                    </td>
                    <td className="p-4 border-b border-slate-700 bg-slate-800">
                        <p className="text-sm text-slate-300">
                            F. Scott Fitzgerald
                        </p>
                    </td>
                    <td className="p-4 border-b border-slate-700 bg-slate-900">
                        <p className="text-sm text-slate-300">
                            1925
                        </p>
                    </td>
                    <td className="p-4 border-b border-slate-700 bg-slate-800">
                        <p className="text-sm text-slate-300">
                            Classic
                        </p>
                    </td>
                </tr>
                <tr className="hover:bg-slate-700">
                    <td className="p-4 bg-slate-900">
                        <p className="text-sm text-slate-100 font-semibold">
                            The Catcher in the Rye
                        </p>
                    </td>
                    <td className="p-4 bg-slate-800">
                        <p className="text-sm text-slate-300">
                            J.D. Salinger
                        </p>
                    </td>
                    <td className="p-4 bg-slate-900">
                        <p className="text-sm text-slate-300">
                            1951
                        </p>
                    </td>
                    <td className="p-4 bg-slate-800">
                        <p className="text-sm text-slate-300">
                            Fiction
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>

  );
}
