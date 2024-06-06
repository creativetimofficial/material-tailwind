export function ChipSizes() {
  return (
    <div className="flex items-end gap-2">
      <div className="relative inline-flex select-none items-center rounded-full border border-primary bg-primary p-0.5 font-sans text-xs font-medium leading-none text-primary-foreground">
        <span className="font-inherit mx-1.5 my-0.5 leading-none text-inherit">
          Small
        </span>
      </div>
      <div className="relative inline-flex select-none items-center rounded-full border border-primary bg-primary p-[3px] font-sans text-[13px] font-medium leading-none text-primary-foreground">
        <span className="font-inherit mx-2 my-[3.5px] leading-none text-inherit">
          Medium
        </span>
      </div>
      <div className="relative inline-flex select-none items-center rounded-full border border-primary bg-primary p-1 font-sans text-[15px] font-medium leading-none text-primary-foreground">
        <span className="font-inherit mx-2.5 my-[4.5px] leading-none text-inherit">
          Large
        </span>
      </div>
    </div>
  );
}
