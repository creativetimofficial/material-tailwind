import { Button, IconButton } from "../packages/react/dist";
import { StarIcon } from "@heroicons/react/24/solid";

export default function Test() {
  return (
    <div className="bg-gray-950 p-4">
      {/* Button */}
      <div className="mb-4 flex gap-4">
        <div className="flex-grow rounded-lg bg-white p-4">
          <h1 className="mb-4 text-base font-medium text-gray-950">
            Small Buttons
          </h1>
          <div className="mt-4 flex items-end gap-2">
            <Button disabled variant="ghost" size="sm" color="primary">
              Button
            </Button>
            <Button variant="ghost" size="sm" color="secondary">
              Button
            </Button>
            <Button variant="ghost" size="sm" color="info">
              Button
            </Button>
            <Button variant="ghost" size="sm" color="success">
              Button
            </Button>
            <Button variant="ghost" size="sm" color="warning">
              Button
            </Button>
            <Button variant="ghost" size="sm" color="error">
              Button
            </Button>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <Button variant="outline" size="sm" color="primary">
              Button
            </Button>
            <Button variant="outline" size="sm" color="secondary">
              Button
            </Button>
            <Button variant="outline" size="sm" color="info">
              Button
            </Button>
            <Button variant="outline" size="sm" color="success">
              Button
            </Button>
            <Button variant="outline" size="sm" color="warning">
              Button
            </Button>
            <Button variant="outline" size="sm" color="error">
              Button
            </Button>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <Button size="sm" color="primary">
              Button
            </Button>
            <Button size="sm" color="secondary">
              Button
            </Button>
            <Button size="sm" color="info">
              Button
            </Button>
            <Button size="sm" color="success">
              Button
            </Button>
            <Button size="sm" color="warning">
              Button
            </Button>
            <Button size="sm" color="error">
              Button
            </Button>
          </div>
          <div className="mb-16 mt-4 flex items-end gap-2">
            <Button variant="gradient" size="sm" color="primary">
              Button
            </Button>
            <Button variant="gradient" size="sm" color="secondary">
              Button
            </Button>
            <Button variant="gradient" size="sm" color="info">
              Button
            </Button>
            <Button variant="gradient" size="sm" color="success">
              Button
            </Button>
            <Button variant="gradient" size="sm" color="warning">
              Button
            </Button>
            <Button variant="gradient" size="sm" color="error">
              Button
            </Button>
          </div>

          <div className="mt-4 flex items-end gap-2">
            <Button rounded variant="ghost" size="sm" color="primary">
              Button
            </Button>
            <Button rounded variant="ghost" size="sm" color="secondary">
              Button
            </Button>
            <Button rounded variant="ghost" size="sm" color="info">
              Button
            </Button>
            <Button rounded variant="ghost" size="sm" color="success">
              Button
            </Button>
            <Button rounded variant="ghost" size="sm" color="warning">
              Button
            </Button>
            <Button rounded variant="ghost" size="sm" color="error">
              Button
            </Button>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <Button rounded variant="outline" size="sm" color="primary">
              Button
            </Button>
            <Button rounded variant="outline" size="sm" color="secondary">
              Button
            </Button>
            <Button rounded variant="outline" size="sm" color="info">
              Button
            </Button>
            <Button rounded variant="outline" size="sm" color="success">
              Button
            </Button>
            <Button rounded variant="outline" size="sm" color="warning">
              Button
            </Button>
            <Button rounded variant="outline" size="sm" color="error">
              Button
            </Button>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <Button rounded size="sm" color="primary">
              Button
            </Button>
            <Button rounded size="sm" color="secondary">
              Button
            </Button>
            <Button rounded size="sm" color="info">
              Button
            </Button>
            <Button rounded size="sm" color="success">
              Button
            </Button>
            <Button rounded size="sm" color="warning">
              Button
            </Button>
            <Button rounded size="sm" color="error">
              Button
            </Button>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <Button rounded variant="gradient" size="sm" color="primary">
              Button
            </Button>
            <Button rounded variant="gradient" size="sm" color="secondary">
              Button
            </Button>
            <Button rounded variant="gradient" size="sm" color="info">
              Button
            </Button>
            <Button rounded variant="gradient" size="sm" color="success">
              Button
            </Button>
            <Button rounded variant="gradient" size="sm" color="warning">
              Button
            </Button>
            <Button rounded variant="gradient" size="sm" color="error">
              Button
            </Button>
          </div>
        </div>
        <div className="flex-grow rounded-lg bg-white p-4">
          <h1 className="mb-4 text-base font-medium text-gray-950">
            Medium Buttons
          </h1>
          <div className="mt-4 flex items-end gap-2">
            <Button variant="ghost" size="md" color="primary">
              Button
            </Button>
            <Button variant="ghost" size="md" color="secondary">
              Button
            </Button>
            <Button variant="ghost" size="md" color="info">
              Button
            </Button>
            <Button variant="ghost" size="md" color="success">
              Button
            </Button>
            <Button variant="ghost" size="md" color="warning">
              Button
            </Button>
            <Button variant="ghost" size="md" color="error">
              Button
            </Button>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <Button variant="outline" size="md" color="primary">
              Button
            </Button>
            <Button variant="outline" size="md" color="secondary">
              Button
            </Button>
            <Button variant="outline" size="md" color="info">
              Button
            </Button>
            <Button variant="outline" size="md" color="success">
              Button
            </Button>
            <Button variant="outline" size="md" color="warning">
              Button
            </Button>
            <Button variant="outline" size="md" color="error">
              Button
            </Button>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <Button size="md" color="primary">
              Button
            </Button>
            <Button size="md" color="secondary">
              Button
            </Button>
            <Button size="md" color="info">
              Button
            </Button>
            <Button size="md" color="success">
              Button
            </Button>
            <Button size="md" color="warning">
              Button
            </Button>
            <Button size="md" color="error">
              Button
            </Button>
          </div>
          <div className="mb-16 mt-4 flex items-end gap-2">
            <Button variant="gradient" size="md" color="primary">
              Button
            </Button>
            <Button variant="gradient" size="md" color="secondary">
              Button
            </Button>
            <Button variant="gradient" size="md" color="info">
              Button
            </Button>
            <Button variant="gradient" size="md" color="success">
              Button
            </Button>
            <Button variant="gradient" size="md" color="warning">
              Button
            </Button>
            <Button variant="gradient" size="md" color="error">
              Button
            </Button>
          </div>

          <div className="mt-4 flex items-end gap-2">
            <Button rounded variant="ghost" size="md" color="primary">
              Button
            </Button>
            <Button rounded variant="ghost" size="md" color="secondary">
              Button
            </Button>
            <Button rounded variant="ghost" size="md" color="info">
              Button
            </Button>
            <Button rounded variant="ghost" size="md" color="success">
              Button
            </Button>
            <Button rounded variant="ghost" size="md" color="warning">
              Button
            </Button>
            <Button rounded variant="ghost" size="md" color="error">
              Button
            </Button>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <Button rounded variant="outline" size="md" color="primary">
              Button
            </Button>
            <Button rounded variant="outline" size="md" color="secondary">
              Button
            </Button>
            <Button rounded variant="outline" size="md" color="info">
              Button
            </Button>
            <Button rounded variant="outline" size="md" color="success">
              Button
            </Button>
            <Button rounded variant="outline" size="md" color="warning">
              Button
            </Button>
            <Button rounded variant="outline" size="md" color="error">
              Button
            </Button>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <Button rounded size="md" color="primary">
              Button
            </Button>
            <Button rounded size="md" color="secondary">
              Button
            </Button>
            <Button rounded size="md" color="info">
              Button
            </Button>
            <Button rounded size="md" color="success">
              Button
            </Button>
            <Button rounded size="md" color="warning">
              Button
            </Button>
            <Button rounded size="md" color="error">
              Button
            </Button>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <Button rounded variant="gradient" size="md" color="primary">
              Button
            </Button>
            <Button rounded variant="gradient" size="md" color="secondary">
              Button
            </Button>
            <Button rounded variant="gradient" size="md" color="info">
              Button
            </Button>
            <Button rounded variant="gradient" size="md" color="success">
              Button
            </Button>
            <Button rounded variant="gradient" size="md" color="warning">
              Button
            </Button>
            <Button rounded variant="gradient" size="md" color="error">
              Button
            </Button>
          </div>
        </div>
        <div className="flex-grow rounded-lg bg-white p-4">
          <h1 className="mb-4 text-base font-medium text-gray-950">
            Large Buttons
          </h1>
          <div className="mt-4 flex items-end gap-2">
            <Button variant="ghost" size="lg" color="primary">
              Button
            </Button>
            <Button variant="ghost" size="lg" color="secondary">
              Button
            </Button>
            <Button variant="ghost" size="lg" color="info">
              Button
            </Button>
            <Button variant="ghost" size="lg" color="success">
              Button
            </Button>
            <Button variant="ghost" size="lg" color="warning">
              Button
            </Button>
            <Button variant="ghost" size="lg" color="error">
              Button
            </Button>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <Button variant="outline" size="lg" color="primary">
              Button
            </Button>
            <Button variant="outline" size="lg" color="secondary">
              Button
            </Button>
            <Button variant="outline" size="lg" color="info">
              Button
            </Button>
            <Button variant="outline" size="lg" color="success">
              Button
            </Button>
            <Button variant="outline" size="lg" color="warning">
              Button
            </Button>
            <Button variant="outline" size="lg" color="error">
              Button
            </Button>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <Button size="lg" color="primary">
              Button
            </Button>
            <Button size="lg" color="secondary">
              Button
            </Button>
            <Button size="lg" color="info">
              Button
            </Button>
            <Button size="lg" color="success">
              Button
            </Button>
            <Button size="lg" color="warning">
              Button
            </Button>
            <Button size="lg" color="error">
              Button
            </Button>
          </div>
          <div className="mb-16 mt-4 flex items-end gap-2">
            <Button variant="gradient" size="lg" color="primary">
              Button
            </Button>
            <Button variant="gradient" size="lg" color="secondary">
              Button
            </Button>
            <Button variant="gradient" size="lg" color="info">
              Button
            </Button>
            <Button variant="gradient" size="lg" color="success">
              Button
            </Button>
            <Button variant="gradient" size="lg" color="warning">
              Button
            </Button>
            <Button variant="gradient" size="lg" color="error">
              Button
            </Button>
          </div>

          <div className="mt-4 flex items-end gap-2">
            <Button rounded variant="ghost" size="lg" color="primary">
              Button
            </Button>
            <Button rounded variant="ghost" size="lg" color="secondary">
              Button
            </Button>
            <Button rounded variant="ghost" size="lg" color="info">
              Button
            </Button>
            <Button rounded variant="ghost" size="lg" color="success">
              Button
            </Button>
            <Button rounded variant="ghost" size="lg" color="warning">
              Button
            </Button>
            <Button rounded variant="ghost" size="lg" color="error">
              Button
            </Button>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <Button rounded variant="outline" size="lg" color="primary">
              Button
            </Button>
            <Button rounded variant="outline" size="lg" color="secondary">
              Button
            </Button>
            <Button rounded variant="outline" size="lg" color="info">
              Button
            </Button>
            <Button rounded variant="outline" size="lg" color="success">
              Button
            </Button>
            <Button rounded variant="outline" size="lg" color="warning">
              Button
            </Button>
            <Button rounded variant="outline" size="lg" color="error">
              Button
            </Button>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <Button rounded size="lg" color="primary">
              Button
            </Button>
            <Button rounded size="lg" color="secondary">
              Button
            </Button>
            <Button rounded size="lg" color="info">
              Button
            </Button>
            <Button rounded size="lg" color="success">
              Button
            </Button>
            <Button rounded size="lg" color="warning">
              Button
            </Button>
            <Button rounded size="lg" color="error">
              Button
            </Button>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <Button rounded variant="gradient" size="lg" color="primary">
              Button
            </Button>
            <Button rounded variant="gradient" size="lg" color="secondary">
              Button
            </Button>
            <Button rounded variant="gradient" size="lg" color="info">
              Button
            </Button>
            <Button rounded variant="gradient" size="lg" color="success">
              Button
            </Button>
            <Button rounded variant="gradient" size="lg" color="warning">
              Button
            </Button>
            <Button rounded variant="gradient" size="lg" color="error">
              Button
            </Button>
          </div>
        </div>
      </div>

      {/* Icon Button */}
      <div className="mb-4 flex gap-4">
        <div className="flex-grow rounded-lg bg-white p-4">
          <h1 className="mb-4 text-base font-medium text-gray-950">
            Small Icon Buttons
          </h1>
          <div className="mt-4 flex items-end gap-2">
            <IconButton variant="ghost" size="sm" color="primary">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton variant="ghost" size="sm" color="secondary">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton variant="ghost" size="sm" color="info">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton variant="ghost" size="sm" color="success">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton variant="ghost" size="sm" color="warning">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton variant="ghost" size="sm" color="error">
              <StarIcon className="h-4 w-4" />
            </IconButton>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <IconButton variant="outline" size="sm" color="primary">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton variant="outline" size="sm" color="secondary">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton variant="outline" size="sm" color="info">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton variant="outline" size="sm" color="success">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton variant="outline" size="sm" color="warning">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton variant="outline" size="sm" color="error">
              <StarIcon className="h-4 w-4" />
            </IconButton>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <IconButton size="sm" color="primary">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton size="sm" color="secondary">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton size="sm" color="info">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton size="sm" color="success">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton size="sm" color="warning">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton size="sm" color="error">
              <StarIcon className="h-4 w-4" />
            </IconButton>
          </div>
          <div className="mb-16 mt-4 flex items-end gap-2">
            <IconButton variant="gradient" size="sm" color="primary">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton variant="gradient" size="sm" color="secondary">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton variant="gradient" size="sm" color="info">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton variant="gradient" size="sm" color="success">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton variant="gradient" size="sm" color="warning">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton variant="gradient" size="sm" color="error">
              <StarIcon className="h-4 w-4" />
            </IconButton>
          </div>

          <div className="mt-4 flex items-end gap-2">
            <IconButton rounded variant="ghost" size="sm" color="primary">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton rounded variant="ghost" size="sm" color="secondary">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton rounded variant="ghost" size="sm" color="info">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton rounded variant="ghost" size="sm" color="success">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton rounded variant="ghost" size="sm" color="warning">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton rounded variant="ghost" size="sm" color="error">
              <StarIcon className="h-4 w-4" />
            </IconButton>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <IconButton rounded variant="outline" size="sm" color="primary">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton rounded variant="outline" size="sm" color="secondary">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton rounded variant="outline" size="sm" color="info">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton rounded variant="outline" size="sm" color="success">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton rounded variant="outline" size="sm" color="warning">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton rounded variant="outline" size="sm" color="error">
              <StarIcon className="h-4 w-4" />
            </IconButton>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <IconButton rounded size="sm" color="primary">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton rounded size="sm" color="secondary">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton rounded size="sm" color="info">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton rounded size="sm" color="success">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton rounded size="sm" color="warning">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton rounded size="sm" color="error">
              <StarIcon className="h-4 w-4" />
            </IconButton>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <IconButton rounded variant="gradient" size="sm" color="primary">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton rounded variant="gradient" size="sm" color="secondary">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton rounded variant="gradient" size="sm" color="info">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton rounded variant="gradient" size="sm" color="success">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton rounded variant="gradient" size="sm" color="warning">
              <StarIcon className="h-4 w-4" />
            </IconButton>
            <IconButton rounded variant="gradient" size="sm" color="error">
              <StarIcon className="h-4 w-4" />
            </IconButton>
          </div>
        </div>
        <div className="flex-grow rounded-lg bg-white p-4">
          <h1 className="mb-4 text-base font-medium text-gray-950">
            Medium Icon Buttons
          </h1>
          <div className="mt-4 flex items-end gap-2">
            <IconButton variant="ghost" size="md" color="primary">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton variant="ghost" size="md" color="secondary">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton variant="ghost" size="md" color="info">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton variant="ghost" size="md" color="success">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton variant="ghost" size="md" color="warning">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton variant="ghost" size="md" color="error">
              <StarIcon className="h-5 w-5" />
            </IconButton>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <IconButton variant="outline" size="md" color="primary">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton variant="outline" size="md" color="secondary">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton variant="outline" size="md" color="info">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton variant="outline" size="md" color="success">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton variant="outline" size="md" color="warning">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton variant="outline" size="md" color="error">
              <StarIcon className="h-5 w-5" />
            </IconButton>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <IconButton size="md" color="primary">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton size="md" color="secondary">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton size="md" color="info">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton size="md" color="success">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton size="md" color="warning">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton size="md" color="error">
              <StarIcon className="h-5 w-5" />
            </IconButton>
          </div>
          <div className="mb-16 mt-4 flex items-end gap-2">
            <IconButton variant="gradient" size="md" color="primary">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton variant="gradient" size="md" color="secondary">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton variant="gradient" size="md" color="info">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton variant="gradient" size="md" color="success">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton variant="gradient" size="md" color="warning">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton variant="gradient" size="md" color="error">
              <StarIcon className="h-5 w-5" />
            </IconButton>
          </div>

          <div className="mt-4 flex items-end gap-2">
            <IconButton rounded variant="ghost" size="md" color="primary">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton rounded variant="ghost" size="md" color="secondary">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton rounded variant="ghost" size="md" color="info">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton rounded variant="ghost" size="md" color="success">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton rounded variant="ghost" size="md" color="warning">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton rounded variant="ghost" size="md" color="error">
              <StarIcon className="h-5 w-5" />
            </IconButton>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <IconButton rounded variant="outline" size="md" color="primary">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton rounded variant="outline" size="md" color="secondary">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton rounded variant="outline" size="md" color="info">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton rounded variant="outline" size="md" color="success">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton rounded variant="outline" size="md" color="warning">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton rounded variant="outline" size="md" color="error">
              <StarIcon className="h-5 w-5" />
            </IconButton>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <IconButton rounded size="md" color="primary">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton rounded size="md" color="secondary">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton rounded size="md" color="info">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton rounded size="md" color="success">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton rounded size="md" color="warning">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton rounded size="md" color="error">
              <StarIcon className="h-5 w-5" />
            </IconButton>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <IconButton rounded variant="gradient" size="md" color="primary">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton rounded variant="gradient" size="md" color="secondary">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton rounded variant="gradient" size="md" color="info">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton rounded variant="gradient" size="md" color="success">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton rounded variant="gradient" size="md" color="warning">
              <StarIcon className="h-5 w-5" />
            </IconButton>
            <IconButton rounded variant="gradient" size="md" color="error">
              <StarIcon className="h-5 w-5" />
            </IconButton>
          </div>
        </div>
        <div className="flex-grow rounded-lg bg-white p-4">
          <h1 className="mb-4 text-base font-medium text-gray-950">
            Large Icon Buttons
          </h1>
          <div className="mt-4 flex items-end gap-2">
            <IconButton variant="ghost" size="lg" color="primary">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton variant="ghost" size="lg" color="secondary">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton variant="ghost" size="lg" color="info">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton variant="ghost" size="lg" color="success">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton variant="ghost" size="lg" color="warning">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton variant="ghost" size="lg" color="error">
              <StarIcon className="h-6 w-6" />
            </IconButton>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <IconButton variant="outline" size="lg" color="primary">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton variant="outline" size="lg" color="secondary">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton variant="outline" size="lg" color="info">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton variant="outline" size="lg" color="success">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton variant="outline" size="lg" color="warning">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton variant="outline" size="lg" color="error">
              <StarIcon className="h-6 w-6" />
            </IconButton>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <IconButton size="lg" color="primary">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton size="lg" color="secondary">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton size="lg" color="info">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton size="lg" color="success">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton size="lg" color="warning">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton size="lg" color="error">
              <StarIcon className="h-6 w-6" />
            </IconButton>
          </div>
          <div className="mb-16 mt-4 flex items-end gap-2">
            <IconButton variant="gradient" size="lg" color="primary">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton variant="gradient" size="lg" color="secondary">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton variant="gradient" size="lg" color="info">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton variant="gradient" size="lg" color="success">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton variant="gradient" size="lg" color="warning">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton variant="gradient" size="lg" color="error">
              <StarIcon className="h-6 w-6" />
            </IconButton>
          </div>

          <div className="mt-4 flex items-end gap-2">
            <IconButton rounded variant="ghost" size="lg" color="primary">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton rounded variant="ghost" size="lg" color="secondary">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton rounded variant="ghost" size="lg" color="info">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton rounded variant="ghost" size="lg" color="success">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton rounded variant="ghost" size="lg" color="warning">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton rounded variant="ghost" size="lg" color="error">
              <StarIcon className="h-6 w-6" />
            </IconButton>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <IconButton rounded variant="outline" size="lg" color="primary">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton rounded variant="outline" size="lg" color="secondary">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton rounded variant="outline" size="lg" color="info">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton rounded variant="outline" size="lg" color="success">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton rounded variant="outline" size="lg" color="warning">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton rounded variant="outline" size="lg" color="error">
              <StarIcon className="h-6 w-6" />
            </IconButton>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <IconButton rounded size="lg" color="primary">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton rounded size="lg" color="secondary">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton rounded size="lg" color="info">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton rounded size="lg" color="success">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton rounded size="lg" color="warning">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton rounded size="lg" color="error">
              <StarIcon className="h-6 w-6" />
            </IconButton>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <IconButton rounded variant="gradient" size="lg" color="primary">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton rounded variant="gradient" size="lg" color="secondary">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton rounded variant="gradient" size="lg" color="info">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton rounded variant="gradient" size="lg" color="success">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton rounded variant="gradient" size="lg" color="warning">
              <StarIcon className="h-6 w-6" />
            </IconButton>
            <IconButton rounded variant="gradient" size="lg" color="error">
              <StarIcon className="h-6 w-6" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
