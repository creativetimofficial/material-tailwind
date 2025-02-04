
export default function ProfileInfoPopover() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="min-h-72"><button data-open="true" aria-expanded="true" aria-haspopup="dialog" aria-controls=":R0:" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group" data-shape="default" data-width="default">Profile Info</button></div>
`
      }}
    />
  );
}
