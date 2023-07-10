// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { createMemo, mergeProps } from "solid-js";
import type { JSX, ParentComponent } from "solid-js";

export const CardBody: ParentComponent<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  // 1. init
  const theme = useTheme();

  // 2. set default props

  const mergedProps = mergeProps(() => theme().cardBody.defaultProps, props);

  // 3. set styles
  const cardBodyClasses = createMemo(() =>
    twMerge(classnames(objectsToString(theme().cardBody.styles.base)), mergedProps.class),
  );

  // 4. return
  return (
    <div {...mergedProps} class={cardBodyClasses()}>
      {props.children}
    </div>
  );
};

export default CardBody;
