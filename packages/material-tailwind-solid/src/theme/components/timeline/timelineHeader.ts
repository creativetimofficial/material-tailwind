export interface TimelineHeaderStyleTypes {
  styles: {
    base: Record<string, string>;
  };
}

export const timelineHeader: TimelineHeaderStyleTypes = {
  styles: {
    base: {
      display: "flex",
      alignItems: "items-center",
      gap: "gap-4",
    },
  },
};

export default timelineHeader;
