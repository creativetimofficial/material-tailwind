export function CardWithList() {
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <h5 className="text-slate-800 text-lg font-semibold">
            Latest Customers
          </h5>
          
          <a
            href="#"
            className="text-slate-600"
          >
            View all
          </a>
        </div>
        <div className="divide-y divide-slate-200">
          <div className="flex items-center justify-between pb-3 pt-3 last:pb-0">
            <div className="flex items-center gap-x-3">
              <img
                src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg"
                alt="Maria Jimenez"
                className="relative inline-block h-8 w-8 rounded-full object-cover object-center"
              />
              <div>
                <h6 className="text-slate-800 font-semibold">
                  Maria Jimenez
                </h6>
                <p className="text-slate-600 text-sm">
                  maria@gmail.com
                </p>
              </div>
            </div>
            <h6 className="text-slate-600 font-medium">
              $400
            </h6>
          </div>
          <div className="flex items-center justify-between pb-3 pt-3 last:pb-0">
            <div className="flex items-center gap-x-3">
              <img
                src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-6.jpg"
                alt="John Micheal"
                className="relative inline-block h-8 w-8 rounded-full object-cover object-center"
              />
              <div>
                <h6 className="text-slate-800 font-semibold">
                  John Micheal
                </h6>
                <p className="text-slate-600 text-sm">
                  john@gmail.com
                </p>
              </div>
            </div>
            <h6 className="text-slate-600 font-medium">
              $420
            </h6>
          </div>
          <div className="flex items-center justify-between pb-3 pt-3 last:pb-0">
            <div className="flex items-center gap-x-3">
              <img
                src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg"
                alt="Alexa Liras"
                className="relative inline-block h-8 w-8 rounded-full object-cover object-center"
              />
              <div>
                <h6 className="text-slate-800 font-semibold">
                  Alexa Liras
                </h6>
                <p className="text-slate-600 text-sm">
                  alexa@gmail.com
                </p>
              </div>
            </div>
            <h6 className="text-slate-600 font-medium">
              $340
            </h6>
          </div>
          <div className="flex items-center justify-between pb-3 pt-3 last:pb-0">
            <div className="flex items-center gap-x-3">
              <img
                src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                alt="Richard Gran"
                className="relative inline-block h-8 w-8 rounded-full object-cover object-center"
              />
              <div>
                <h6 className="text-slate-800 font-semibold">
                  Richard Gran
                </h6>
                <p className="text-slate-600 text-sm">
                  richard@gmail.com
                </p>
              </div>
            </div>
            <h6 className="text-slate-600 font-medium">
              $520
            </h6>
          </div>
          <div className="flex items-center justify-between pb-3 pt-3 last:pb-0">
            <div className="flex items-center gap-x-3">
              <img
                src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg"
                alt="Micheal Levi"
                className="relative inline-block h-8 w-8 rounded-full object-cover object-center"
              />
              <div>
                <h6 className="text-slate-800 font-semibold">
                  Micheal Levi
                </h6>
                <p className="text-slate-600 text-sm">
                  michael@gmail.com
                </p>
              </div>
            </div>
            <h6 className="text-slate-600 font-medium">
              $520
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
