export function ListWithAvatar() {
  return (
    <ul className="flex min-w-[240px] flex-col gap-0.5">
      <li className="flex select-none items-center rounded-md bg-transparent px-2.5 py-1.5 align-middle font-sans text-foreground transition-all duration-300 ease-in hover:bg-surface hover:text-black focus:bg-surface focus:text-black aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:bg-opacity-70 dark:hover:text-white dark:focus:text-white">
        <span className="me-2.5 grid shrink-0 place-items-center">
          <img
            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg"
            alt="profile-picture"
            className="inline-block h-11 w-11 rounded-full object-cover object-center"
          />
        </span>
        <div>
          <p className="font-sans text-base font-semibold text-black antialiased dark:text-white">
            Alex Andrew
          </p>
          <small className="font-sans text-sm text-foreground antialiased">
            Software Engineer @ Material Tailwind
          </small>
        </div>
      </li>
      <li className="flex select-none items-center rounded-md bg-transparent px-2.5 py-1.5 align-middle font-sans text-foreground transition-all duration-300 ease-in hover:bg-surface hover:text-black focus:bg-surface focus:text-black aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:bg-opacity-70 dark:hover:text-white dark:focus:text-white">
        <span className="me-2.5 grid shrink-0 place-items-center">
          <img
            src="https://dub.sh/rNFOKKJ"
            alt="profile-picture"
            className="inline-block h-11 w-11 rounded-full object-cover object-center"
          />
        </span>
        <div>
          <p className="font-sans text-base font-semibold text-black antialiased dark:text-white">
            Alexander
          </p>
          <small className="font-sans text-sm text-foreground antialiased">
            Backend Developer @ Material Tailwind
          </small>
        </div>
      </li>
      <li className="flex select-none items-center rounded-md bg-transparent px-2.5 py-1.5 align-middle font-sans text-foreground transition-all duration-300 ease-in hover:bg-surface hover:text-black focus:bg-surface focus:text-black aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:bg-opacity-70 dark:hover:text-white dark:focus:text-white">
        <span className="me-2.5 grid shrink-0 place-items-center">
          <img
            src="https://dub.sh/6i238JA"
            alt="profile-picture"
            className="inline-block h-11 w-11 rounded-full object-cover object-center"
          />
        </span>
        <div>
          <p className="font-sans text-base font-semibold text-black antialiased dark:text-white">
            Emma Willever
          </p>
          <small className="font-sans text-sm text-foreground antialiased">
            UI/UX Designer @ Material Tailwind
          </small>
        </div>
      </li>
    </ul>
  );
}
