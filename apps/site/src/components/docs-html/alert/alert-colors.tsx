export function AlertColors() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<div class="w-full space-y-2">
  <div
    role="alert"
    class="relative flex items-start w-full p-2 border rounded-md border-primary bg-primary text-primary-foreground"
  >
    <div class="m-1.5 w-full font-sans text-base leading-none">
      A simple alert for showing message, with color="primary"
    </div>
  </div>
  <div
    role="alert"
    class="relative flex items-start w-full p-2 border rounded-md border-secondary bg-secondary text-secondary-foreground"
  >
    <div class="m-1.5 w-full font-sans text-base leading-none">
      A simple alert for showing message, with color="secondary"
    </div>
  </div>
  <div
    role="alert"
    class="relative flex items-start w-full p-2 border rounded-md border-info bg-info text-info-foreground"
  >
    <div class="m-1.5 w-full font-sans text-base leading-none">
      A simple alert for showing message, with color="info"
    </div>
  </div>
  <div
    role="alert"
    class="relative flex items-start w-full p-2 border rounded-md border-success bg-success text-success-foreground"
  >
    <div class="m-1.5 w-full font-sans text-base leading-none">
      A simple alert for showing message, with color="success"
    </div>
  </div>
  <div
    role="alert"
    class="relative flex items-start w-full p-2 border rounded-md border-warning bg-warning text-warning-foreground"
  >
    <div class="m-1.5 w-full font-sans text-base leading-none">
      A simple alert for showing message, with color="warning"
    </div>
  </div>
  <div
    role="alert"
    class="relative flex items-start w-full p-2 border rounded-md border-error bg-error text-error-foreground"
  >
    <div class="m-1.5 w-full font-sans text-base leading-none">
      A simple alert for showing message, with color="error"
    </div>
  </div>
</div>
    `,
      }}
    />
  );
}
