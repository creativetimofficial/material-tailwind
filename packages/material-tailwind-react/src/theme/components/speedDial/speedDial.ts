// types
import type { placement, offset, dismiss, animate } from "../../../types/components/speedDial";

export interface SpeedDialStyleTypes {
  defaultProps?: {
    offset?: offset;
    dismiss?: dismiss;
    placement?: placement;
    animate?: animate;
  };
}

export const speedDial: SpeedDialStyleTypes = {
  defaultProps: {
    offset: 5,
    placement: "top",
    dismiss: undefined,
    animate: {
      unmount: {},
      mount: {},
    },
  },
};

export default speedDial;
