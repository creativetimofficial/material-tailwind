export function CardWithTabs() {
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 p-2">
    <div className="w-full">
        <ul className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100" data-tabs="tabs" role="list">
            <li className="z-30 flex-auto text-center">
                <a className="flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer text-slate-600 bg-inherit"
                data-tab-target="" role="tab" aria-selected="true" aria-controls="dashboard">
                Dashboard
                </a>
            </li>
            <li className="z-30 flex-auto text-center">
                <a className="flex items-center justify-center w-full px-0 py-2 mb-0 text-sm transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-600 bg-inherit"
                data-tab-target="" role="tab" aria-selected="false"  aria-controls="profile">
                Profile
                </a>
            </li>
            <li className="z-30 flex-auto text-center">
                <a className="flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
                data-tab-target="" role="tab" aria-selected="false" aria-controls="settings">
                Settings
                </a>
            </li>
        </ul>
        
        <div data-tab-content="" className="p-3">
            <div id="dashboard" role="tabpanel">
                <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                Website Review Check Text
                </h5>
                <p className="text-slate-600 leading-normal font-light">
                Because it&apos;s about motivating the doers. Because I&apos;m
                here to follow my dreams and inspire other people to follow their
                dreams, too.
                </p>
            </div>
            <div className="hidden opacity-0" id="profile" role="tabpanel">
                 <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                    The place is close to Barceloneta
                </h5>
                <p className="text-slate-600 leading-normal font-light">
                The reading of all good books is like a conversation with the
                finest minds of past centuries. Follow my dreams and inspire other people.
                </p>
            </div>
            <div className="hidden opacity-0" id="settings" role="tabpanel">
                <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                   Close to Barceloneta
                </h5>
                <p className="text-slate-600 leading-normal font-light">
                Comparing yourself to others is the thief of joy. 
                The reading of all good books is like a conversation
                </p>
            </div>
        </div>
    </div>
</div>
  );
}