export default function SectionHeader3() {
  return (
    <header className="h-full min-h-screen w-screen bg-white pt-28 md:pt-32 lg:px-8 lg:pt-40">
      <div className="container mx-auto grid h-full items-center text-center">
        <div className="mx-auto mb-8 inline-flex w-max items-center rounded-full bg-pink-50 py-1 pl-1 pr-3">
          <p className="text-sm leading-normal mr-3 rounded-full bg-white px-2.5 py-0.5 font-semibold text-pink-500">What's new?</p>
          <p className="text-sm leading-normal text-pink-500 flex items-center font-semibold">
            Get a new virtual card
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </p>
        </div>
        <h1 className="tracking-normal font-sans text-5xl font-semibold text-blue-gray-900 mb-8 leading-tight lg:text-6xl">Work with an amazing</h1>
        <p className="text-xl font-normal leading-relaxed text-grey-700 mx-auto mb-12 w-full px-8 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20">People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest.</p>
        <div className="mb-20 flex justify-center gap-3">
          <button className="button button-pink button-lg button-outlined flex" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1.5 -mt-0.5 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            demo
          </button>
          <button className="button button-pink button-lg" type="button">sign up</button>
        </div>
      </div>
      <div className="mx-0 lg:container lg:mx-auto">
        <img 
          src="https://images.unsplash.com/photo-1571715268998-d6e79bed5fc9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2344&amp;q=80" 
          alt="credit cards" 
          className="h-96 w-full object-cover md:h-[34rem] lg:h-[44rem] rounded-xl" 
        />  
      </div>
    </header>
  )
}