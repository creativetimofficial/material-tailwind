

export default function VideoDemo() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<video class="h-full w-full rounded-lg" controls="">
  <source src="https://dub.sh/H1glk5b" type="video/mp4" />Your browser does not support the video tag.
</video>
`
      }}
    />
  );
}
