

export default function VideoMuted() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<video class="h-full w-full rounded-lg" controls="" muted="">
  <source src="https://dub.sh/H1glk5b" type="video/mp4" />Your browser does not support the video tag.
</video>
`
      }}
    />
  );
}
