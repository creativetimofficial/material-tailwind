import * as React from "react";

interface ToggleButtonProps {
  icon: React.ElementType;
  isActive?: boolean;
  children: React.ReactNode;
}

export function ToggleButton({
  icon: Icon,
  isActive,
  children,
}: ToggleButtonProps) {
  return (
    <button
      className={`group relative w-max shrink-0 cursor-pointer overflow-hidden rounded-md border p-px ${
        isActive
          ? "border-transparent bg-background"
          : "border-surface bg-surface-light transition-colors duration-300 hover:border-transparent hover:bg-transparent"
      }`}
    >
      <span
        aria-hidden="true"
        className={`content[''] absolute left-2/4 top-2/4 block w-[calc(100%*1.5)] -translate-x-2/4 -translate-y-2/4 animate-gradient-spin rounded-full bg-conic-gradient pb-[calc(100%*1.5)] ${
          isActive
            ? "opacity-100"
            : "opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        }`}
      />
      <div
        className={`relative z-10 flex h-full w-full items-center gap-2 rounded px-3 py-1.5 text-sm ${
          isActive
            ? "bg-background text-info"
            : "bg-surface-light text-primary transition-colors duration-300 group-hover:bg-background group-hover:text-info"
        }`}
      >
        <Icon className="h-[17px] w-[17px]" strokeWidth={2} />
        {children}
      </div>
    </button>
  );
}

export default ToggleButton;
