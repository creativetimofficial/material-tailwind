export default function SectionFeatures3() {
  return (
    <section className="bg-white px-4 py-12">
      <div className="container mx-auto">
        <div className="mb-20 grid lg:grid-cols-2">
          <div className="lg:pr-10">
            <div className="h-full min-h-[20rem] w-full rounded-3xl bg-gradient-to-tr from-pink-500 to-pink-700" />
          </div>
          <div className="grid items-center py-12 px-2 lg:ml-8 lg:py-20">
            <div className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-pink-100/80 p-2.5 text-pink-500 ring-8 ring-pink-100/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900 mb-2">
              Deliver instant answers
            </h3>
            <p className="text-xl leading-relaxed mb-10">
              Keep your customers in the flow by embedding help articles right on
              your website. With Beacon, they never have to leave the page to find
              an answer.
            </p>
            <div className="flex gap-2">
              <button
                className="button button-pink button-outlined button-lg flex"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1.5 -mt-0.5 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                demo
              </button>
              <button className="button button-pink button-lg" type="button">learn more</button>
            </div>
          </div>
        </div>
        <div className="mb-20 grid lg:grid-cols-2">
          <div className="grid items-center py-12 px-2 lg:mr-16 lg:py-20">
            <div className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-pink-100/80 p-2.5 text-pink-500 ring-8 ring-pink-100/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
            </div>
            <h3 className="tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900 mb-2">
              Manage your team with reports
            </h3>
            <p className="text-xl leading-relaxed mb-10">
              Measure what matters with Untitled's easy-to-use reports. You can
              filter, export, and drilldown on the data in a couple clicks
            </p>
            <div className="flex gap-2">
              <button className="button button-pink button-outlined button-lg flex" type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1.5 -mt-0.5 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                demo
              </button>
              <button className="button button-pink button-lg" type="button">learn more</button>
            </div>
          </div>
          <div className="row-start-1 lg:row-auto lg:pl-10">
            <div className="h-full min-h-[20rem] w-full rounded-3xl bg-gradient-to-tr from-pink-500 to-pink-700" />
          </div>
        </div>
      </div>
    </section>
  )
}