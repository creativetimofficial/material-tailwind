

export default function AvatarDemo() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg" alt="profile-picture" class="inline-block h-11 w-11 rounded-full object-cover object-center" />
`
      }}
    />
  );
}
