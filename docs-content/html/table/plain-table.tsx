export function PlainTable() {
  return (
    <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
      <table className="w-full text-left table-auto min-w-max text-slate-800">
        <thead>
          <tr className="text-slate-500 border-b border-slate-300 bg-slate-50">
            <th className="p-4">
              <p className="text-sm leading-none font-normal">
                Project Name
              </p>
            </th>
            <th className="p-4">
              <p className="text-sm leading-none font-normal">
                Start Date
              </p>
            </th>
            <th className="p-4">
              <p className="text-sm leading-none font-normal">
                End Date
              </p>
            </th>
            <th className="p-4">
              <p className="text-sm leading-none font-normal">
                Owner
              </p>
            </th>
            <th className="p-4">
              <p className="text-sm leading-none font-normal">
                Budget
              </p>
            </th>
            <th className="p-4">
              <p></p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-slate-50">
            <td className="p-4">
              <p className="text-sm font-bold">
                Project Alpha
              </p>
            </td>
            <td className="p-4">
              <p className="text-sm">
                01/01/2024
              </p>
            </td>
            <td className="p-4">
              <p className="text-sm">
                30/06/2024
              </p>
            </td>
            <td className="p-4">
              <p className="text-sm">
                John Michael
              </p>
            </td>
            <td className="p-4">
              <p className="text-sm">
                $50,000
              </p>
            </td>
            <td className="p-4">
              <a href="#" className="text-sm font-semibold ">
                Edit
              </a>
            </td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4">
              <p className="text-sm font-bold">
                Beta Campaign
              </p>
            </td>
            <td className="p-4">
              <p className="text-sm">
                15/02/2024
              </p>
            </td>
            <td className="p-4">
              <p className="text-sm">
                15/08/2024
              </p>
            </td>
            <td className="p-4">
              <p className="text-sm">
                Alexa Liras
              </p>
            </td>
            <td className="p-4">
              <p className="text-sm">
                $75,000
              </p>
            </td>
            <td className="p-4">
              <a href="#" className="text-sm font-semibold ">
                Edit
              </a>
            </td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4">
              <p className="text-sm font-bold">
                Campaign Delta
              </p>
            </td>
            <td className="p-4">
              <p className="text-sm">
                01/03/2024
              </p>
            </td>
            <td className="p-4">
              <p className="text-sm">
                01/09/2024
              </p>
            </td>
            <td className="p-4">
              <p className="text-sm">
                Laurent Perrier
              </p>
            </td>
            <td className="p-4">
              <p className="text-sm">
                $60,000
              </p>
            </td>
            <td className="p-4">
              <a href="#" className="text-sm font-semibold ">
                Edit
              </a>
            </td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4">
              <p className="text-sm font-bold">
                Gamma Outreach
              </p>
            </td>
            <td className="p-4">
              <p className="text-sm">
                10/04/2024
              </p>
            </td>
            <td className="p-4">
              <p className="text-sm">
                10/10/2024
              </p>
            </td>
            <td className="p-4">
              <p className="text-sm">
                Michael Levi
              </p>
            </td>
            <td className="p-4">
              <p className="text-sm">
                $80,000
              </p>
            </td>
            <td className="p-4">
              <a href="#" className="text-sm font-semibold ">
                Edit
              </a>
            </td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4">
              <p className="text-sm font-bold">
                Omega Strategy
              </p>
            </td>
            <td className="p-4">
              <p className="text-sm">
                01/05/2024
              </p>
            </td>
            <td className="p-4">
              <p className="text-sm">
                01/11/2024
              </p>
            </td>
            <td className="p-4">
              <p className="text-sm">
                Richard Gran
              </p>
            </td>
            <td className="p-4">
              <p className="text-sm">
                $100,000
              </p>
            </td>
            <td className="p-4">
              <a href="#" className="text-sm font-semibold ">
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
