import { Breadcrumb } from "@material-tailwind/react/dist";
import { HomeAlt } from "iconoir-react";

export function BreadcrumbWithIcon() {
  return (
    <Breadcrumb>
      <Breadcrumb.Link href="/">
        <HomeAlt className="w-5 h-5" />
      </Breadcrumb.Link>
      <Breadcrumb.Separator />
      <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
      <Breadcrumb.Separator />
      <Breadcrumb.Link href="#">Breadcrumb</Breadcrumb.Link>
    </Breadcrumb>
  );
}
