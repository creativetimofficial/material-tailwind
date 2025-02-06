

export default function ChipWithAvatar() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="relative inline-flex select-none items-center rounded-full border border-slate-800 bg-slate-800 p-[3px] font-sans text-[13px] font-medium leading-none text-slate-50"><span class="grid h-4 w-4 shrink-0 translate-x-0.5 place-items-center rounded-full"><img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg" alt="profile-picture" class="inline-block h-full w-full rounded-full object-cover object-center"/></span><span class="font-sans mx-2 my-[3.5px] leading-none text-current">Alex Andrew</span></div>
`
      }}
    />
  );
}
