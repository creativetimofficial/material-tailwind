export function ChipColors() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative inline-flex select-none items-center rounded-full border border-primary bg-primary p-[3px] font-sans text-[13px] font-medium leading-none text-primary-foreground">
        <span className="font-inherit mx-2 my-[3.5px] leading-none text-inherit">
          Primary
        </span>
      </div>
      <div className="relative inline-flex select-none items-center rounded-full border border-secondary bg-secondary p-[3px] font-sans text-[13px] font-medium leading-none text-secondary-foreground">
        <span className="font-inherit mx-2 my-[3.5px] leading-none text-inherit">
          Secondary
        </span>
      </div>
      <div className="relative inline-flex select-none items-center rounded-full border border-info bg-info p-[3px] font-sans text-[13px] font-medium leading-none text-info-foreground">
        <span className="font-inherit mx-2 my-[3.5px] leading-none text-inherit">
          Info
        </span>
      </div>
      <div className="relative inline-flex select-none items-center rounded-full border border-success bg-success p-[3px] font-sans text-[13px] font-medium leading-none text-success-foreground">
        <span className="font-inherit mx-2 my-[3.5px] leading-none text-inherit">
          Success
        </span>
      </div>
      <div className="relative inline-flex select-none items-center rounded-full border border-warning bg-warning p-[3px] font-sans text-[13px] font-medium leading-none text-warning-foreground">
        <span className="font-inherit mx-2 my-[3.5px] leading-none text-inherit">
          Warning
        </span>
      </div>
      <div className="relative inline-flex select-none items-center rounded-full border border-error bg-error p-[3px] font-sans text-[13px] font-medium leading-none text-error-foreground">
        <span className="font-inherit mx-2 my-[3.5px] leading-none text-inherit">
          Error
        </span>
      </div>
    </div>
  );
}
