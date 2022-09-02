export default function SectionHeader4() {
  return (
    <header className="h-full min-h-screen w-screen bg-white px-4 pt-20 lg:px-8 lg:pt-24">
      <div className="container mx-auto grid h-full place-items-center rounded-3xl bg-gradient-to-tr from-pink-700 to-pink-500 px-12 pt-24 pb-48 text-center">
        <h1 className="tracking-normal font-sans text-5xl font-semibold leading-tight text-white mb-8 leading-tight lg:text-7xl">Grow your users.<br/> 
          <span className="opacity-75">Smarter.</span>
        </h1>
        <p className="text-xl font-normal leading-relaxed text-white mb-16 w-full opacity-75 md:w-10/12 lg:w-7/12">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        <div className="w-full md:w-8/12 lg:w-5/12">
          <div className="mb-6 flex flex-col gap-2 md:mb-2 md:flex-row">
            <div className="input-group input-group-outline bg-white rounded-md w-full lg:w-8/12">
              <input type="text" className="form-control" placeholder="Enter your email" />
            </div>
            <button className="button button-light text-dark-500 w-full px-4 md:w-40" type="button">get started</button>
          </div>
          <p className="text-sm font-light leading-normal text-white block md:flex items-center justify-self-start">We care about your data in our&nbsp;
            <a href="#" className="text-sm font-light leading-normal text-inherit underline decoration-white underline-offset-2">privacy policy</a>
          </p>
        </div>
      </div>
      <div className="container mx-auto -mt-28 px-4 pb-16">
        <div className="relative mx-auto max-w-screen-lg rounded-2xl bg-white pt-8 pr-2.5 shadow-2xl shadow-gray-500/40">
          <h6 className="tracking-normal font-sans text-base font-semibold leading-relaxed text-inherit pl-6">
            Users over time
          </h6>
          <div style={{ "height": "320px" }}>
            <div id="chart" style={{ "height": "320px" }}></div>
          </div>
          <div className="absolute -right-[5%] -bottom-[7%] hidden h-[280px] w-[280px] rounded-full bg-white shadow-xl shadow-gray-500/20 lg:block xl:-right-[10%]">
            <div id="chart2" style={{ "margin-top": ".75rem" }}></div>
          </div> 
        </div>  
      </div>    
    </header>
  )
}