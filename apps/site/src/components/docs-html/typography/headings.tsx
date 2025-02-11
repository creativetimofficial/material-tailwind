

export default function Headings() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex flex-col gap-4">
  <h1 class="font-sans text-4xl font-bold antialiased md:text-5xl lg:text-6xl">Material Tailwind (H1)</h1>
  <h2 class="font-sans text-3xl font-bold antialiased md:text-4xl lg:text-5xl">Material Tailwind (H2)</h2>
  <h3 class="font-sans text-2xl font-bold antialiased md:text-3xl lg:text-4xl">Material Tailwind (H3)</h3>
  <h4 class="font-sans text-xl font-bold antialiased md:text-2xl lg:text-3xl">Material Tailwind (H4)</h4>
  <h5 class="font-sans text-lg font-bold antialiased md:text-xl lg:text-2xl">Material Tailwind (H5)</h5>
  <h6 class="font-sans text-base font-bold antialiased md:text-lg lg:text-xl">Material Tailwind (H6)</h6>
</div>`
      }}
    />
  );
}
