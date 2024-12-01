export function CardWithFooter() {
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">      
      <div className="p-4">
        <h5 className="mb-2 text-slate-800 text-xl font-semibold">
          Website Review Check Update from Our Team in San Francisco
        </h5>
        <p className="text-slate-600 leading-normal font-light">
          The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.
        </p>
      </div>
      <div className="mx-3 border-t border-slate-200 pb-3 pt-2 px-1">
        <span className="text-sm text-slate-600 font-medium">
          Last updated: 4 hours ago
        </span>
      </div>
    </div>
  );
}
