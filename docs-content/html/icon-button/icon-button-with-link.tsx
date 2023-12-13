export function IconButtonWithLink() {
  return (
    <div className="flex items-center gap-4">
      <a href="#buttons-with-link">
        <button
          className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg bg-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
            <i className="fas fa-heart" aria-hidden="true"></i>
          </span>
        </button>
      </a>
      <a href="#buttons-with-link">
        <button
          className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
            <i className="fas fa-heart" aria-hidden="true"></i>
          </span>
        </button>
      </a>
      <a href="#buttons-with-link">
        <button
          className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg border border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
            <i className="fas fa-heart" aria-hidden="true"></i>
          </span>
        </button>
      </a>
      <a href="#buttons-with-link">
        <button
          className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
            <i className="fas fa-heart" aria-hidden="true"></i>
          </span>
        </button>
      </a>
    </div>
  );
}
