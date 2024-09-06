export function CardWithHover() {
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-md rounded-lg transition-all cursor-pointer w-96">
      <div className="p-4">
        <h5 className="mb-2 text-slate-800 text-xl font-semibold">
          Website Review Check Text
        </h5>
        <p className="text-slate-600 leading-normal font-light">
          The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.
        </p>
      </div>
    </div>
  );
}
