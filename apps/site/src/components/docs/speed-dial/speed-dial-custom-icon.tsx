import { Tooltip, IconButton } from "@material-tailwind/react";
import { HomeSimple, Mail, SelectFace3d, Settings } from "iconoir-react";

export function SpeedDialCustomIcon() {
  return (
    <Tooltip interactive offset={4}>
      <Tooltip.Trigger as={IconButton} isCircular>
        <Mail className="h-[18px] w-[18px]" />
      </Tooltip.Trigger>
      <Tooltip.Content className="flex flex-col gap-1 bg-transparent shadow-none dark:bg-transparent">
        <Tooltip placement="left">
          <Tooltip.Trigger as={IconButton} isCircular color="secondary">
            <HomeSimple className="h-[18px] w-[18px]" />
          </Tooltip.Trigger>
          <Tooltip.Content>
            Home
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
        <Tooltip placement="left">
          <Tooltip.Trigger as={IconButton} isCircular color="secondary">
            <Settings className="h-[18px] w-[18px]" />
          </Tooltip.Trigger>
          <Tooltip.Content>
            Settings
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
        <Tooltip placement="left">
          <Tooltip.Trigger as={IconButton} isCircular color="secondary">
            <SelectFace3d className="h-[18px] w-[18px]" />
          </Tooltip.Trigger>
          <Tooltip.Content>
            Dashboard
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
      </Tooltip.Content>
    </Tooltip>
  );
}
