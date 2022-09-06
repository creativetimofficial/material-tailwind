export default function SectionFeatures3() {
  return (
    <section className="bg-white px-4 py-12">
      <div className="container mx-auto">
        <div className="mb-20 grid lg:grid-cols-2">
          <div className="lg:pr-10">
            <img 
                src="https://images.unsplash.com/photo-1601933513793-1252ce25d644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                className="w-full rounded-lg shadow-lg"
              />
          </div>
          <div className="grid items-center py-12 px-2 lg:ml-8 lg:py-16">
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
            <h3 className="tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-grey-900 mb-2">
              See our projects
            </h3>
            <p className="text-xl leading-relaxed mb-10 text-blue-grey-700">
              People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest.
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
              <button className="button button-pink button-lg" type="button" data-ripple-light="true">read more</button>
            </div>
          </div>
        </div>
        <div className="mb-20 grid lg:grid-cols-2">
          <div className="grid items-center py-12 px-2 lg:mr-16 lg:py-16">
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
            <h3 className="tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-grey-900 mb-2">
              Read More About Us
            </h3>
            <p className="text-xl leading-relaxed mb-10 text-blue-grey-700">
              Pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.
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
              <button className="button button-pink button-lg" type="button" data-ripple-light="true">read more</button>
            </div>
          </div>
          <div className="row-start-1 lg:row-auto lg:pl-10">
            <img 
              src="https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}