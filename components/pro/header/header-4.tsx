export default function SectionHeader4() {
  return (
    <header className="h-full min-h-screen w-screen bg-white px-4 pt-20 lg:px-8 lg:pt-24">
      <div className="container mx-auto grid h-full place-items-center rounded-3xl bg-gradient-to-tr from-pink-700 to-pink-500 px-12 pt-24 pb-48 text-center">
        <h1 className="antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-white mb-8 leading-tight lg:text-7xl">Grow your users.<br/> 
          <span className="opacity-75">Smarter.</span>
        </h1>
        <p className="antialiased text-xl font-normal leading-relaxed text-white mb-16 w-full opacity-75 md:w-10/12 lg:w-7/12">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        <div className="w-full md:w-8/12 lg:w-5/12">
          <div className="mb-6 flex flex-col gap-2 md:mb-2 md:flex-row">
            <div className="relative w-full min-w-[200px] h-11">
              <input placeholder="Enter your email" className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-blue-500 !border-0 bg-white" />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500 hidden"></label>
            </div>
            <button className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full px-4 md:w-40" type="button">get started</button>
          </div>
          <p className="antialiased text-sm font-light leading-normal text-white flex items-center justify-self-start">We care about your data in our&nbsp;
            <a href="#" className="antialiased text-sm font-light leading-normal text-inherit underline decoration-white underline-offset-2">privacy policy</a>
          </p>
        </div>
      </div>
      <div className="container mx-auto -mt-28 px-4 pb-16">
        <div className="relative mx-auto max-w-screen-lg rounded-2xl bg-white pt-8 pr-2.5 shadow-2xl shadow-gray-500/40">
          <h6 className="antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-inherit pl-6">
            Users over time
          </h6>
          <div style={{ minHeight: 415 }}>
    
          </div>
          <div className="absolute -right-[5%] -bottom-[7%] hidden h-[280px] w-[280px] rounded-full bg-white shadow-xl shadow-gray-500/20 lg:block xl:-right-[10%]">
            <div className="-mt-2" style={{ minHeight: "298.7px" }}>
              <div
                id="apexchartsm5twt6d7"
                className="apexcharts-canvas apexchartsm5twt6d7 apexcharts-theme-light"
                style={{ width: 280, height: "298.7px" }}
              >
                
                <div className="apexcharts-legend" />
              </div>
            </div>
          </div>
        </div>  
      </div>    
    </header>
  )
}