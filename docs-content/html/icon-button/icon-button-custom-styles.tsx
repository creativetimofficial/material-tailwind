export function IconButtonCustomStyles() {
  return (
    <div className="flex gap-3">
      <button className="rounded-md bg-[#ea4335] py-2 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-[#ea4335]/90 focus:shadow-none active:bg-[#ea4335]/90 hover:bg-[#ea4335]/90 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
        <i className="fab fa-google w-4 h-4" aria-hidden="true"></i>
      </button>

      <button className="rounded-md bg-[#1DA1F2] py-2 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-[#1DA1F2]/90 focus:shadow-none active:bg-[#1DA1F2]/90 hover:bg-[#1DA1F2]/90 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
        <i className="fab fa-twitter w-4 h-4" aria-hidden="true"></i>
      </button>

      <button className="rounded-md bg-[#ea4c89] py-2 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-[#ea4c89]/90 focus:shadow-none active:bg-[#ea4c89]/90 hover:bg-[#ea4c89]/90 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
        <i className="fab fa-dribbble w-4 h-4" aria-hidden="true"></i>
      </button>

      <button className="rounded-md bg-[#333333] py-2 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-[#333333]/90 focus:shadow-none active:bg-[#333333]/90 hover:bg-[#333333]/90 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
        <i className="fab fa-github w-4 h-4" aria-hidden="true"></i>
      </button>
    </div>
  );
}
