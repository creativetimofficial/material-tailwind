import { Radio } from "@material-tailwind/react/dist";

export function RadioColors() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Radio name="color" color="primary" />
      <Radio name="color" color="secondary" />
      <Radio name="color" color="info" />
      <Radio name="color" color="success" />
      <Radio name="color" color="warning" />
      <Radio name="color" color="error" />
    </div>
  );
}
