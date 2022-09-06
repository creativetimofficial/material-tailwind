export default function SectionStats1() {
  return (
    <div className="my-20">
      <div className="container mx-auto">
        <div className="lg:flex px-8">
          <div className="lg:w-10/12">
            <p className="text-base leading-relaxed text-pink-500 mb-2 font-semibold">About us</p>
            <h1 className="tracking-normal text-5xl font-semibold text-blue-gray-900 mb-8 leading-tight lg:text-6xl">Our products are built on top</h1>
          </div>
          <p className="text-xl lg:pr-5 lg:mt-7 text-grey-700 font-normal">Learn more about the team behind the company.</p>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 gap-x-8 px-8 pt-20 pb-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h1 className="text-pink-500 text-7xl font-semibold mb-4">300</h1>
            <h5 className="text-blue-gray-900 font-semibold">Projects completed</h5>
            <p className="text-grey-700 font-normal">Of “high-performing” level are led by a certified project manager</p>
          </div>
          <div>
            <h1 className="text-pink-500 text-7xl font-semibold mb-4">600%</h1>
            <h5 className="text-blue-gray-900 font-semibold">Return on investment</h5>
            <p className="text-grey-70 font-normal0">Our customers have reported an average of ~600%ROI.</p>
          </div>
          <div>
            <h1 className="text-pink-500 text-7xl font-semibold mb-4">10k</h1>
            <h5 className="text-blue-gray-900 font-semibold">Working hours</h5>
            <p className="text-grey-700 font-normal">That meets quality standards required by our users</p>
          </div>
          <div>
            <h1 className="text-pink-500 text-7xl font-semibold mb-4">24/7</h1>
            <h5 className="text-blue-gray-900 font-semibold">Premium Support</h5>
            <p className="text-grey-700 font-normal">Actively engage team members that finishes on time</p>
          </div>
        </div>
      </div>
    </div>
  )
}
