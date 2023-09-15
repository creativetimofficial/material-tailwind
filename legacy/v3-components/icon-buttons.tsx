import { IconButton } from "../../packages/react/dist";
import { StarIcon } from "@heroicons/react/24/solid";

const COLORS = ["primary", "secondary", "info", "success", "warning", "error"];

export function IconButtons() {
  return (
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
            <IconButton key={color} variant="gradient" size="sm" color={color}>
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
  );
}
