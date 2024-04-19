import { Breadcrumb } from "@material-tailwind/react";
import { HomeSimple } from "iconoir-react";

export function BreadcrumbWithIcon() {
  return (
    <Breadcrumb>
      <Breadcrumb.Link href="/">
        <HomeSimple className="h-[18px] w-[18px]" />
      </Breadcrumb.Link>
      <Breadcrumb.Separator />
      <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
      <Breadcrumb.Separator />
      <Breadcrumb.Link href="#">Breadcrumb</Breadcrumb.Link>
    </Breadcrumb>
  );
}
