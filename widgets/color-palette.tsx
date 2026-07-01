interface Props {
  name: string;
  colors: Record<string, string>;
}

export function ColorPalette({ name, colors }: Props) {
  return (
    <div className="flex flex-col space-y-1.5 text-xs">
      <div className="flex h-10 flex-col justify-center">
        <div className="text-base font-bold capitalize text-blue-gray-900">
          {name}
        </div>
      </div>

      <div className="grid min-w-0 flex-1 grid-cols-5 gap-x-4 gap-y-3 2xl:grid-cols-10 2xl:gap-x-2">
        {Object.entries(colors).map(([level, hex]) => (
          <div key={level} className="space-y-1.5">
            <div
              className="h-10 w-full rounded"
              style={{ backgroundColor: hex }}
            />
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-blue-gray-900 2xl:w-full">
                {level}
              </div>
              <div className="font-mono lowercase text-blue-gray-500">
                {hex}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
