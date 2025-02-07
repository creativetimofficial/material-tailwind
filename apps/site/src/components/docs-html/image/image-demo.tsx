

export default function ImageDemo() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/mt-demo.jpg" alt="nature-image" class="h-96 w-full object-cover object-center" />
`
      }}
    />
  );
}
