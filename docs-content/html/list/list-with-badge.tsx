export function ListWithBadge() {
  return (
    <div className="relative flex flex-col rounded-lg bg-white shadow-sm border border-slate-200">
      <nav className="flex min-w-[240px] flex-col gap-1 p-1.5">
        <div
          role="button"
          className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          Inbox
          <div className="ml-auto grid place-items-center justify-self-end">
            <div className="relative grid select-none items-center whitespace-nowrap rounded-full bg-slate-200 px-2 py-1 text-xs font-bold uppercase text-slate-800">
               <span className="">14</span>
             </div>
          </div>
        </div>
        <div
          role="button"
          className="text-slate-800  flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          Trash
          <div className="ml-auto grid place-items-center justify-self-end">
            <div className="relative grid select-none items-center whitespace-nowrap rounded-full bg-slate-200 px-2 py-1 text-xs font-bold uppercase text-slate-800">
               <span className="">2</span>
             </div>
          </div>
        </div>
        <div
          role="button"
          className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          Settings
          <div className="ml-auto grid place-items-center justify-self-end">
            <div className="relative grid select-none items-center whitespace-nowrap rounded-full bg-slate-200 px-2 py-1 text-xs font-bold uppercase text-slate-800">
               <span className="">4</span>
             </div>
          </div>
        </div>
      </nav>
    </div>


    // <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    //   <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
    //     <div
    //       role="button"
    //       className="flex w-full items-center rounded-lg p-3 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
    //     >
    //       Inbox
    //       <div className="ml-auto grid place-items-center justify-self-end">
    //         <div className="relative grid select-none items-center whitespace-nowrap rounded-full bg-gray-900/10 px-2 py-1 font-sans text-xs font-bold uppercase text-gray-900">
    //           <span className="">14</span>
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       role="button"
    //       className="flex w-full items-center rounded-lg p-3 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
    //     >
    //       Spam
    //       <div className="ml-auto grid place-items-center justify-self-end">
    //         <div className="relative grid select-none items-center whitespace-nowrap rounded-full bg-gray-900/10 px-2 py-1 font-sans text-xs font-bold uppercase text-gray-900">
    //           <span className="">2</span>
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       role="button"
    //       className="flex w-full items-center rounded-lg p-3 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
    //     >
    //       Trash
    //       <div className="ml-auto grid place-items-center justify-self-end">
    //         <div className="relative grid select-none items-center whitespace-nowrap rounded-full bg-gray-900/10 px-2 py-1 font-sans text-xs font-bold uppercase text-gray-900">
    //           <span className="">40</span>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
}
