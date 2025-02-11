import { Breadcrumb } from "@material-tailwind/react";

export default function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <Breadcrumb.Link href="/docs">Docs</Breadcrumb.Link>
      <Breadcrumb.Separator />
      <Breadcrumb.Link href="/docs/components">Components</Breadcrumb.Link>
      <Breadcrumb.Separator />
      <Breadcrumb.Link href="/docs/components/breadcrumb">
        Breadcrumb
      </Breadcrumb.Link>
    </Breadcrumb>
  );
}
