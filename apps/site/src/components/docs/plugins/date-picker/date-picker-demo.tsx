import * as React from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { NavArrowRight, NavArrowLeft } from "iconoir-react";
import { Input, Popover } from "@material-tailwind/react";

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover placement="bottom">
      <Popover.Trigger>
        <div className="w-72">
          <Input
            readOnly
            onChange={() => null}
            placeholder="Select a date"
            value={date ? format(date, "PPP") : ""}
          />
        </div>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Arrow />
        <DayPicker
          mode="single"
          selected={date}
          onSelect={setDate}
          showOutsideDays
          className="border-0"
          classNames={{
            day_hidden: "invisible",
            nav: "flex items-center",
            day: "h-9 w-9 p-0 ",
            day_range_end: "day-range-end",
            table: "w-full border-collapse",
            nav_button_next: "absolute right-1.5",
            nav_button_previous: "absolute left-1.5",
            head_row: "flex font-medium text-black dark:text-white",
            day_disabled: "text-foreground opacity-50",
            head_cell: "m-0.5 w-9  text-sm",
            day_today: "rounded-md bg-surface text-black dark:text-white",
            caption_label: "text-sm font-medium text-black dark:text-white",
            caption: "flex justify-center py-2 mb-4 relative items-center",
            nav_button:
              "h-6 w-6 bg-transparent hover:bg-primary/10 p-1 rounded transition-colors duration-300",
            row: "flex w-full mt-2",
            day_selected:
              "rounded-md bg-primary text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white",
            day_outside:
              "day-outside text-foreground opacity-50 aria-selected:bg-primary-light aria-selected:text-black dark:aria-selected:text-white aria-selected:bg-opacity-10",
            cell: "text-foreground rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-primary/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-primary/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
          }}
          components={{
            IconLeft: ({ ...props }) => (
              <NavArrowLeft {...props} className="h-4 w-4 stroke-2" />
            ),
            IconRight: ({ ...props }) => (
              <NavArrowRight {...props} className="h-4 w-4 stroke-2" />
            ),
          }}
        />
      </Popover.Content>
    </Popover>
  );
}
