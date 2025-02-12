

export default function AvatarStack() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex items-center -space-x-4">
  <img class="inline-block h-11 w-11 rounded-full border-2 border-slate-200 object-cover object-center hover:z-10 focus:z-10" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg" alt="user 1" />
  <img class="inline-block h-11 w-11 rounded-full border-2 border-slate-200 object-cover object-center hover:z-10 focus:z-10" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg" alt="user 2" />
  <img class="inline-block h-11 w-11 rounded-full border-2 border-slate-200 object-cover object-center hover:z-10 focus:z-10" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg" alt="user 3" />
  <img class="inline-block h-11 w-11 rounded-full border-2 border-slate-200 object-cover object-center hover:z-10 focus:z-10" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg" alt="user 4" />
  <img class="inline-block h-11 w-11 rounded-full border-2 border-slate-200 object-cover object-center hover:z-10 focus:z-10" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg" alt="user 5" />
</div>
`
      }}
    />
  );
}
