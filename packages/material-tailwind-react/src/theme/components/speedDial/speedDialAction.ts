export interface SpeedDialActionStyleTypes {
  styles?: object;
}

export const speedDialAction: SpeedDialActionStyleTypes = {
  styles: {
    display: "flex",
    flexDirection: "flex-col",
    alignItems: "items-center",
    justifyContent: "justify-center",
    gap: "gap-1",
    padding: "p-1",
    margin: "m-0.5",
    borderWidth: "border",
    minWidth: "min-w-[48px]",
    fontFamily: "font-normal",
    minHeight: "min-h-[48px]",
    backgroundColor: "bg-white",
    borderRadius: "rounded-full",
    borderColor: "border-blue-gray-50",
    scale: "hover:scale-110 focus:scale-110 active:scale-100",
    transition: "transition-transform duration-300 ease-in-out",
  },
};

export default speedDialAction;
