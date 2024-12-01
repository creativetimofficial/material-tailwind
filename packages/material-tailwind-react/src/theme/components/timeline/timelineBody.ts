export interface TimelineBodyStyleTypes {
  styles?: {
    base?: object;
  };
}

export const timelineBody: TimelineBodyStyleTypes = {
  styles: {
    base: {
      display: "flex",
      gap: "gap-4",
    },
  },
};

export default timelineBody;
