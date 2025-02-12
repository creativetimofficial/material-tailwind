import { Breadcrumb } from "@material-tailwind/react";
import {
  Cube,
  CursorPointer,
  MultiplePages,
  NavArrowRight,
} from "iconoir-react";

export default function BreadcrumbCustomStyles() {
  return (
    <Breadcrumb className="gap-0.5">
      <Breadcrumb.Link
        href="#"
        className="rounded bg-secondary px-2 py-1 text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
      >
        <MultiplePages className="h-4 w-4" />
        Docs
      </Breadcrumb.Link>
      <Breadcrumb.Separator>
        <NavArrowRight className="h-4 w-4 stroke-2" />
      </Breadcrumb.Separator>
      <Breadcrumb.Link
        href="#"
        className="rounded bg-secondary px-2 py-1 text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
      >
        <Cube className="h-4 w-4" />
        Components
      </Breadcrumb.Link>
      <Breadcrumb.Separator>
        <NavArrowRight className="h-4 w-4 stroke-2" />
      </Breadcrumb.Separator>
      <Breadcrumb.Link
        href="#"
        className="rounded bg-primary px-2 py-1 text-primary-foreground hover:bg-primary hover:text-primary-foreground"
      >
        <CursorPointer className="h-4 w-4 rotate-90" />
        Breadcrumb
      </Breadcrumb.Link>
    </Breadcrumb>
  );
}
