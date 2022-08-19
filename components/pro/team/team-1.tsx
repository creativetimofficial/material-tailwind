export default function SectionTeam1() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-8 py-20">
        <div className="mb-16 text-center">
          <p className="text-base leading-relaxed text-pink-500 mb-2 font-semibold">
            The team
          </p>
          <h2 className="tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900">
            Meet the team behind the Material Tailwind
          </h2>
          <p className="text-xl font-normal leading-relaxed text-blue-grey-700 lg:px-52">
            We're a small team that loves to create great experiences and make meaningful connections between builders and customers. Join our remote team!
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-16 gap-x-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="card card-plain">
            <div className="card-body">
              <a href="#">
                <img className="w-auto rounded-lg" src="https://images.unsplash.com/photo-1447194047554-cfe888edc98c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80" alt="card image"/>
              </a>
              <h5 className="tracking-normal font-sans text-xl font-semibold leading-snug mt-4 mb-0">Olivia Rhye</h5>
              <p className="text-xl font-normal leading-relaxed text-pink-500">Founder & CEO</p>
              <p className="text-base leading-relaxed mt-3 mb-8 font-normal">
                Former co-founder of Opendoor. Early Staff at Spotify and Clearbit.
              </p>
              <div className="flex gap-1">
                <button className="button button-link button-text button-secondary">
                  <i className="fab fa-twitter text-xl" aria-hidden="true"></i>
                </button>
                <button className="button button-link button-text button-secondary">
                  <i className="fab fa-linkedin text-xl" aria-hidden="true"></i>
                </button>
                <button className="button button-link button-text button-secondary">
                  <i className="fab fa-dribbble text-xl" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="card card-plain">
            <div className="card-body">
              <a href="#">
                <img className="w-auto rounded-lg" src="https://images.unsplash.com/photo-1552162864-987ac51d1177?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80" alt="card image"/>
              </a>
              <h5 className="tracking-normal font-sans text-xl font-semibold leading-snug mt-4 mb-0">Pheonix Baker</h5>
              <p className="text-xl font-normal leading-relaxed text-pink-500">Engineering Manager</p>
              <p className="text-base leading-relaxed mt-3 mb-8 font-normal">
                Lead engineering teams at Figma, Pitch, and Protocol Labs.
              </p>
              <div className="flex gap-1">
                <button className="button button-link button-text button-secondary">
                  <i className="fab fa-twitter text-xl" aria-hidden="true"></i>
                </button>
                <button className="button button-link button-text button-secondary">
                  <i className="fab fa-linkedin text-xl" aria-hidden="true"></i>
                </button>
                <button className="button button-link button-text button-secondary">
                  <i className="fab fa-dribbble text-xl" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="card card-plain">
            <div className="card-body">
              <a href="#">
                <img className="w-auto rounded-lg" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80" alt="card image"/>
              </a>
              <h5 className="tracking-normal font-sans text-xl font-semibold leading-snug mt-4 mb-0">Lana Steiner</h5>
              <p className="text-xl font-normal leading-relaxed text-pink-500">Product Manager</p>
              <p className="text-base leading-relaxed mt-3 mb-8 font-normal">
                Former PM for Linear, Lambda School, and On Deck.
              </p>
              <div className="flex gap-1">
                <button className="button button-link button-text button-secondary">
                  <i className="fab fa-twitter text-xl" aria-hidden="true"></i>
                </button>
                <button className="button button-link button-text button-secondary">
                  <i className="fab fa-linkedin text-xl" aria-hidden="true"></i>
                </button>
                <button className="button button-link button-text button-secondary">
                  <i className="fab fa-dribbble text-xl" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="card card-plain">
            <div className="card-body">
              <a href="#">
                <img className="w-auto rounded-lg" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80" alt="card image"/>
              </a>
              <h5 className="tracking-normal font-sans text-xl font-semibold leading-snug mt-4 mb-0">Demi Wilkinson</h5>
              <p className="text-xl font-normal leading-relaxed text-pink-500">Frontend Developer</p>
              <p className="text-base leading-relaxed mt-3 mb-8 font-normal">
                Former frontend dev for Linear, Coinbase, and Postscript.
              </p>
              <div className="flex gap-1">
                <button className="button button-link button-text button-secondary">
                  <i className="fab fa-twitter text-xl" aria-hidden="true"></i>
                </button>
                <button className="button button-link button-text button-secondary">
                  <i className="fab fa-linkedin text-xl" aria-hidden="true"></i>
                </button>
                <button className="button button-link button-text button-secondary">
                  <i className="fab fa-dribbble text-xl" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
