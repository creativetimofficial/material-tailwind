export function CardWithBottomImage() {
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div className="p-4">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
          Special News Article
        </h6>
        <p className="text-slate-600 leading-normal font-light">
          The place is close to Barceloneta Beach and bus stop just 2 min by walk
          and near to &quot;Naviglio&quot; where you can enjoy the main night life in
          Barcelona.
        </p>
      </div>
      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <img src="https://images.unsplash.com/photo-1725610588086-b9e38da987f7?q=80&w=1200" alt="card-image" />
      </div>
    </div>  
  );
}
