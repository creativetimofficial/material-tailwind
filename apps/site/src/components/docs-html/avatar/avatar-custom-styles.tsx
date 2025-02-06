

export default function AvatarCustomStyles() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg" alt="avatar" class="inline-block h-14 w-14 rounded-full border border-green-500 object-cover object-center ring-4 ring-green-500/20" />
`
      }}
    />
  );
}
