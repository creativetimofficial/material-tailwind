import { Tooltip, IconButton } from "@material-tailwind/react/dist";
import { Home, Plus, SelectFace3d, Settings } from "iconoir-react";

export function SpeedDialWithCustomStyles() {
  return (
    <Tooltip interactive offset={4}>
      <Tooltip.Trigger as={IconButton} isCircular color="info">
        <Plus className="h-[18px] w-[18px] transition-transform group-data-[open=true]:rotate-45" />
      </Tooltip.Trigger>
      <Tooltip.Content className="flex flex-col gap-1 rounded-full bg-surface p-1.5 shadow-none">
        <Tooltip placement="left">
          <Tooltip.Trigger
            as={IconButton}
            isCircular
            color="info"
            className="p-3"
          >
            <Home className="h-[18px] w-[18px]" />
          </Tooltip.Trigger>
        </Tooltip>
        <Tooltip placement="left">
          <Tooltip.Trigger
            as={IconButton}
            isCircular
            color="info"
            className="p-3"
          >
            <Settings className="h-[18px] w-[18px]" />
          </Tooltip.Trigger>
        </Tooltip>
        <Tooltip placement="left">
          <Tooltip.Trigger
            as={IconButton}
            isCircular
            color="info"
            className="p-3"
          >
            <SelectFace3d className="h-[18px] w-[18px]" />
          </Tooltip.Trigger>
        </Tooltip>
      </Tooltip.Content>
    </Tooltip>
  );
}
