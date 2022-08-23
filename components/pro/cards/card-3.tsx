export default function SectionCard3() {
  return (
    <div className="my-20">
      <div className="container mx-auto">
        <div className="card lg:w-1/3 mx-auto">
          <div className="card-header mx-4 -mt-6">
            <a href="#" blur-shadow-image="true">
              <img
                className="w-auto rounded-lg"
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card image"
              />
            </a>
          </div>
          <div className="card-body">
            <a href="#">
              <h4 className="font-medium">Matlabs mixes machine learning with IFTTT</h4>
            </a>
            <p className="opcacity-60 mb-5">It you ve ever wanted to train a machine learning model and integrate it with IF I I I, vou now can with</p>
            <button className="button button-text button-pink" data-ripple-light="true">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
