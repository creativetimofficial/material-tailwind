

export default function ImageWithShadow() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<img src="https://dub.sh/Y0NxRWv" alt="nature-image" class="h-96 w-full rounded-lg object-cover object-center shadow-lg shadow-black/25" />
`
      }}
    />
  );
}
