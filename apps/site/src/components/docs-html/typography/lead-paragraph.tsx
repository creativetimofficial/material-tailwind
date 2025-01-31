

export default function LeadParagraph() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<p class="font-sans text-base text-current antialiased md:text-lg">Material Tailwind is an easy to use components library for Tailwind CSS and Material Design. It provides a simple way to customize your components, you can change the colors, fonts, breakpoints and everything you need.</p>
`
      }}
    />
  );
}
