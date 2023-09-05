import { Button, IconButton, ButtonGroup } from "../packages/react/dist";
import { StarIcon } from "@heroicons/react/24/solid";

const COLORS = ["primary", "secondary", "info", "success", "warning", "error"];

export default function Test() {
  return (
    <div className="bg-gray-950 p-4">
      {/* Button */}
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
              <Button
                key={color}
                rounded
                variant="ghost"
                size="sm"
                color={color}
              >
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
              <Button
                key={color}
                rounded
                variant="ghost"
                size="lg"
                color={color}
              >
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

      {/* Icon Button */}
      <div className="mb-4 flex gap-4">
        <div className="flex-grow rounded-lg bg-white p-4">
          <h1 className="mb-4 text-base font-medium text-gray-950">
            Small Icon Buttons
          </h1>
          <div className="mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <IconButton key={color} variant="ghost" size="sm" color={color}>
                <StarIcon className="h-4 w-4" />
              </IconButton>
            ))}
          </div>
          <div className="mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <IconButton key={color} variant="outline" size="sm" color={color}>
                <StarIcon className="h-4 w-4" />
              </IconButton>
            ))}
          </div>
          <div className="mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <IconButton key={color} size="sm" color={color}>
                <StarIcon className="h-4 w-4" />
              </IconButton>
            ))}
          </div>
          <div className="mb-8 mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <IconButton
                key={color}
                variant="gradient"
                size="sm"
                color={color}
              >
                <StarIcon className="h-4 w-4" />
              </IconButton>
            ))}
          </div>
          <div className="mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <IconButton
                key={color}
                rounded
                variant="ghost"
                size="sm"
                color={color}
              >
                <StarIcon className="h-4 w-4" />
              </IconButton>
            ))}
          </div>
          <div className="mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <IconButton
                key={color}
                rounded
                variant="outline"
                size="sm"
                color={color}
              >
                <StarIcon className="h-4 w-4" />
              </IconButton>
            ))}
          </div>
          <div className="mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <IconButton key={color} rounded size="sm" color={color}>
                <StarIcon className="h-4 w-4" />
              </IconButton>
            ))}
          </div>
          <div className="mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <IconButton
                key={color}
                rounded
                variant="gradient"
                size="sm"
                color={color}
              >
                <StarIcon className="h-4 w-4" />
              </IconButton>
            ))}
          </div>
        </div>
        <div className="flex-grow rounded-lg bg-white p-4">
          <h1 className="mb-4 text-base font-medium text-gray-950">
            Medium Icon Buttons
          </h1>
          <div className="mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <IconButton key={color} variant="ghost" color={color}>
                <StarIcon className="h-5 w-5" />
              </IconButton>
            ))}
          </div>
          <div className="mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <IconButton key={color} variant="outline" color={color}>
                <StarIcon className="h-5 w-5" />
              </IconButton>
            ))}
          </div>
          <div className="mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <IconButton key={color} color={color}>
                <StarIcon className="h-5 w-5" />
              </IconButton>
            ))}
          </div>
          <div className="mb-8 mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <IconButton key={color} variant="gradient" color={color}>
                <StarIcon className="h-5 w-5" />
              </IconButton>
            ))}
          </div>
          <div className="mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <IconButton key={color} rounded variant="ghost" color={color}>
                <StarIcon className="h-5 w-5" />
              </IconButton>
            ))}
          </div>
          <div className="mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <IconButton key={color} rounded variant="outline" color={color}>
                <StarIcon className="h-5 w-5" />
              </IconButton>
            ))}
          </div>
          <div className="mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <IconButton key={color} rounded color={color}>
                <StarIcon className="h-5 w-5" />
              </IconButton>
            ))}
          </div>
          <div className="mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <IconButton key={color} rounded variant="gradient" color={color}>
                <StarIcon className="h-5 w-5" />
              </IconButton>
            ))}
          </div>
        </div>
        <div className="flex-grow rounded-lg bg-white p-4">
          <h1 className="mb-4 text-base font-medium text-gray-950">
            Large Icon Buttons
          </h1>
          <div className="mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <IconButton
                key={color}
                rounded
                variant="ghost"
                size="lg"
                color={color}
              >
                <StarIcon className="h-6 w-6" />
              </IconButton>
            ))}
          </div>
          <div className="mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <IconButton
                key={color}
                rounded
                variant="outline"
                size="lg"
                color={color}
              >
                <StarIcon className="h-6 w-6" />
              </IconButton>
            ))}
          </div>
          <div className="mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <IconButton key={color} rounded size="lg" color={color}>
                <StarIcon className="h-6 w-6" />
              </IconButton>
            ))}
          </div>
          <div className="mb-8 mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <IconButton
                key={color}
                rounded
                variant="gradient"
                size="lg"
                color={color}
              >
                <StarIcon className="h-6 w-6" />
              </IconButton>
            ))}
          </div>
          <div className="mt-2 flex items-end gap-2">
            {COLORS.map((color) => (
              <IconButton
                key={color}
                rounded
                size="lg"
                variant="ghost"
                color={color}
              >
                <StarIcon className="h-6 w-6" />
              </IconButton>
            ))}
          </div>
          <div className="mt-4 flex items-end gap-2">
            {COLORS.map((color) => (
              <IconButton
                key={color}
                rounded
                size="lg"
                variant="outline"
                color={color}
              >
                <StarIcon className="h-6 w-6" />
              </IconButton>
            ))}
          </div>
          <div className="mt-4 flex items-end gap-2">
            {COLORS.map((color) => (
              <IconButton key={color} rounded size="lg" color={color}>
                <StarIcon className="h-6 w-6" />
              </IconButton>
            ))}
          </div>
          <div className="mt-4 flex items-end gap-2">
            {COLORS.map((color) => (
              <IconButton
                key={color}
                rounded
                size="lg"
                variant="gradient"
                color={color}
              >
                <StarIcon className="h-6 w-6" />
              </IconButton>
            ))}
          </div>
        </div>
      </div>
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
            Medium Buttons Group
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
            Large Buttons Group
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
    </div>
  );
}
