export interface SpeedDialContentStyleTypes {
  styles?: Record<string, string>;
}

export const speedDialContent: SpeedDialContentStyleTypes = {
  styles: {
    padding: "p-0.5",
    width: "w-max",
    display: "flex",
    flexDirection: "flex-col",
    alignItems: "items-center",
    gap: "gap-1",
  },
};

export default speedDialContent;
