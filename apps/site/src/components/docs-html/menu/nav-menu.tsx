
export default function NavMenu() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<button data-open="false" data-nested="false" aria-expanded="false" aria-haspopup="menu" id=":R0H2:" class="justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-1.5 px-3 bg-transparent border-transparent text-slate-800 hover:bg-slate-800/5 hover:border-slate-800/5 shadow-none hover:shadow-none outline-none group flex items-center gap-1" data-shape="default" data-width="default">Versions <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-3.5 w-3.5 stroke-2 group-data-[open=true]:rotate-180">
    <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg></button>
`
      }}
    />
  );
}
