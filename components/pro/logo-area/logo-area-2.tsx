export default function SectionLogoArea2() {
  return (
    <div className="my-20">
      <div className="container mx-auto grid lg:grid-cols-2 items-center">
        <div className="mt-12 lg:mt-0 lg:pr-12 lg:row-auto row-start-1 px-8">
          <h2 className="tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-6 lg:pr-12">
            Join over 4,000+ startups growing with Material Tailwind
          </h2>
          <p className="text-xl leading-relaxed mb-12 text-grey-700">Start your 30-day free trial today.</p>
          <div className="inline-flex flex-wrap gap-3">
            <button className="button button-outlined button-lg button-dark" type="button">
              Learn more
            </button>
            <button className="button button-pink button-lg" type="button">
              Get started
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 items-start gap-y-12 gap-x-8 p-8 md:grid-cols-3 lg:grid-cols-3">
          <img className="w-full" src="/img/logos/logo-coinbase.svg" />
          <img className="w-full" src="/img/logos/logo-netflix.svg" />
          <img className="w-full" src="/img/logos/logo-google.svg" />
          <img className="w-full" src="/img/logos/logo-amazon.svg" />
          <img className="w-full" src="/img/logos/logo-pinterest.svg" />
          <img className="w-full" src="/img/logos/logo-spotify.svg" />
        </div>
      </div>
    </div>
  )
}