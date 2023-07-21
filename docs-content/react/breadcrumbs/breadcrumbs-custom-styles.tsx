import { Breadcrumbs } from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export function BreadcrumbsCustomStyles() {
  return (
    <Breadcrumbs
      separator={
        <ArrowLongRightIcon className="h-4 w-4 text-white" strokeWidth={2.5} />
      }
      className="rounded-full border border-white bg-gradient-to-tr from-blue-400 to-blue-600 p-1"
    >
      <a
        href="#"
        className="rounded-full bg-white px-3 py-1 font-medium text-blue-gray-700"
      >
        Docs
      </a>
      <a
        href="#"
        className="rounded-full bg-white px-3 py-1 font-medium text-blue-gray-700"
      >
        Components
      </a>
      <a
        href="#"
        className="rounded-full bg-white px-3 py-1 font-medium text-blue-gray-700"
      >
        Breadcrumbs
      </a>
    </Breadcrumbs>
  );
}
