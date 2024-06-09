export function ImageWithCaption() {
  return (
    <figure>
      <img
        src="https://dub.sh/Y0NxRWv"
        alt="nature-image"
        className="h-96 w-full rounded-lg object-cover object-center"
      />
      <caption className="mt-2 block text-center font-sans text-sm text-inherit antialiased">
        Image Caption
      </caption>
    </figure>
  );
}
