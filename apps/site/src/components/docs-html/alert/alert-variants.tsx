export default function AlertVariants() {
  return (
    <div className="w-full"
      dangerouslySetInnerHTML={{
        __html: `
<div class="w-full space-y-2">
  <div
    role="alert"
    class="relative flex items-start w-full p-2 border border-transparent rounded-md bg-primary/10 text-primary"
  >
    <div class="m-1.5 w-full font-sans text-base leading-none">
      A simple alert for showing message, with variant="ghost"
    </div>
  </div>
  <div
    role="alert"
    class="relative flex items-start w-full p-2 bg-transparent border rounded-md border-primary text-primary"
  >
    <div class="m-1.5 w-full font-sans text-base leading-none">
      A simple alert for showing message. with variant="outline"
    </div>
  </div>
  <div
    role="alert"
    class="relative flex items-start w-full p-2 border rounded-md border-primary bg-primary text-primary-foreground"
  >
    <div class="m-1.5 w-full font-sans text-base leading-none">
      A simple alert for showing message. with variant="solid"
    </div>
  </div>
  <div
    role="alert"
    class="relative flex items-start w-full p-2 border rounded-md border-primary bg-gradient-to-tr from-primary-dark to-primary-light text-primary-foreground"
  >
    <div class="m-1.5 w-full font-sans text-base leading-none">
      A simple alert for showing message. with variant="gradient"
    </div>
  </div>
</div>
    `,
      }}
    />
  );
}
