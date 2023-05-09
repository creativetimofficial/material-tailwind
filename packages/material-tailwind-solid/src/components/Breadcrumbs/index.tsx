// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { separator, fullWidth } from "../../types/components/breadcrumbs";

import { For, Show, children, createMemo, mergeProps, splitProps } from "solid-js";
import type { ParentComponent, JSX } from "solid-js";

export interface BreadcrumbsProps {
  separator?: separator;
  fullWidth?: fullWidth;
}

export const Breadcrumbs: ParentComponent<
  JSX.OlHTMLAttributes<HTMLOListElement> & BreadcrumbsProps
> = (props) => {
  // ({ separator, fullWidth, className, children, ...rest }, ref) => {
  // 1. init
  const theme = useTheme();
  const [breadcrumbProps, rest] = splitProps(props, ["separator", "fullWidth", "class"]);
  const defaultProps = mergeProps(() => theme().breadcrumbs.defaultProps, breadcrumbProps);
  // const {
  //   defaultProps,
  //   styles: { base },
  // } = breadcrumbs;
  // 2. set default props
  // separator = separator ?? defaultProps.separator;
  // fullWidth = fullWidth ?? defaultProps.fullWidth;
  // className = className ?? defaultProps.className;

  // 3. set styles
  const breadcrumbsRootClasses = createMemo(() =>
    classnames(objectsToString(theme().breadcrumbs.styles.base.root.initial), {
      [objectsToString(theme().breadcrumbs.styles.base.root.fullWidth)]: defaultProps.fullWidth,
    }),
  );
  const breadcrumbsListClasses = createMemo(() =>
    twMerge(classnames(objectsToString(theme().breadcrumbs.styles.base.list)), defaultProps.class),
  );
  const breadcrumbsItemClasses = createMemo(() =>
    classnames(objectsToString(theme().breadcrumbs.styles.base.item.initial)),
  );
  const breadcrumbsSeparatorClasses = createMemo(() =>
    classnames(objectsToString(theme().breadcrumbs.styles.base.separator)),
  );

  const listItems = children(() => props.children);
  // 4. return
  return (
    <nav aria-label="breadcrumb" class={breadcrumbsRootClasses()}>
      <ol {...rest} class={breadcrumbsListClasses()}>
        <For each={listItems.toArray()}>
          {(item, index) => {
            return (
              <li
                class={classnames(breadcrumbsItemClasses(), {
                  [objectsToString(theme().breadcrumbs.styles.base.item.disabled)]:
                    //@ts-ignore --> disabled does not exist on type string, number,...
                    item?.disabled,
                })}
              >
                {item}
                <Show when={index() !== listItems.toArray().length - 1}>
                  <span class={breadcrumbsSeparatorClasses()}>{defaultProps.separator}</span>
                </Show>
              </li>
            );
          }}
        </For>
      </ol>
    </nav>
  );
};

// Breadcrumbs.propTypes = {
//   separator: propTypesSeparator,
//   fullWidth: propTypesFullWidth,
//   className: propTypesClassName,
//   children: propTypesChildren,
// };

// Breadcrumbs.displayName = "MaterialTailwind.Breacrumbs";

export default Breadcrumbs;
