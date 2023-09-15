import { Button, ButtonGroup } from "../../packages/react/dist";

const COLORS = ["primary", "secondary", "info", "success", "warning", "error"];

export function ButtonGroups() {
  return (
    <>
      <div className="flex-grow rounded-lg bg-white p-4">
        <h1 className="mb-4 text-base font-medium text-gray-950">
          Small Buttons Group
        </h1>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <ButtonGroup key={color} variant="ghost" size="sm" color={color}>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ButtonGroup>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <ButtonGroup key={color} variant="outline" size="sm" color={color}>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ButtonGroup>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <ButtonGroup key={color} size="sm" color={color}>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ButtonGroup>
          ))}
        </div>
        <div className="mb-8 mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <ButtonGroup key={color} variant="gradient" size="sm" color={color}>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ButtonGroup>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <ButtonGroup
              key={color}
              rounded
              variant="ghost"
              size="sm"
              color={color}
            >
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ButtonGroup>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <ButtonGroup
              key={color}
              rounded
              variant="outline"
              size="sm"
              color={color}
            >
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ButtonGroup>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <ButtonGroup key={color} rounded size="sm" color={color}>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ButtonGroup>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <ButtonGroup
              key={color}
              rounded
              variant="gradient"
              size="sm"
              color={color}
            >
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ButtonGroup>
          ))}
        </div>
      </div>
      <div className="mt-4 flex-grow rounded-lg bg-white p-4">
        <h1 className="mb-4 text-base font-medium text-gray-950">
          Medium Buttons Group
        </h1>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <ButtonGroup key={color} variant="ghost" color={color}>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ButtonGroup>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <ButtonGroup key={color} variant="outline" color={color}>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ButtonGroup>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <ButtonGroup key={color} color={color}>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ButtonGroup>
          ))}
        </div>
        <div className="mb-8 mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <ButtonGroup key={color} variant="gradient" color={color}>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ButtonGroup>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <ButtonGroup key={color} rounded variant="ghost" color={color}>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ButtonGroup>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <ButtonGroup key={color} rounded variant="outline" color={color}>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ButtonGroup>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <ButtonGroup key={color} rounded color={color}>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ButtonGroup>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-2">
          {COLORS.map((color) => (
            <ButtonGroup key={color} rounded variant="gradient" color={color}>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ButtonGroup>
          ))}
        </div>
      </div>
      <div className="mt-4 flex-grow rounded-lg bg-white p-4">
        <h1 className="mb-4 text-base font-medium text-gray-950">
          Large Buttons Group
        </h1>
        <div className="mt-2 flex flex-wrap items-end gap-2">
          {COLORS.map((color) => (
            <ButtonGroup key={color} variant="ghost" size="lg" color={color}>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ButtonGroup>
          ))}
        </div>
        <div className="mt-2 flex flex-wrap items-end gap-2">
          {COLORS.map((color) => (
            <ButtonGroup key={color} variant="outline" size="lg" color={color}>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ButtonGroup>
          ))}
        </div>
        <div className="mt-2 flex flex-wrap items-end gap-2">
          {COLORS.map((color) => (
            <ButtonGroup key={color} size="lg" color={color}>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ButtonGroup>
          ))}
        </div>
        <div className="mb-16 mt-4 flex flex-wrap items-end gap-2">
          {COLORS.map((color) => (
            <ButtonGroup key={color} variant="gradient" size="lg" color={color}>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ButtonGroup>
          ))}
        </div>
        <div className="mt-2 flex flex-wrap items-end gap-2">
          {COLORS.map((color) => (
            <ButtonGroup
              key={color}
              rounded
              variant="ghost"
              size="lg"
              color={color}
            >
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ButtonGroup>
          ))}
        </div>
        <div className="mt-2 flex flex-wrap items-end gap-2">
          {COLORS.map((color) => (
            <ButtonGroup
              key={color}
              rounded
              variant="outline"
              size="lg"
              color={color}
            >
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ButtonGroup>
          ))}
        </div>
        <div className="mt-2 flex flex-wrap items-end gap-2">
          {COLORS.map((color) => (
            <ButtonGroup key={color} rounded size="lg" color={color}>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ButtonGroup>
          ))}
        </div>
        <div className="mt-2 flex flex-wrap items-end gap-2">
          {COLORS.map((color) => (
            <ButtonGroup
              key={color}
              rounded
              variant="gradient"
              size="lg"
              color={color}
            >
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ButtonGroup>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <div className="mt-4 flex-grow rounded-lg bg-white p-4">
          <h1 className="mb-4 text-base font-medium text-gray-950">
            Small Vertical Buttons Group
          </h1>
          <div className="mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <ButtonGroup
                key={color}
                orientation="vertical"
                variant="ghost"
                size="sm"
                color={color}
              >
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
              </ButtonGroup>
            ))}
          </div>
          <div className="mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <ButtonGroup
                key={color}
                orientation="vertical"
                variant="outline"
                size="sm"
                color={color}
              >
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
              </ButtonGroup>
            ))}
          </div>
          <div className="mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <ButtonGroup
                key={color}
                orientation="vertical"
                size="sm"
                color={color}
              >
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
              </ButtonGroup>
            ))}
          </div>
          <div className="mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <ButtonGroup
                key={color}
                orientation="vertical"
                variant="gradient"
                size="sm"
                color={color}
              >
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
              </ButtonGroup>
            ))}
          </div>
        </div>
        <div className="mt-4 flex-grow rounded-lg bg-white p-4">
          <h1 className="mb-4 text-base font-medium text-gray-950">
            Medium Vertical Buttons Group
          </h1>
          <div className="mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <ButtonGroup
                key={color}
                orientation="vertical"
                variant="ghost"
                color={color}
              >
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
              </ButtonGroup>
            ))}
          </div>
          <div className="mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <ButtonGroup
                key={color}
                orientation="vertical"
                variant="outline"
                color={color}
              >
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
              </ButtonGroup>
            ))}
          </div>
          <div className="mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <ButtonGroup key={color} orientation="vertical" color={color}>
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
              </ButtonGroup>
            ))}
          </div>
          <div className="mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <ButtonGroup
                key={color}
                orientation="vertical"
                variant="gradient"
                color={color}
              >
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
              </ButtonGroup>
            ))}
          </div>
        </div>
        <div className="mt-4 flex-grow rounded-lg bg-white p-4">
          <h1 className="mb-4 text-base font-medium text-gray-950">
            Large Vertical Buttons Group
          </h1>
          <div className="mt-2 flex flex-wrap items-end gap-2">
            {COLORS.map((color) => (
              <ButtonGroup
                key={color}
                orientation="vertical"
                variant="ghost"
                size="lg"
                color={color}
              >
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
              </ButtonGroup>
            ))}
          </div>
          <div className="mt-2 flex flex-wrap items-end gap-2">
            {COLORS.map((color) => (
              <ButtonGroup
                key={color}
                orientation="vertical"
                variant="outline"
                size="lg"
                color={color}
              >
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
              </ButtonGroup>
            ))}
          </div>
          <div className="mt-2 flex flex-wrap items-end gap-2">
            {COLORS.map((color) => (
              <ButtonGroup
                key={color}
                orientation="vertical"
                size="lg"
                color={color}
              >
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
              </ButtonGroup>
            ))}
          </div>
          <div className="mt-2 flex flex-wrap items-end gap-2">
            {COLORS.map((color) => (
              <ButtonGroup
                key={color}
                orientation="vertical"
                variant="gradient"
                size="lg"
                color={color}
              >
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
              </ButtonGroup>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
