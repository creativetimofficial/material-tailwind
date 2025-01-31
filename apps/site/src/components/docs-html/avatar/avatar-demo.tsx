

export default function AvatarDemo() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<img src="https://dub.sh/TdSBP0D" alt="profile-picture" class="inline-block h-11 w-11 rounded-full object-cover object-center" />
`
      }}
    />
  );
}
