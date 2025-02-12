interface TsPropsTableProps {
  data: {
    interface: string;
    property: string;
    type: string;
    description: string;
  }[];
}

const TsPropsTable = ({ data }: TsPropsTableProps) => {
  return (
    <div className="overflow-x-auto border border-slate-200 dark:border-slate-600 rounded-lg  overflow-hidden dark:bg-slate-800">
      <table className="min-w-full">
        <thead className="bg-slate-100 dark:bg-slate-700">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-200">Interface</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-200">Property/Method</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-200">Type</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-200">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
              <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-200">{item.interface}</td>
              <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-200">{item.property}</td>
              <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-200">{item.type}</td>
              <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-200">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TsPropsTable;
