import { Checkbox } from "@material-tailwind/react";

export function DisabledCheckbox() {
  return (
    <Checkbox disabled>
      <Checkbox.Indicator />
    </Checkbox>
  );
}
