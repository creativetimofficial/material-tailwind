import React from "react";

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
          ? "border-transparent bg-white"
          : "border-gray-200 bg-gray-100 transition-colors duration-300 hover:border-transparent hover:bg-transparent"
      }`}
    >
      <span
        aria-hidden="true"
        className={`content[''] bg-conic-gradient animate-gradient-spin absolute left-2/4 top-2/4 block w-[calc(100%*1.5)] -translate-x-2/4 -translate-y-2/4 rounded-full pb-[calc(100%*1.5)] ${
          isActive
            ? "opacity-100"
            : "opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        }`}
      />
      <div
        className={`relative z-10 flex h-full w-full items-center gap-2 rounded px-3 py-1.5 text-sm ${
          isActive
            ? "bg-white text-blue-500"
            : "bg-gray-100 text-gray-950 transition-colors duration-300 group-hover:bg-white group-hover:text-blue-500"
        }`}
      >
        <Icon className="h-[17px] w-[17px]" strokeWidth={2} />
        {children}
      </div>
    </button>
  );
}

export default ToggleButton;
