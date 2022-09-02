export default function SectionAuth1() {
  return (
    <section className="grid lg:grid-cols-2 items-center h-screen">
      <div className="p-10 md:p-20 xl:px-32 xl:py-24 text-center my-auto">
        <h3 className="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900 mb-2">
          Welcome back
        </h3>
        <p className="block antialiased font-sans text-base font-light leading-relaxed text-grey-700 mb-16">
          Welcome back, please enter your details.
        </p>
        <form action="#" className="text-left max-w-[24rem] mx-auto">
          <div className="mb-8">
            <div className="relative w-full min-w-[200px] h-11">
              <div className="input-group input-group-outline">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="relative w-full min-w-[200px] h-11">
              <div className="input-group input-group-outline">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <label className="mt-3 inline-flex items-center">
              <input
                type="checkbox"
                className="checkbox absolute z-10 cursor-pointer opacity-0"
              />
              <div className="form-check-input"></div>
              <span className="text-grey-700 font-semibold cursor-pointer select-none">
                Remember for 30 days
              </span>
            </label>
            <a
              href="#"
              className="block antialiased font-sans text-base leading-relaxed text-pink-500 font-medium"
            >
              Forgot password
            </a>
          </div>
          <button
            className="button button-pink button-lg w-full mt-6"
            type="button"
          >
            sign in
          </button>
          <button
            className="button button-outlined button-dark button-lg w-full mt-4 flex items-center gap-2 justify-center"
            type="button"
          >
            <i className="fab fa-google not-italic" /> &nbsp; sign in with
            google
          </button>
        </form>
      </div>
      <img
        src="https://images.unsplash.com/photo-1530569673472-307dc017a82d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
        alt="background image"
        className="w-full h-screen object-cover hidden lg:block"
      />
    </section>

  )
}
