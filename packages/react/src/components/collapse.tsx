import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";

// @theme
import { collapseTheme } from "@theme";

// @types
import type { BaseComponent } from "@types";

export interface CollapseProps extends BaseComponent<"div" | any> {
  as?: React.ElementType;
  open: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/collapse) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/collapse#collapse-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/collapse#collapse-theme)
 *
 * @example
 * ```tsx
 * import * as React from "react";
 * import {
 *  Collapse,
 *  Button,
 *  Card,
 *  Typography,
 *  CardBody,
 * } from "@material-tailwind/react";
 *
 * export default function CollapseDefault() {
 *   const [open, setopen] = React.useState(false);
 *
 *   const toggleOpen = () => setopen((cur) => !cur);
 *
 *   return (
 *     <>
 *       <Button onClick={toggleOpen}>Open Collapse</Button>
 *       <Collapse open={open}>
 *         <Card className="my-4 mx-auto w-8/12">
 *           <CardBody>
 *             <Typography>
 *               Use our Tailwind CSS collapse for your website. You can use if for
 *               accordion, collapsible items and much more.
 *             </Typography>
 *           </CardBody>
 *         </Card>
 *       </Collapse>
 *     </>
 *   );
 * }
 * ```
 */
export const Collapse = React.forwardRef<
  HTMLDivElement | HTMLElement,
  CollapseProps
>(({ as, open, className, children, ...rest }, ref) => {
  const Element = as ?? "div";
  const contextTheme = useTheme();
  const theme = contextTheme?.collapse ?? collapseTheme;

  const styles = twMerge(theme.baseStyle, className);

  return open ? (
    <Element {...rest} ref={ref} data-open={open} className={styles}>
      {children}
    </Element>
  ) : null;
});

Collapse.displayName = "MaterialTailwind.Collapse";

export default Collapse;
