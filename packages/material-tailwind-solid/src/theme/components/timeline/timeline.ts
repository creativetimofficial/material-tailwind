// types

export interface TimelineStyleTypes {
  styles: {
    base: Record<string, string>;
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
