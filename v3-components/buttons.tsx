import { Button } from "../packages/react/dist";

const COLORS = ["primary", "secondary", "info", "success", "warning", "error"];

export function Buttons() {
  return (
    <div className="mb-4 flex gap-4">
      <div className="flex-grow rounded-lg bg-white p-4">
        <h1 className="mb-4 text-base font-medium text-gray-950">
          Small Buttons
        </h1>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <Button key={color} variant="ghost" size="sm" color={color}>
              Button
            </Button>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <Button key={color} variant="outline" size="sm" color={color}>
              Button
            </Button>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <Button key={color} size="sm" color={color}>
              Button
            </Button>
          ))}
        </div>
        <div className="mb-8 mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <Button key={color} variant="gradient" size="sm" color={color}>
              Button
            </Button>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <Button key={color} rounded variant="ghost" size="sm" color={color}>
              Button
            </Button>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <Button
              key={color}
              rounded
              variant="outline"
              size="sm"
              color={color}
            >
              Button
            </Button>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <Button key={color} rounded size="sm" color={color}>
              Button
            </Button>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <Button
              key={color}
              rounded
              variant="gradient"
              size="sm"
              color={color}
            >
              Button
            </Button>
          ))}
        </div>
      </div>
      <div className="flex-grow rounded-lg bg-white p-4">
        <h1 className="mb-4 text-base font-medium text-gray-950">
          Medium Buttons
        </h1>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <Button key={color} variant="ghost" color={color}>
              Button
            </Button>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <Button key={color} variant="outline" color={color}>
              Button
            </Button>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <Button key={color} color={color}>
              Button
            </Button>
          ))}
        </div>
        <div className="mb-8 mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <Button key={color} variant="gradient" color={color}>
              Button
            </Button>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <Button key={color} rounded variant="ghost" color={color}>
              Button
            </Button>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <Button key={color} rounded variant="outline" color={color}>
              Button
            </Button>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <Button key={color} rounded color={color}>
              Button
            </Button>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <Button key={color} rounded variant="gradient" color={color}>
              Button
            </Button>
          ))}
        </div>
      </div>
      <div className="flex-grow rounded-lg bg-white p-4">
        <h1 className="mb-4 text-base font-medium text-gray-950">
          Large Buttons
        </h1>
        <div className="mt-4 flex items-end gap-2">
          {COLORS.map((color) => (
            <Button key={color} variant="ghost" size="lg" color={color}>
              Button
            </Button>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <Button key={color} variant="outline" size="lg" color={color}>
              Button
            </Button>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <Button key={color} size="lg" color={color}>
              Button
            </Button>
          ))}
        </div>
        <div className="mb-8 mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <Button key={color} variant="gradient" size="lg" color={color}>
              Button
            </Button>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <Button key={color} rounded variant="ghost" size="lg" color={color}>
              Button
            </Button>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <Button
              key={color}
              rounded
              variant="outline"
              size="lg"
              color={color}
            >
              Button
            </Button>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <Button key={color} rounded size="lg" color={color}>
              Button
            </Button>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <Button
              key={color}
              rounded
              variant="gradient"
              size="lg"
              color={color}
            >
              Button
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
