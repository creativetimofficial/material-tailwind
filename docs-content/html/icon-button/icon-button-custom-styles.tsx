export function IconButtonCustomStyles() {
  return (
    <div className="flex gap-4">
      <button
        className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded bg-[#ea4335] text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-[#ea4335]/20 focus:opacity-[0.85] focus:shadow-none focus:shadow-[#ea4335]/20 active:opacity-[0.85] active:shadow-none active:shadow-[#ea4335]/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <i className="fab fa-google text-lg" aria-hidden="true"></i>
        </span>
      </button>
      <button
        className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded bg-[#1DA1F2] text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-[#1DA1F2]/20 focus:opacity-[0.85] focus:shadow-none focus:shadow-[#1DA1F2]/20 active:opacity-[0.85] active:shadow-none active:shadow-[#1DA1F2]/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <i className="fab fa-twitter text-lg" aria-hidden="true"></i>
        </span>
      </button>
      <button
        className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded bg-[#ea4c89] text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-[#ea4c89]/20 focus:opacity-[0.85] focus:shadow-none focus:shadow-[#ea4c89]/20 active:opacity-[0.85] active:shadow-none active:shadow-[#ea4c89]/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <i className="fab fa-dribbble text-lg" aria-hidden="true"></i>
        </span>
      </button>
      <button
        className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded bg-[#333333] text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-[#333333]/20 focus:opacity-[0.85] focus:shadow-none focus:shadow-[#333333]/20 active:opacity-[0.85] active:shadow-none active:shadow-[#333333]/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <i className="fab fa-github text-lg" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  );
}
