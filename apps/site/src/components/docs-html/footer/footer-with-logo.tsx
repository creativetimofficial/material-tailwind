

export default function FooterWithLogo() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<footer class="w-full">
  <div class="flex w-full flex-row flex-wrap items-center justify-center gap-x-12 gap-y-3 text-center md:justify-between"><img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/logo.png" alt="brand" class="w-8" />
    <ul class="flex flex-wrap items-center gap-x-6 gap-y-2">
      <li><a href="#" class="font-sans text-base text-current antialiased hover:text-primary">About Us</a></li>
      <li><a href="#" class="font-sans text-base text-current antialiased hover:text-primary">License</a></li>
      <li><a href="#" class="font-sans text-base text-current antialiased hover:text-primary">Contribute</a></li>
      <li><a href="#" class="font-sans text-base text-current antialiased hover:text-primary">Contact Us</a></li>
    </ul>
  </div>
  <hr class="my-4 border-slate-200" />
  <p class="text-center font-sans text-base text-current antialiased">© 2024 Material Tailwind</p>
</footer>
`
      }}
    />
  );
}
