

export default function AvatarCustomStyles() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<img src="https://dub.sh/TdSBP0D" alt="avatar" class="inline-block h-14 w-14 rounded-full border border-green-500 object-cover object-center ring-4 ring-green-500/20" />
`
      }}
    />
  );
}
