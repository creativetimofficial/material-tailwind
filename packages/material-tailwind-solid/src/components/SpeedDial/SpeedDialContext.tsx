import type { animate, handler, open } from "../../types/components/speedDial";
import type { UseFloatingResult } from "solid-floating-ui";
import type { Accessor, Setter } from "solid-js";
import { createContext, useContext } from "solid-js";

interface ISpeedDialContext {
  open: Accessor<open>;
  handler: handler;
  position: UseFloatingResult;
  animation: animate;
  rootRef: Accessor<HTMLDivElement | undefined>;
  setFloating: Setter<HTMLDivElement | undefined>;
  setReference: Setter<HTMLDivElement | undefined>;
}
// context
export const SpeedDialContext = createContext<Accessor<ISpeedDialContext | null>>(() => null);

export function useSpeedDial() {
  const context = useContext(SpeedDialContext);
  if (!context) {
    throw new Error("useSpeedDial must be used within a <SpeedDial />.");
  }
  return context;
}
