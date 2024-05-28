export function ColorPalette({ colors }: any) {
  return (
    <div className="mb-10 mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
      {Object.entries(colors).map((color, key) => {
        const level = color[0];
        const hex = color[1] as string;

        return (
          <div
            key={key}
            className="overflow-hidden rounded-lg border border-surface"
          >
            <div
              style={{ backgroundColor: hex }}
              className="h-24 w-full border-b border-surface"
            />
            <div className="px-2.5 pb-[7px] pt-2">
              <p className="mb-0.5 text-sm font-medium capitalize text-black dark:text-white">
                {level}
              </p>
              <p className="font-mono text-sm lowercase text-foreground">
                {hex}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ColorPalette;
