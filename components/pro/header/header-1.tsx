export default function SectionHeader1() {
  return (
    <header className="h-full min-h-screen w-screen bg-white px-4 pt-20 md:pt-24 lg:px-8 lg:pt-40">
      <div className="container mx-auto flex h-full flex-col-reverse items-center lg:flex-row">
        <div className="mr-0 lg:mr-16 xl:mr-24">
          <h1 className="tracking-normal font-sans font-semibold text-blue-gray-900 mb-8 text-4xl !leading-tight md:text-5xl">
            Your work with <br />
            Material Tailwind
          </h1>
          <p className="text-xl font-normal leading-relaxed text-grey-700 mb-16 md:pr-16 xl:pr-28">
            The time is now for it to be okay to be great. People in this world shun people for being great.
          </p>
          <div className="mb-6 flex w-full flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
            <div className="input-group input-group-outline w-full lg:w-8/12">
              <label className="form-label">Enter your email</label>
              <input type="text" className="form-control" />
            </div>
            <button
              className="button button-pink w-full lg:w-5/12"
              type="button"
            >
              get started
            </button>
          </div>
          <p className="text-sm font-light leading-normal text-grey-700 inline-flex items-center">
            We care about your data in our&nbsp;
            <a
              href="#"
              className="text-sm font-light leading-normal text-inherit underline decoration-gray-500 underline-offset-4"
            >
              privacy policy
            </a>
          </p>
          <div className="mt-16 mb-12 flex flex-col-reverse sm:flex-row sm:items-center lg:mb-0">
            <div className="avatar-group flex items-center">
              <a href="#" className="avatar avatar-circular">
                <img alt="Image placeholder" src="/img/face-1.jpg" />
              </a>
              <a href="#" className="avatar avatar-circular">
                <img alt="Image placeholder" src="/img/face-2.jpg" />
              </a>
              <a href="#" className="avatar avatar-circular">
                <img alt="Image placeholder" src="/img/face-3.jpg" />
              </a>
              <a href="#" className="avatar avatar-circular">
                <img alt="Image placeholder" src="/img/face-4.jpg" />
              </a>
              <a href="#" className="avatar avatar-circular">
                <img alt="Image placeholder" src="/img/face-5.jpg" />
              </a>
            </div>
            <div className="mb-6 sm:mb-0 sm:ml-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="text-base leading-relaxed text-blue-gray-900 ml-2 font-semibold">
                  5.0
                </p>
              </div>
              <p className="text-base leading-relaxed text-grey-700 mt-1 ml-0.5 font-normal">
                from 200+ reviews
              </p>
            </div>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt="team work"
          className="lg:0 mb-8 h-96 w-full rounded-xl object-cover lg:h-[40rem]"
        />
      </div>
    </header>
  )
}