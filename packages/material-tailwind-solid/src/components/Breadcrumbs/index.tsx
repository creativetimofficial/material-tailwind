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
  // 1. init
  const theme = useTheme();
  const mergedProps = mergeProps(() => theme().breadcrumbs.defaultProps, props);
  const [breadcrumbProps, rest] = splitProps(mergedProps, ["separator", "fullWidth", "class"]);

  // 3. set styles
  const styles = createMemo(() => {
    const breadcrumbs = theme().breadcrumbs;
    const {
      styles: { base },
    } = breadcrumbs;

    const breadcrumbsRootClasses = classnames(objectsToString(base.root.initial), {
      [objectsToString(base.root.fullWidth)]: breadcrumbProps.fullWidth,
    });

    const breadcrumbsListClasses = twMerge(
      classnames(objectsToString(base.list)),
      breadcrumbProps.class,
    );

    const breadcrumbsItemClasses = classnames(objectsToString(base.item.initial));

    const breadcrumbsSeparatorClasses = classnames(objectsToString(base.separator));

    return {
      breadcrumbsRootClasses,
      breadcrumbsListClasses,
      breadcrumbsItemClasses,
      breadcrumbsSeparatorClasses,
    };
  });

  const listItems = children(() => props.children);
  // 4. return
  return (
    <nav aria-label="breadcrumb" class={styles().breadcrumbsRootClasses}>
      <ol {...rest} class={styles().breadcrumbsListClasses}>
        <For each={listItems.toArray()}>
          {(item, index) => {
            return (
              <li
                class={classnames(styles().breadcrumbsItemClasses, {
                  [objectsToString(theme().breadcrumbs.styles.base.item.disabled)]:
                    //@ts-ignore --> disabled does not exist on type string, number,...
                    item?.disabled,
                })}
              >
                {item}
                <Show when={index() !== listItems.toArray().length - 1}>
                  <span class={styles().breadcrumbsSeparatorClasses}>
                    {breadcrumbProps.separator}
                  </span>
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
