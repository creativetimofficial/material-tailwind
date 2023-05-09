import type { JSX, ParentComponent } from "solid-js";
import { Show, createMemo, mergeProps, splitProps } from "solid-js";
import { Motion, Presence } from "@motionone/solid";

// utils
import classnames from "classnames";
import Ripple from "material-ripple-effects";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type {
  animate,
  color,
  dismissible,
  icon,
  show,
  variant,
} from "../../types/components/alert";

export interface AlertProps {
  // PropTypes
  variant?: variant;
  color?: color;
  icon?: icon;
  show?: show;
  dismissible?: dismissible;
  animate?: animate;
}
// Omit<MotionProps, "animate"> {

export const Alert: ParentComponent<AlertProps & JSX.HTMLAttributes<HTMLDivElement>> = (p) => {
  // ({ variant, color, icon, show, dismissible, animate, className, children, ...rest }, ref) => {
  // 1. init
  const theme = useTheme();
  const [alertProps, props] = splitProps(p, [
    "variant",
    "color",
    "show",
    "animate",
    "class",
    "dismissible",
    "icon",
  ]);
  // const { defaultProps, valid, styles } = theme().alert;
  // const { base, variants } = styles;

  const rippleEffect = new Ripple();

  // 2. set default props
  const defaultProps = mergeProps(() => theme().alert.defaultProps, alertProps);

  // 3. set styles

  const alertVariant = createMemo(() => {
    const variants = theme().alert.styles.variants;
    const variant = findMatch(theme().alert.valid.variants, defaultProps.variant, "filled");
    const color = findMatch(theme().alert.valid.colors, defaultProps.color, "blue");

    return objectsToString(variants[variant][color]);
  });
  const classes = createMemo(() =>
    twMerge(
      classnames(objectsToString(theme().alert.styles.base), alertVariant()),
      defaultProps.class,
    ),
  );

  // 7. return
  return (
    <Presence exitBeforeEnter>
      <Show when={defaultProps.show}>
        <Motion.div
          {...props}
          role="alert"
          class={classes()}
          initial={defaultProps.animate.unmount}
          exit={defaultProps.animate.unmount}
          animate={defaultProps.animate.mount}
          transition={{ duration: 0.5 }}
        >
          <Show when={!!defaultProps.icon}>
            {/* @ts-ignore   */}
            <div class="absolute top-4 left-4">{defaultProps.icon}</div>
          </Show>
          <div
            classList={{
              "ml-8": !!defaultProps.icon,
              "mr-12": true,
            }}
          >
            {props.children}
          </div>
          <Show when={defaultProps.dismissible}>
            <div class="absolute transition-all rounded-lg top-3 right-3 w-max hover:bg-white hover:bg-opacity-20">
              <div
                role="button"
                onClick={() => defaultProps?.dismissible?.onClose()}
                onMouseDown={(e) =>
                  !defaultProps?.dismissible?.action && rippleEffect.create(e, "light")
                }
                classList={{
                  "w-max": true,
                  "p-1 rounded-lg": !defaultProps?.dismissible?.action,
                }}
              >
                <Show
                  when={!!defaultProps?.dismissible?.action}
                  fallback={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width={2}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  }
                >
                  {/* @ts-ignore */}
                  {defaultProps?.dismissible?.action}
                </Show>
              </div>
            </div>
          </Show>
        </Motion.div>
      </Show>
    </Presence>
  );
};

export default Alert;
