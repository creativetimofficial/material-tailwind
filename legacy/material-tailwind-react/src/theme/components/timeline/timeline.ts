// types
import type { className } from "../../../types/components/timeline";

export interface TimelineStyleTypes {
  styles?: {
    base?: object;
  };
}

export const timeline: TimelineStyleTypes = {
  styles: {
    base: {
      display: "w-full",
      position: "flex",
      flexDirection: "flex-col",
    },
  },
};

export default timeline;
