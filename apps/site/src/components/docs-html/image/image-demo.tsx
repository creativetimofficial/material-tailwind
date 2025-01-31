

export default function ImageDemo() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<img src="https://dub.sh/Y0NxRWv" alt="nature-image" class="h-96 w-full object-cover object-center" />
`
      }}
    />
  );
}
