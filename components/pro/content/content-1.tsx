export default function SectionContent2() {
  return (
    <section className="py-16 lg:py-28 px-8">
      <div className="container mx-auto grid lg:grid-cols-2 items-center">
        <div className="mt-12 lg:mt-0 lg:pr-12 lg:row-auto row-start-2">
          <p className="text-base leading-relaxed text-pink-500 font-semibold mb-2">
            Our Vision
          </p>
          <h2 className="tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-6">
            Find some great partners
          </h2>
          <p className="text-xl leading-relaxed mb-12 text-grey-700">
            I always felt like I could do anything. That’s the main thing people are controlled by! 
            They're slowed down by {" "}
            <a
              href="#"
              className="hover:text-pink-500 transition-colors underline underline-offset-4"
            >
              their perception of themselves
            </a>
            . If you're taught you can’t do anything, you won’t do anything. I was taught I could do everything.
            <br />
            <br />
            The time is now for it to be okay to be great. 
            For being a bright color. For standing out. But the time is now to be okay to 
            {" "}
            <a
              href="#"
              className="hover:text-pink-500 transition-colors underline underline-offset-4"
            >
              be the greatest you
            </a>
            . Would you believe in what you believe in, if you were the only one who believed it?
            <br />
            <br />
            We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams.
          </p>
          <div className="inline-flex flex-wrap gap-3">
            <button
              className="button button-outlined button-lg button-dark"
              type="button"
            >
              get in touch
            </button>
            <button
              className="button button-pink button-lg"
              type="button"
            >
              our process
            </button>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGVhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="team work"
          className="w-full h-full rounded-xl object-cover object-center min-h-[50vh] md:min-h-[75vh] "
        />
      </div>
    </section>
  )
}