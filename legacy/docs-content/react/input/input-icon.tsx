import { Input } from "@material-tailwind/react";

export function InputIcon() {
  return (
    <div className="w-72">
      <Input label="Input With Icon" icon={<i className="fas fa-heart" />} />
    </div>
  );
}
