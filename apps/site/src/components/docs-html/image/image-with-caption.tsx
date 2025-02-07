

export default function ImageWithCaption() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<figure><img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/mt-demo.jpg" alt="nature-image" class="h-96 w-full rounded-lg object-cover object-center" />
  <caption class="mt-2 block text-center font-sans text-sm text-current antialiased">Image Caption</caption>
</figure>
`
      }}
    />
  );
}
