export function ChipWithAvatar() {
  return (
    <div className="relative inline-flex select-none items-center rounded-full border border-primary bg-primary p-[3px] font-sans text-[13px] font-medium leading-none text-primary-foreground">
      <span className="grid h-4 w-4 shrink-0 translate-x-0.5 place-items-center rounded-full">
        <img
          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg"
          alt="profile-picture"
          className="inline-block h-full w-full rounded-full object-cover object-center"
        />
      </span>
      <span className="font-inherit mx-2 my-[3.5px] leading-none text-inherit">
        Alex Andrew
      </span>
    </div>
  );
}
