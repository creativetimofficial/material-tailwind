export function CardWithList() {
  return (
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Latest Customers
          </h5>
          <a
            href="#"
            className="block font-sans text-sm font-bold leading-normal text-blue-500 antialiased"
          >
            View all
          </a>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="flex items-center justify-between pb-3 pt-3 last:pb-0">
            <div className="flex items-center gap-x-3">
              <img
                src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg"
                alt="Tania Andrew"
                className="relative inline-block h-9 w-9 rounded-full object-cover object-center"
              />
              <div>
                <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                  Tania Andrew
                </h6>
                <p className="block font-sans text-sm font-light leading-normal text-gray-700 antialiased">
                  tania@gmail.com
                </p>
              </div>
            </div>
            <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
              $400
            </h6>
          </div>
          <div className="flex items-center justify-between pb-3 pt-3 last:pb-0">
            <div className="flex items-center gap-x-3">
              <img
                src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-6.jpg"
                alt="John Micheal"
                className="relative inline-block h-9 w-9 rounded-full object-cover object-center"
              />
              <div>
                <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                  John Micheal
                </h6>
                <p className="block font-sans text-sm font-light leading-normal text-gray-700 antialiased">
                  john@gmail.com
                </p>
              </div>
            </div>
            <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
              $420
            </h6>
          </div>
          <div className="flex items-center justify-between pb-3 pt-3 last:pb-0">
            <div className="flex items-center gap-x-3">
              <img
                src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg"
                alt="Alexa Liras"
                className="relative inline-block h-9 w-9 rounded-full object-cover object-center"
              />
              <div>
                <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                  Alexa Liras
                </h6>
                <p className="block font-sans text-sm font-light leading-normal text-gray-700 antialiased">
                  alexa@gmail.com
                </p>
              </div>
            </div>
            <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
              $340
            </h6>
          </div>
          <div className="flex items-center justify-between pb-3 pt-3 last:pb-0">
            <div className="flex items-center gap-x-3">
              <img
                src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                alt="Richard Gran"
                className="relative inline-block h-9 w-9 rounded-full object-cover object-center"
              />
              <div>
                <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                  Richard Gran
                </h6>
                <p className="block font-sans text-sm font-light leading-normal text-gray-700 antialiased">
                  richard@gmail.com
                </p>
              </div>
            </div>
            <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
              $520
            </h6>
          </div>
          <div className="flex items-center justify-between pb-3 pt-3 last:pb-0">
            <div className="flex items-center gap-x-3">
              <img
                src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg"
                alt="Micheal Levi"
                className="relative inline-block h-9 w-9 rounded-full object-cover object-center"
              />
              <div>
                <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                  Micheal Levi
                </h6>
                <p className="block font-sans text-sm font-light leading-normal text-gray-700 antialiased">
                  levi@gmail.com
                </p>
              </div>
            </div>
            <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
              $780
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
