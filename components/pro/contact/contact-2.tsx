export default function SectionContact2() {
  return (
    <section className="grid lg:grid-cols-2 items-center">
      <div className="p-10 md:p-20 xl:px-32 xl:py-24">
        <h1 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-blue-gray-900 mb-4">
          Contact us
        </h1>
        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-grey-700 mb-16">
          Our friendly team would love to hear from vou.
        </p>
        <form action="#">
          <div className="flex gap-x-6 gap-y-8 mb-8 flex-wrap xl:flex-nowrap">
            <div className="relative w-full min-w-[200px] h-11">
              <div className="input-group input-group-outline">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="relative w-full min-w-[200px] h-11">
              <div className="input-group input-group-outline">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="relative w-full min-w-[200px] h-11">
              <div className="input-group input-group-outline">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="relative w-full min-w-[200px] h-11">
              <div className="input-group input-group-outline">
                <label className="form-label">Phone number</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="relative w-full min-w-[200px]">
              <div className="input-group input-group-outline">
                <label className="form-label">Email</label>
                <textarea type="text" className="form-control" rows={7} />
              </div>
            </div>
          </div>
          <div className="inline-flex items-center">
            <label className="mt-3 inline-flex items-center">
              <input
                type="checkbox"
                className="checkbox absolute z-10 cursor-pointer opacity-0"
              />
              <div className="form-check-input"></div>
              <span className="text-gray-700 cursor-pointer select-none">
                You agree to your friendly{" "}
                <a href="#" className="underline underline-offset-4">
                  privacy policy
                </a>
                .
              </span>
            </label>
          </div>
          <button
            className="button button-pink button-lg w-full mt-6"
            type="button"
          >
            Send message
          </button>
        </form>
      </div>
      <img 
        src="https://images.unsplash.com/photo-1611703371650-333f912c9311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        className="w-full"
      />
    </section>
  )
}
