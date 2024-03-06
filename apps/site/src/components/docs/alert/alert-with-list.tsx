import * as React from "react";
import { Alert, Typography } from "@material-tailwind/react/dist";
import { WarningCircle } from "iconoir-react";

export function AlertWithList() {
  return (
    <div className="flex w-full flex-col gap-2">
      <Alert variant="solid" className="items-baseline">
        <Alert.Icon>
          <WarningCircle className="h-full w-full translate-y-0.5" />
        </Alert.Icon>
        <Alert.Content>
          <Typography>Ensure that these requirements are met:</Typography>
          <ul className="ml-2 mt-2 list-inside list-disc space-y-2 font-normal">
            <li>At least 10 characters (and up to 100 characters)</li>
            <li>At least one lowercase character</li>
            <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
          </ul>
        </Alert.Content>
      </Alert>

      <Alert variant="gradient" className="items-baseline">
        <Alert.Icon>
          <WarningCircle className="h-full w-full translate-y-0.5" />
        </Alert.Icon>
        <Alert.Content>
          <Typography>Ensure that these requirements are met:</Typography>
          <ul className="ml-2 mt-2 list-inside list-disc space-y-2 font-normal">
            <li>At least 10 characters (and up to 100 characters)</li>
            <li>At least one lowercase character</li>
            <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
          </ul>
        </Alert.Content>
      </Alert>

      <Alert variant="ghost" className="items-baseline">
        <Alert.Icon>
          <WarningCircle className="h-full w-full translate-y-0.5" />
        </Alert.Icon>
        <Alert.Content>
          <Typography>Ensure that these requirements are met:</Typography>
          <ul className="ml-2 mt-2 list-inside list-disc space-y-2 font-normal">
            <li>At least 10 characters (and up to 100 characters)</li>
            <li>At least one lowercase character</li>
            <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
          </ul>
        </Alert.Content>
      </Alert>

      <Alert variant="outline" className="items-baseline">
        <Alert.Icon>
          <WarningCircle className="h-full w-full translate-y-0.5" />
        </Alert.Icon>
        <Alert.Content>
          <Typography>Ensure that these requirements are met:</Typography>
          <ul className="ml-2 mt-2 list-inside list-disc space-y-2 font-normal">
            <li>At least 10 characters (and up to 100 characters)</li>
            <li>At least one lowercase character</li>
            <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
          </ul>
        </Alert.Content>
      </Alert>
    </div>
  );
}
