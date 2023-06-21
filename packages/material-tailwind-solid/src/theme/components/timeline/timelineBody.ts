export interface TimelineBodyStyleTypes {
  styles: {
    base: Record<string, string>;
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
