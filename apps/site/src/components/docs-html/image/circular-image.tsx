

export default function CircularImage() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/mt-demo.jpg" alt="nature-image" class="h-96 w-96 rounded-full object-cover object-center" />
`
      }}
    />
  );
}
