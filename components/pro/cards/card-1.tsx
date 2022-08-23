export default function SectionCard1() {
  return (
    <div className="my-20">
      <div className="container mx-auto">
        <div className="card lg:w-1/3 mx-auto">
          <div className="card-header mx-4 -mt-6">
            <a href="#" blur-shadow-image="true">
              <img
                className="w-auto rounded-lg"
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card image"
              />
            </a>
          </div>
          <div className="card-body">
            <a href="#">
              <h4 className="font-medium">Material Tailwind</h4>
            </a>
            <p className="opcacity-60 mb-3">
              The time is now for it to be okay to be great. People in this world shun
              people for being great. For being a bright color. For standing out.
            </p>
            <button className="button button-pink" data-ripple-light="true">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
