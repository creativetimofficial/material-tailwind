import { Breadcrumb } from "@material-tailwind/react";

export default function BreadcrumbCustomSeparator() {
  return (
    <Breadcrumb>
      <Breadcrumb.Link href="/docs">Docs</Breadcrumb.Link>
      <Breadcrumb.Separator>-</Breadcrumb.Separator>
      <Breadcrumb.Link href="/docs/components">Components</Breadcrumb.Link>
      <Breadcrumb.Separator>-</Breadcrumb.Separator>
      <Breadcrumb.Link href="/docs/components/breadcrumb">
        Breadcrumb
      </Breadcrumb.Link>
    </Breadcrumb>
  );
}
