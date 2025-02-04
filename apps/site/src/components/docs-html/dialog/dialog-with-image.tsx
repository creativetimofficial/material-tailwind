
export default function DialogWithImage() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<button data-open="false" class="outline-none" aria-expanded="false" aria-haspopup="dialog"><img alt="nature" src="https://dub.sh/xxo2Jek" class="h-64 w-auto rounded-lg object-cover object-center" /></button>
`
      }}
    />
  );
}
