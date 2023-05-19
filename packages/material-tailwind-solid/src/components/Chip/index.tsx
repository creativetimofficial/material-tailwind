// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import { Motion, Presence } from "@motionone/solid";
import type { JSX, ParentComponent } from "solid-js";
import { Show, createMemo, mergeProps } from "solid-js";
import type {
  action,
  animate,
  color,
  icon,
  onClose,
  open,
  size,
  value,
  variant,
} from "../../types/components/chip";
import IconButton from "../IconButton";

export interface ChipProps {
  variant?: variant;
  size?: size;
  color?: color;
  icon?: icon;
  open?: open;
  onClose?: onClose;
  action?: action;
  animate?: animate;
  class?: string;
  value: value;
}

export const Chip: ParentComponent<JSX.HTMLAttributes<HTMLDivElement> & ChipProps> = (props) => {
  // 1. init
  const theme = useTheme();
  const mainAnimation = {
    unmount: {
      opacity: 0,
    },
    mount: {
      opacity: 1,
    },
  };
  const mergedProps = mergeProps(
    () => theme().chip.defaultProps,
    { animation: mainAnimation },
    props,
  );
  const cProps = createMemo(() => {
    const { valid, styles } = theme().chip;
    const { base, variants, sizes } = styles;
    // eslint-disable-next-line solid/reactivity
    const { variant, size, color, icon, open, onClose, action, value, ...rest } = mergedProps;

    // 3. set styles
    const chipBase = objectsToString(base.chip);
    const chipAction = objectsToString(base.action);
    const chipIcon = objectsToString(base.icon);
    const chipVariant = objectsToString(
      variants[findMatch(valid.variants, variant, "filled")][
        findMatch(valid.colors, color, "blue")
      ],
    );

    const chipSize = objectsToString(sizes[findMatch(valid.sizes, size, "md")]["chip"]);
    const actionSize = objectsToString(sizes[findMatch(valid.sizes, size, "md")]["action"]);
    const iconSize = objectsToString(sizes[findMatch(valid.sizes, size, "md")]["icon"]);
    const classes = twMerge(classnames(chipBase, chipVariant, chipSize), mergedProps.class);
    const actionClasses = classnames(chipAction, actionSize);
    const iconClasses = classnames(chipIcon, iconSize);
    const contentClasses = classnames({
      "ml-4": icon && size === "sm",
      "ml-[18px]": icon && size === "md",
      "ml-5": icon && size === "lg",
      "mr-5": onClose,
    });

    // 4. set animation

    return { classes, actionClasses, iconClasses, contentClasses, rest, open, action, value };
  });

  // 5. icon template

  // 6. Create an instance of AnimatePresence because of the types issue with the children

  // 7. return
  return (
    <Presence>
      <Show when={mergedProps.open}>
        <Motion.div
          {...cProps().rest}
          class={cProps().classes}
          initial="unmount"
          exit="unmount"
          animate={mergedProps.open ? "mount" : "unmount"}
          //@ts-ignore
          variants={mergedProps.animate}
        >
          <Show when={!!mergedProps.icon}>
            <div class={cProps().iconClasses}>{mergedProps.icon}</div>
          </Show>
          <span class={cProps().contentClasses}>{mergedProps.value}</span>

          <Show when={!!mergedProps.onClose && !mergedProps.action}>
            <IconButton
              onClick={mergedProps.onClose}
              size="sm"
              variant="text"
              color={
                mergedProps.variant === "outlined" || mergedProps.variant === "ghost"
                  ? mergedProps.color
                  : "white"
              }
              class={cProps().actionClasses}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class={classnames({
                  "h-3.5 w-3.5": mergedProps.size === "sm",
                  "h-4 w-4": mergedProps.size === "md",
                  "h-5 w-5": mergedProps.size === "lg",
                })}
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </IconButton>
          </Show>
          <Show when={!!mergedProps.action}>{mergedProps.action}</Show>
        </Motion.div>
      </Show>
    </Presence>
  );
};

export default Chip;
