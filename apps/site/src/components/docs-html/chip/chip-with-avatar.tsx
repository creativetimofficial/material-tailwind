
export default function ChipWithAvatar() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div data-open="true" data-shape="pill" class="relative inline-flex w-max items-center border select-none font-sans font-medium rounded-md data-[shape=pill]:rounded-full text-sm p-0.5 shadow-sm bg-slate-800 border-slate-800 text-slate-50"><span class="grid place-items-center shrink-0 rounded-full translate-x-1 w-4 h-4"><img src="https://dub.sh/TdSBP0D" alt="profile-picture" class="inline-block object-cover object-center data-[shape=square]:rounded-none data-[shape=circular]:rounded-full data-[shape=rounded]:rounded-[current] rounded-sm h-full w-full" data-shape="circular"/></span><span class="font-sans text-current leading-none my-1 mx-2.5">Alex Andrew</span></div>
`
      }}
    />
  );
}
