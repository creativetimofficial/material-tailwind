import { Breadcrumbs } from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export function BreadcrumbsCustomStyles() {
  return (
    <Breadcrumbs
      separator={
        <ArrowLongRightIcon className="h-4 w-4 text-white" strokeWidth={2.5} />
      }
      className="rounded-full border border-white bg-gradient-to-tr from-gray-900 to-gray-800 p-1"
    >
      <a
        href="#"
        className="rounded-full bg-white px-3 py-1 font-medium text-gray-900"
      >
        Docs
      </a>
      <a
        href="#"
        className="rounded-full bg-white px-3 py-1 font-medium text-gray-900"
      >
        Components
      </a>
      <a
        href="#"
        className="rounded-full bg-white px-3 py-1 font-medium text-gray-900"
      >
        Breadcrumbs
      </a>
    </Breadcrumbs>
  );
}
