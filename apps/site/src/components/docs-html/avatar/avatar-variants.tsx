

export default function AvatarVariants() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="item-center flex gap-2"><img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg" alt="profile-picture" class="inline-block h-11 w-11 rounded-full object-cover object-center" /><img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg" alt="profile-picture" class="inline-block h-11 w-11 rounded-md object-cover object-center" /><img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg" alt="profile-picture" class="inline-block h-11 w-11 rounded-none object-cover object-center" /></div>
`
      }}
    />
  );
}
