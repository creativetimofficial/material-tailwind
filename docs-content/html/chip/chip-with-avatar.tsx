export function ChipWithAvatar() {
  return (
    <div className="rounded-full flex items-center bg-slate-800 py-0.5 pr-2.5 pl-1.5 border border-transparent text-sm text-white transition-all shadow-sm">
      <div className="h-5 w-5 mr-2">
        <img
          alt="Tania Andrew"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
          className="h-full w-full rounded-full object-cover object-center"
        />
      </div>
      
      Tania Andrew 
    </div>
  );
}
