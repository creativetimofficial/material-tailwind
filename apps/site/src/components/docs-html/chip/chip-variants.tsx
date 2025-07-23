export function ChipVariants() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative inline-flex select-none items-center rounded-full border border-transparent bg-primary/10 p-[3px] font-sans text-[13px] font-medium leading-none text-primary">
        <span className="font-inherit mx-2 my-[3.5px] leading-none text-inherit">
          Ghost
        </span>
      </div>
      <div className="relative inline-flex select-none items-center rounded-full border border-primary bg-transparent p-[3px] font-sans text-[13px] font-medium leading-none text-primary">
        <span className="font-inherit mx-2 my-[3.5px] leading-none text-inherit">
          Outline
        </span>
      </div>
      <div className="relative inline-flex select-none items-center rounded-full border border-primary bg-primary p-[3px] font-sans text-[13px] font-medium leading-none text-primary-foreground">
        <span className="font-inherit mx-2 my-[3.5px] leading-none text-inherit">
          Solid
        </span>
      </div>
      <div className="relative inline-flex select-none items-center rounded-full border border-primary bg-linear-to-tr from-primary-dark to-primary-light p-[3px] font-sans text-[13px] font-medium leading-none text-primary-foreground">
        <span className="font-inherit mx-2 my-[3.5px] leading-none text-inherit">
          Gradient
        </span>
      </div>
    </div>
  );
}
