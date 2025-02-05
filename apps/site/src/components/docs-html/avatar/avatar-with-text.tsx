

export default function AvatarWithText() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex flex-col gap-6">
  <div class="flex items-center gap-4"><img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg" alt="avatar" class="inline-block h-11 w-11 rounded-full object-cover object-center" />
    <div>
      <p class="font-sans text-base text-current antialiased">Tania Andrew</p><small class="font-sans text-sm text-slate-600 antialiased">Web Developer</small>
    </div>
  </div>
  <div class="flex items-center gap-4"><img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg" alt="avatar" class="inline-block h-11 w-11 rounded-md object-cover object-center" />
    <div>
      <p class="font-sans text-base text-current antialiased">Tania Andrew</p><small class="font-sans text-sm text-slate-600 antialiased">Web Developer</small>
    </div>
  </div>
  <div class="flex items-center gap-4"><img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg" alt="avatar" class="inline-block h-11 w-11 rounded-none object-cover object-center" />
    <div>
      <p class="font-sans text-base text-current antialiased">Tania Andrew</p><small class="font-sans text-sm text-slate-600 antialiased">Web Developer</small>
    </div>
  </div>
</div>
`
      }}
    />
  );
}
