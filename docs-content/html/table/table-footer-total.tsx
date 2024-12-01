export function TableFooterTotal() {
  return (
    <>
    <div className="text-left w-full">
        <h3 className="text-lg font-semibold ml-3 text-slate-800">Home and Deco List</h3>
        <p className="text-slate-500 mb-5 ml-3">Example of product list and total calculation for Home & Deco items.</p>
    </div>
    <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
        <table id="productTable" className="w-full text-left table-auto min-w-max">
            <thead>
            <tr>
                <th className="p-4 border-b border-slate-300 bg-slate-50">
                <p className="block text-sm font-normal leading-none text-slate-500">
                    Product Name
                </p>
                </th>
                <th className="p-4 border-b border-slate-300 bg-slate-50">
                <p className="block text-sm font-normal leading-none text-slate-500">
                    Category
                </p>
                </th>
                <th className="p-4 border-b border-slate-300 bg-slate-50">
                <p className="block text-sm font-normal leading-none text-slate-500">
                    Qty
                </p>
                </th>
                <th className="p-4 border-b border-slate-300 bg-slate-50">
                <p className="block text-sm font-normal leading-none text-slate-500">
                    Price
                </p>
                </th>
                <th className="p-4 border-b border-slate-300 bg-slate-50">
                <p className="block text-sm font-normal leading-none text-slate-500">
                    Total
                </p>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr className="hover:bg-slate-50">
                <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                    Wooden Chair
                </p>
                </td>
                <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                    Furniture
                </p>
                </td>
                <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                    2
                </p>
                </td>
                <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                    $85.00
                </p>
                </td>
                <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                    $170.00
                </p>
                </td>
            </tr>
            <tr className="hover:bg-slate-50">
                <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                    Table Lamp
                </p>
                </td>
                <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                    Lighting
                </p>
                </td>
                <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                    1
                </p>
                </td>
                <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                    $45.00
                </p>
                </td>
                <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                    $45.00
                </p>
                </td>
            </tr>
            <tr className="hover:bg-slate-50">
                <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                    Wall Art
                </p>
                </td>
                <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                    Decor
                </p>
                </td>
                <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                    3
                </p>
                </td>
                <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                    $30.00
                </p>
                </td>
                <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                    $90.00
                </p>
                </td>
            </tr>
            <tr className="hover:bg-slate-50">
                <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                    Sofa
                </p>
                </td>
                <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                    Furniture
                </p>
                </td>
                <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                    1
                </p>
                </td>
                <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                    $300.00
                </p>
                </td>
                <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                    $300.00
                </p>
                </td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
                <td colSpan={2} className="p-4 text-left font-bold text-slate-800 border-t border-slate-300">
                Total:
                </td>
                <td colSpan={2} className="p-4 font-bold text-slate-800 border-t border-slate-300">
                7
                </td>
                <td colSpan={2} className="p-4 font-semibold text-slate-800 border-t border-slate-300">
                $605.00
                </td>
            </tr>
            </tfoot>
        </table>
    </div>
    </>
  );
}
