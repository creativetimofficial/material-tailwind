import { Avatar } from "../packages/material-tailwind-react/src";

export default function Avatars() {
  const image =
    "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";

  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-4">Avatar Variants</h2>
      <div className="flex items-center gap-4 mb-12">
        <Avatar src={image} alt="avatar rounded" />
        <Avatar variant="circular" src={image} alt="avatar circular" />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Avatar Sizes</h2>
      <div className="flex items-end gap-4">
        <Avatar size="xs" src={image} alt="avatar rounded" />
        <Avatar size="sm" src={image} alt="avatar rounded" />
        <Avatar src={image} alt="avatar rounded" />
        <Avatar size="lg" src={image} alt="avatar rounded" />
        <Avatar size="xl" src={image} alt="avatar rounded" />
        <Avatar size="xxl" src={image} alt="avatar rounded" />
      </div>
    </div>
  );
}
