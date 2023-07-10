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

export const Alert: ParentComponent<AlertProps & JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  // 1. init
  const theme = useTheme();

  const rippleEffect = new Ripple();

  // 2. set default props
  const mergedProps = mergeProps(() => theme().alert.defaultProps, props);
  const [alertProps, rest] = splitProps(mergedProps, [
    "variant",
    "color",
    "show",
    "animate",
    "class",
    "dismissible",
    "icon",
  ]);
  // 3. set styles

  const styles = createMemo(() => {
    const { valid, styles } = theme().alert;
    const { base, variants } = styles;

    const variant = findMatch(valid.variants, alertProps.variant, "filled");
    const color = findMatch(valid.colors, alertProps.color, "blue");

    const alertVariant = objectsToString(variants[variant][color]);
    const classes = twMerge(classnames(objectsToString(base), alertVariant), alertProps.class);
    return { classes };
  });

  // 7. return
  return (
    <Presence exitBeforeEnter>
      <Show when={alertProps.show}>
        <Motion.div
          {...rest}
          role="alert"
          class={styles().classes}
          initial={alertProps.animate.unmount}
          exit={alertProps.animate.unmount}
          animate={alertProps.animate.mount}
          transition={{ duration: 0.5 }}
        >
          <Show when={!!alertProps.icon}>
            {/* @ts-ignore   */}
            <div class="absolute top-4 left-4">{alertProps.icon}</div>
          </Show>
          <div
            classList={{
              "ml-8": !!alertProps.icon,
              "mr-12": true,
            }}
          >
            {props.children}
          </div>
          <Show when={alertProps.dismissible}>
            <div class="absolute transition-all rounded-lg top-3 right-3 w-max hover:bg-white hover:bg-opacity-20">
              <div
                role="button"
                onClick={() => alertProps?.dismissible?.onClose()}
                onMouseDown={(e) =>
                  !alertProps?.dismissible?.action && rippleEffect.create(e, "light")
                }
                classList={{
                  "w-max": true,
                  "p-1 rounded-lg": !alertProps?.dismissible?.action,
                }}
              >
                <Show
                  when={!!alertProps?.dismissible?.action}
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
                  <>{alertProps?.dismissible?.action}</>
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
