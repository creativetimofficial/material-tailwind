export default function SectionCard2() {
  return (
    <div className="my-20">
      <div className="container mx-auto">
        <div className="card lg:w-1/3 mx-auto">
          <div className="card-header mx-4 -mt-6">
            <a href="#" blur-shadow-image="true">
              <img
                className="w-auto rounded-lg"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card image"
              />
            </a>
          </div>
          <div className="card-body">
            <span className="text-sm font-bold uppercase text-orange-500">Hub</span>
            <a href="#">
              <h5 className="mt-2 font-medium">Shared Coworking</h5>
            </a>
            <p className="mb-3">
              The time is now for it to be okay to be great. People in this world shun
              people for being great. For being a bright color. For standing out.
            </p>
          </div>
          <div className="card-footer">
            <div className="flex">
              <a href="#" className="avatar">
                <img
                  src="https://demos.creative-tim.com/material-kit-pro/assets/img/marie.jpg"
                  alt="avatar"
                />
              </a>
              <div className="ml-3">
                <span className="text-blue-gray-700 mb-0 font-bold">Lory Bryson</span>
                <p className="mb-0 text-xs">Posted on 28 February</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
