export default function SectionStats1() {
  return (
    <div className="my-20">
      <div className="container  mx-auto">
        <div className="flex">
          <div className="w-10/12">
            <p className="text-base leading-relaxed text-deep-purple-500 mb-2 font-semibold">About us</p>
            <h1 className="tracking-normal text-5xl font-semibold text-blue-gray-900 mb-8 leading-tight lg:text-6xl">We do things differently...</h1>
          </div>
          <p className="text-xl lg:pr-5 lg:mt-7 text-grey-700 font-normal">Learn more about the company and the team behind it.</p>
        </div>
        <div className=" grid grid-cols-1 items-start gap-y-12 gap-x-8 px-8 pt-20 pb-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h1 className="text-pink-500 text-7xl font-semibold mb-4">400+</h1>
            <h5 className="text-blue-gray-900 font-semibold">Projects completed</h5>
            <p className="text-grey-700 font-normal">We've helped build over 400 amazing projects.</p>
          </div>
          <div>
            <h1 className="text-pink-500 text-7xl font-semibold mb-4">600%</h1>
            <h5 className="text-blue-gray-900 font-semibold">Projects completed</h5>
            <p className="text-grey-70 font-normal0">Our customers have reported an average of ~600%ROI.</p>
          </div>
          <div>
            <h1 className="text-pink-500 text-7xl font-semibold mb-4">10k</h1>
            <h5 className="text-blue-gray-900 font-semibold">Projects completed</h5>
            <p className="text-grey-700 font-normal">Our free UI kit has been downloaded over 100k times.</p>
          </div>
          <div>
            <h1 className="text-pink-500 text-7xl font-semibold mb-4">200+</h1>
            <h5 className="text-blue-gray-900 font-semibold">Projects completed</h5>
            <p className="text-grey-700 font-normal">We're proud of our 5-star rating with over 200 reviews.</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}
