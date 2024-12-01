export function ListWithLink() {
  return (
    <div className="relative flex flex-col rounded-lg bg-white shadow-sm border border-slate-200">
      <nav className="flex min-w-[240px] flex-col gap-1 p-1.5">
        <a href="#" className="text-initial">
          <div
            role="button"
            className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
          >
            Inbox
          </div>
        </a>

        <a href="#" className="text-initial">
          <div
            role="button"
            className="text-slate-800  flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
          >
            Trash
          </div>
        </a>
      
        <a href="#" className="text-initial">
          <div
            role="button"
            className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
          >
            Settings
          </div>
        </a>   
      </nav>
    </div>
  );
}
