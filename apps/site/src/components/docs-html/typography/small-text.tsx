

export default function SmallText() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<small class="font-sans text-sm text-current antialiased">Material Tailwind is an easy to use components library for Tailwind CSS and Material Design. It provides a simple way to customize your components, you can change the colors, fonts, breakpoints and everything you need.</small>
`
      }}
    />
  );
}
