export function IconButtonColors() {
  return (
    <div className="flex gap-4">
      <button
        className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg bg-blue-500 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <i className="fas fa-heart" aria-hidden="true"></i>
        </span>
      </button>
      <button
        className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg bg-red-500 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <i className="fas fa-heart" aria-hidden="true"></i>
        </span>
      </button>
      <button
        className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg bg-green-500 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <i className="fas fa-heart" aria-hidden="true"></i>
        </span>
      </button>
      <button
        className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg bg-amber-500 text-center align-middle font-sans text-xs font-medium uppercase text-black shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <i className="fas fa-heart" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  );
}
