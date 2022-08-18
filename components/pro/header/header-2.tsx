export default function SectionHeader2() {
  return (
    <header className="h-full min-h-screen w-screen place-items-center bg-white px-8 pt-56 lg:pt-40">
      <div className="container mx-auto grid h-full items-center lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <div className="mb-8 inline-flex items-center rounded-full bg-pink-50 py-1 pl-1 pr-3">
            <p className="text-sm leading-normal mr-3 rounded-full bg-white py-0.5 px-3 font-semibold text-pink-500">New</p>
            <p className="text-sm leading-normal text-pink-500 flex items-center font-semibold">Personalized coaching in-app
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </p>
          </div>
          <h1 className="tracking-normal font-sans text-5xl font-semibold text-blue-gray-900 mb-8 leading-tight lg:text-6xl">Portfolio perfromance tracking made easy</h1>
          <p className="text-xl font-normal leading-relaxed text-gray-700 lg:pr-20">Designed by marketers, for marketers. Untitled gives you the guidance, data and innovation you need to become a better marketer.</p>
          <div className="mt-12 flex justify-center gap-3 lg:justify-start">
            <button className="button button-pink" type="button">Download IOS</button>
            <button className="button button-pink" type="button">Download Andriod</button>
          </div>
        </div>
        <div className="hidden justify-center lg:flex">
          <div className="h-[40rem] w-96 rounded-xl bg-pink-500"></div>
        </div>
      </div>
    </header>
  )
}