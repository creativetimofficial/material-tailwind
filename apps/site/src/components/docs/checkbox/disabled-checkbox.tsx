import { Checkbox } from "@material-tailwind/react";

export default function DisabledCheckbox() {
  return (
    <Checkbox disabled>
      <Checkbox.Indicator />
    </Checkbox>
  );
}
