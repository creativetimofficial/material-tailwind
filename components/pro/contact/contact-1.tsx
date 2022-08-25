export default function SectionContact1() {
  return (
    <section className="lg:py-48 px-8 py-8">
      <div className="container mx-auto mb-20 text-center">
        <p className="block antialiased font-sans text-base leading-relaxed text-pink-500 mb-2 font-bold">
          Contact us
        </p>
        <h1 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-blue-gray-900 mb-4">
          We'd love to hear from you
        </h1>
        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-grey-700 mx-auto">
          Our friendly team is always here to chat.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-grey-700 shadow-none">
          <div className="p-6 grid justify-center text-center">
            <div className="mx-auto mb-8 grid h-12 w-12 place-items-center rounded-full bg-pink-100/80 p-2.5 text-pink-500 ring-8 ring-pink-100/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-blue-gray-900 font-semibold mb-1">
              Email
            </h5>
            <p className="block antialiased font-sans text-base leading-relaxed text-grey-700 px-8 mb-4 font-normal">
              Our friendly team is here to help.
            </p>
            <p className="block antialiased font-sans text-base leading-relaxed text-pink-500 px-12 font-normal">
              hi@material-tailwind.com
            </p>
          </div>
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-grey-700 shadow-none">
          <div className="p-6 grid justify-center text-center">
            <div className="mx-auto mb-8 grid h-12 w-12 place-items-center rounded-full bg-pink-100/80 p-2.5 text-pink-500 ring-8 ring-pink-100/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-blue-gray-900 font-semibold mb-1">
              Office
            </h5>
            <p className="block antialiased font-sans text-base leading-relaxed text-grey-700 px-8 mb-4 font-normal">
              Come say hello at your office HQ.
            </p>
            <p className="block antialiased font-sans text-base leading-relaxed text-pink-500 px-12 font-normal">
              100 Smith Street Collingwood VIC 3066 AU
            </p>
          </div>
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-grey-700 shadow-none">
          <div className="p-6 grid justify-center text-center">
            <div className="mx-auto mb-8 grid h-12 w-12 place-items-center rounded-full bg-pink-100/80 p-2.5 text-pink-500 ring-8 ring-pink-100/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-blue-gray-900 font-semibold mb-1">
              Phone
            </h5>
            <p className="block antialiased font-sans text-base leading-relaxed text-grey-700 px-8 mb-4 font-normal">
              Mon-Fri from 8am to 5pm
            </p>
            <p className="block antialiased font-sans text-base leading-relaxed text-pink-500 px-12 font-normal">
              +1 (555) 000-0000
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
