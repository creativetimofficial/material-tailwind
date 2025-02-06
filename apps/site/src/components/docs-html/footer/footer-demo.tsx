
export default function FooterDemo() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<footer class="flex w-full flex-row flex-wrap items-center justify-center gap-x-12 gap-y-3 border-t border-slate-200 py-4 text-center md:justify-between">
  <p class="font-sans antialiased text-base text-current">© 2025 Material Tailwind</p>
  <ul class="flex flex-wrap items-center gap-x-6 gap-y-2">
    <li><a href="#" class="font-sans antialiased text-base text-current hover:text-primary">About Us</a></li>
    <li><a href="#" class="font-sans antialiased text-base text-current hover:text-primary">License</a></li>
    <li><a href="#" class="font-sans antialiased text-base text-current hover:text-primary">Contribute</a></li>
    <li><a href="#" class="font-sans antialiased text-base text-current hover:text-primary">Contact Us</a></li>
  </ul>
</footer>
`
      }}
    />
  );
}
