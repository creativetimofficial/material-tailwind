
export default function FooterWithLogo() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<footer class="w-full">
  <div class="flex w-full flex-row flex-wrap items-center justify-center gap-x-12 gap-y-3 text-center md:justify-between">
    <img src="/logo.png" alt="brand" class="w-8" />
    <ul class="flex flex-wrap items-center gap-x-6 gap-y-2">
      <li>
        <a href="#" class="font-sans antialiased text-base text-current hover:text-slate-800">About Us</a>
      </li>
      <li>
        <a href="#" class="font-sans antialiased text-base text-current hover:text-slate-800">License</a>
      </li>
      <li>
        <a href="#" class="font-sans antialiased text-base text-current hover:text-slate-800">Contribute</a>
      </li>
      <li>
        <a href="#" class="font-sans antialiased text-base text-current hover:text-slate-800">Contact Us</a>
      </li>
    </ul>
  </div>
  <hr class="my-4 border-slate-200" />
  <p class="font-sans antialiased text-base text-current text-center">
    © 2025 Material Tailwind
  </p>
</footer>`
      }}
    />
  );
}
