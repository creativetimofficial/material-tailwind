import { Breadcrumb } from "@material-tailwind/react";
import { ArrowRight } from "iconoir-react";

export function BreadcrumbCustomStyles() {
  return (
    <Breadcrumb className="rounded-full bg-primary p-1">
      <Breadcrumb.Link className="rounded-full bg-secondary px-3 py-1" href="#">
        Docs
      </Breadcrumb.Link>
      <Breadcrumb.Separator className="text-white opacity-100">
        <ArrowRight className="h-4 w-4" strokeWidth={2} />
      </Breadcrumb.Separator>
      <Breadcrumb.Link href="#" className="rounded-full bg-secondary px-3 py-1">
        Components
      </Breadcrumb.Link>
      <Breadcrumb.Separator className="text-white opacity-100">
        <ArrowRight className="h-4 w-4" strokeWidth={2} />
      </Breadcrumb.Separator>
      <Breadcrumb.Link href="#" className="rounded-full bg-secondary px-3 py-1">
        Breadcrumb
      </Breadcrumb.Link>
    </Breadcrumb>
  );
}
