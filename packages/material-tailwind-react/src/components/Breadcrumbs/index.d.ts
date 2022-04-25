import { ReactNode } from "react";

interface BreadcrumbsProps {
  separator?: ReactNode;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

declare function Breadcrumb(props: BreadcrumbsProps): JSX.Element;

export { Breadcrumb, BreadcrumbsProps };
export default Breadcrumb;