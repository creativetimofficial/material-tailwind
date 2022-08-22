export default function SectionPricing3() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 p-4">
          <div className="hidden lg:block">
            <h4 className="tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-grey-900 flex items-center gap-3 py-4">
              &nbsp;
            </h4>
            <hr className="border-t mb-6 lg:-mx-4" />
          </div>
          <div className="">
            <h4 className="tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-grey-900 flex items-center gap-3 py-4">
              Basic
              <div className="chip chip-pink text-xs rounded-full py-1 px-2.5">popular</div>
            </h4>
            <hr className="border-t mb-6 lg:-mx-12" />
            <div className="flex items-end gap-1 mb-4">
              <h1 className="tracking-normal font-sans text-5xl font-semibold leading-tight text-blue-grey-900">
                $10
              </h1>
              <p className="text-base leading-relaxed text-grey-700 font-medium mb-2">
                per month
              </p>
            </div>
            <p className="text-base leading-relaxed text-grey-700 font-normal mb-8 opacity-80">
              Basic features for up to 10 emplovees with everything you need.
            </p>
            <button className="button button-pink button-lg w-full mb-4" type="button">Get started</button>
            <button className="button button-dark button-lg button-outlined block w-full" type="button">Chat to sales</button>
          </div>
          <div className="">
            <h4 className="tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-grey-900 flex items-center gap-3 py-4">
              Business
            </h4>
            <hr className="border-t mb-6 lg:-mx-12" />
            <div className="flex items-end gap-1 mb-4">
              <h1 className="tracking-normal font-sans text-5xl font-semibold leading-tight text-blue-grey-900">
                $20
              </h1>
              <p className="text-base leading-relaxed text-grey-700 font-medium mb-2">
                per month
              </p>
            </div>
            <p className="text-base leading-relaxed text-grey-700 font-normal mb-8 opacity-80">
              Advanced features and reporting, better workflows and automation.
            </p>
            <button className="button button-pink button-lg w-full mb-4" type="button">Get started</button>
            <button className="button button-dark button-lg button-outlined block w-full" type="button">Chat to sales</button>
          </div>
          <div className="">
            <h4 className="tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-grey-900 flex items-center gap-3 py-4">
              Enterprise
            </h4>
            <hr className="border-t mb-6 lg:-mx-4" />
            <div className="flex items-end gap-1 mb-4">
              <h1 className="tracking-normal font-sans text-5xl font-semibold leading-tight text-blue-grey-900">
                $40
              </h1>
              <p className="text-base leading-relaxed text-grey-700 font-medium mb-2">
                per month
              </p>
            </div>
            <p className="text-base leading-relaxed text-grey-700 font-normal mb-8 opacity-80">
              Personalised service and enterprise security for large teams.
            </p>
            <button className="button button-pink button-lg w-full mb-4" type="button">Get started</button>
            <button className="button button-dark button-lg button-outlined block w-full" type="button">Chat to sales</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-16 p-4">
          <div className="py-2">
            <p className="text-base leading-relaxed text-pink-500 font-medium">
              Overview
            </p>
          </div>
        </div>
        <div className="overflow-x-scroll">
          <div className="grid min-w-[64rem] grid-cols-4 gap-x-16 p-4 bg-blue-grey-50/30">
            <div className="flex items-center gap-1.5">
              <p className="text-base leading-relaxed text-blue-grey-900 font-medium">
                Basic features
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-green-500 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-green-500 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-green-500 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="grid min-w-[64rem] grid-cols-4 gap-x-16 p-4 text-center">
            <div className="flex items-center gap-1.5">
              <p className="text-base leading-relaxed text-blue-grey-900 font-medium">
                Users
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-base leading-relaxed text-grey-700 opacity-80 font-normal">
              10
            </p>
            <p className="text-base leading-relaxed text-grey-700 opacity-80 font-normal">
              20
            </p>
            <p className="text-base leading-relaxed text-grey-700 opacity-80 font-normal">
              Unlimited
            </p>
          </div>
          <div className="grid min-w-[64rem] grid-cols-4 gap-x-16 p-4 text-center bg-blue-grey-50/30">
            <div className="flex items-center gap-1.5">
              <p className="text-base leading-relaxed text-blue-grey-900 font-medium">
                Individual data
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-base leading-relaxed text-grey-700 opacity-80 font-normal">
              20GB
            </p>
            <p className="text-base leading-relaxed text-grey-700 opacity-80 font-normal">
              40GB
            </p>
            <p className="text-base leading-relaxed text-grey-700 opacity-80 font-normal">
              Unlimited
            </p>
          </div>
          <div className="grid min-w-[64rem] grid-cols-4 gap-x-16 p-4">
            <div className="flex items-center gap-1.5">
              <p className="text-base leading-relaxed text-blue-grey-900 font-medium">
                Support
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-green-500 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-green-500 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-green-500 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="grid min-w-[64rem] grid-cols-4 gap-x-16 p-4 text-center bg-blue-grey-50/30">
            <div className="flex items-center gap-1.5">
              <p className="text-base leading-relaxed text-blue-grey-900 font-medium">
                Automated workflows
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-base leading-relaxed text-grey-700 opacity-80 font-bold">
              ⎯
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-green-500 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-green-500 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="grid min-w-[64rem] grid-cols-4 gap-x-16 p-4 text-center border-b border-blue-gray-50">
            <div className="flex items-center gap-1.5">
              <p className="text-base leading-relaxed text-blue-grey-900 font-medium">
                200+ integrations
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-base leading-relaxed text-grey-700 opacity-80 font-bold">
              ⎯
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-green-500 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-green-500 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-16 py-8 px-4">
            <div className="py-2">
              <a
                href="#"
                className="text-base leading-relaxed text-pink-500 font-medium hover:text-pink-700 transition-colors"
              >
                Reports and analytics
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}