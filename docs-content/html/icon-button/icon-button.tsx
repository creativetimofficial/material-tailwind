export function IconButtonDefault() {
  return (
    <button
      className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg bg-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <i className="fas fa-heart" aria-hidden="true"></i>
      </span>
    </button>
  );
}
