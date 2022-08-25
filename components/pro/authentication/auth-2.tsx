export default function SectionAuth2() {
  return (
    <section className="grid items-center h-screen">
      <div className="text-center">
        <h3 className="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900 mb-2">
          Create an account
        </h3>
        <p className="block antialiased font-sans text-base font-light leading-relaxed text-grey-700 mb-12">
          Start your 30 days free trial.
        </p>
        <form action="#" className="text-left max-w-[24rem] mx-auto">
          <div className="relative w-full min-w-[200px] h-11">
            <div className="input-group input-group-outline">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" />
            </div>
          </div>
          <button
            className="button button-pink button-lg w-full mt-4"
            type="button"
          >
            get started
          </button>
          <div className="w-full flex items-center gap-2 my-6">
            <hr className="w-full bg-blue-gray-50" />
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-medium opacity-50">
              OR
            </p>
            <hr className="w-full bg-blue-gray-50" />
          </div>
          <button
            className="button button-outlined button-dark button-lg w-full mt-4 flex items-center gap-2 justify-center"
            type="button"
          >
            <img className="w-5" src="./img/logos/logo-google-2.png" />
            &nbsp; 
            sign in with google
          </button>
          <button
            className="button button-outlined button-dark button-lg w-full mt-4 flex items-center gap-2 justify-center"
            type="button"
          >
            <img className="w-5" src="./img/logos/logo-facebook.png" />
            &nbsp; sign in with facebook
          </button>
          <button
            className="button button-outlined button-dark button-lg w-full mt-4 flex items-center gap-2 justify-center"
            type="button"
          >
            <img className="w-5" src="./img/logos/logo-apple.png" />
            &nbsp; sign in with apple
          </button>
          <p className="block antialiased font-sans text-base leading-relaxed text-grey-700 font-normal text-center mt-6">
            Already have an account?{" "}
            <a
              href="#"
              className="text-pink-500 font-medium hover:text-pink-700 transition-colors"
            >
              Log in
            </a>
          </p>
        </form>
      </div>
    </section>

  )
}
