import { Breadcrumb } from "@material-tailwind/react/dist";
import { ArrowRight } from "iconoir-react";

export function BreadcrumbCustomStyles() {
  return (
    <Breadcrumb className="p-1 rounded-full bg-primary">
      <Breadcrumb.Link className="px-3 py-1 rounded-full bg-secondary" href="#">
        Docs
      </Breadcrumb.Link>
      <Breadcrumb.Separator className="text-white opacity-100">
        <ArrowRight className="w-4 h-4" strokeWidth={2} />
      </Breadcrumb.Separator>
      <Breadcrumb.Link href="#" className="px-3 py-1 rounded-full bg-secondary">
        Components
      </Breadcrumb.Link>
      <Breadcrumb.Separator className="text-white opacity-100">
        <ArrowRight className="w-4 h-4" strokeWidth={2} />
      </Breadcrumb.Separator>
      <Breadcrumb.Link href="#" className="px-3 py-1 rounded-full bg-secondary">
        Breadcrumb
      </Breadcrumb.Link>
    </Breadcrumb>
  );
}
