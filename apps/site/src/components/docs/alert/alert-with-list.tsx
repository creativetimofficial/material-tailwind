import { Alert, Typography } from "@material-tailwind/react";
import { WarningCircle } from "iconoir-react";

export default function AlertWithList() {
  return (
    <div className="flex w-full flex-col gap-2">
      <Alert variant="ghost">
        <Alert.Icon>
          <WarningCircle className="h-5 w-5" />
        </Alert.Icon>
        <Alert.Content className="mt-0.5">
          <Typography>Ensure that these requirements are met:</Typography>
          <ul className="ml-2 mt-2 list-inside list-disc space-y-1">
            <Typography as="li" type="small" className="list-item">
              At least 10 characters (and up to 100 characters)
            </Typography>
            <Typography as="li" type="small" className="list-item">
              At least one lowercase character
            </Typography>
            <Typography as="li" type="small" className="list-item">
              Inclusion of at least one special character, e.g., ! @ # ?
            </Typography>
          </ul>
        </Alert.Content>
      </Alert>

      <Alert variant="outline">
        <Alert.Icon>
          <WarningCircle className="h-5 w-5" />
        </Alert.Icon>
        <Alert.Content className="mt-0.5">
          <Typography>Ensure that these requirements are met:</Typography>
          <ul className="ml-2 mt-2 list-inside list-disc space-y-1">
            <Typography as="li" type="small" className="list-item">
              At least 10 characters (and up to 100 characters)
            </Typography>
            <Typography as="li" type="small" className="list-item">
              At least one lowercase character
            </Typography>
            <Typography as="li" type="small" className="list-item">
              Inclusion of at least one special character, e.g., ! @ # ?
            </Typography>
          </ul>
        </Alert.Content>
      </Alert>

      <Alert variant="solid">
        <Alert.Icon>
          <WarningCircle className="h-5 w-5" />
        </Alert.Icon>
        <Alert.Content className="mt-0.5">
          <Typography>Ensure that these requirements are met:</Typography>
          <ul className="ml-2 mt-2 list-inside list-disc space-y-1">
            <Typography as="li" type="small" className="list-item">
              At least 10 characters (and up to 100 characters)
            </Typography>
            <Typography as="li" type="small" className="list-item">
              At least one lowercase character
            </Typography>
            <Typography as="li" type="small" className="list-item">
              Inclusion of at least one special character, e.g., ! @ # ?
            </Typography>
          </ul>
        </Alert.Content>
      </Alert>

      <Alert variant="gradient">
        <Alert.Icon>
          <WarningCircle className="h-5 w-5" />
        </Alert.Icon>
        <Alert.Content className="mt-0.5">
          <Typography>Ensure that these requirements are met:</Typography>
          <ul className="ml-2 mt-2 list-inside list-disc space-y-1">
            <Typography as="li" type="small" className="list-item">
              At least 10 characters (and up to 100 characters)
            </Typography>
            <Typography as="li" type="small" className="list-item">
              At least one lowercase character
            </Typography>
            <Typography as="li" type="small" className="list-item">
              Inclusion of at least one special character, e.g., ! @ # ?
            </Typography>
          </ul>
        </Alert.Content>
      </Alert>
    </div>
  );
}
