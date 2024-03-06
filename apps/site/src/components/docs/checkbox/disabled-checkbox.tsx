import { Checkbox } from "@material-tailwind/react/dist";

export function DisabledCheckbox() {
  return (
    <Checkbox disabled>
      <Checkbox.Indicator />
    </Checkbox>
  );
}
