export function CardDefault() {
  return (
    <div className="relative mt-6 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
          alt="card-image"
        />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          UI/UX Review Check
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main night life in
          Barcelona.
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Read More
        </button>
      </div>
    </div>
  );
}
