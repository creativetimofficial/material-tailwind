export function SimpleSortableTable() {
  return (
    <div className="relative flex flex-col w-full h-full overflow-scroll bg-white shadow-md rounded-lg bg-clip-border">
        <table className="w-full text-left table-auto min-w-max">
            <thead>
                <tr>
                    <th
                    className="p-4 transition-colors cursor-pointer border-b border-slate-300 bg-slate-50 hover:bg-slate-100">
                        <p
                        className="flex items-center justify-between gap-2 text-sm font-normal leading-none text-slate-800">
                        Name
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                        </svg>
                        </p>
                    </th>
                    
                    <th
                    className="p-4 transition-colors cursor-pointer border-b border-slate-300 bg-slate-50 hover:bg-slate-100">
                        <p
                        className="flex items-center justify-between gap-2 text-sm font-normal leading-none text-slate-800">
                        Role
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                        </svg>
                        </p>
                    </th>
                    <th
                    className="p-4 transition-colors cursor-pointer border-b border-slate-300 bg-slate-50 hover:bg-slate-100">
                        <p
                        className="flex items-center justify-between gap-2 text-sm font-normal leading-none text-slate-800">
                        Email
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                        </svg>
                        </p>
                    </th>
                    <th
                    className="p-4 transition-colors cursor-pointer border-b border-slate-300 bg-slate-50 hover:bg-slate-100">
                        <p
                        className="flex items-center justify-between gap-2 text-sm font-normal leading-none text-slate-800">
                        Location
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                        </svg>
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
  );
}
