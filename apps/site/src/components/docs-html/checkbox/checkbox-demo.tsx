export function CheckboxDemo() {
  return (
    <label className="relative inline-block h-5 w-5" htmlFor="checkbox">
      <input
        id="checkbox"
        type="checkbox"
        className="peer relative h-full w-full appearance-none overflow-hidden rounded before:absolute before:inset-0 before:h-5 before:w-5 before:bg-surface before:transition-all before:duration-200 before:ease-in before:content-[''] checked:before:bg-primary"
      />
      <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 scale-75 text-current text-primary-foreground opacity-0 transition-all duration-200 ease-in peer-checked:scale-100 peer-checked:opacity-100">
        <svg
          fill="none"
          width="18px"
          height="18px"
          strokeWidth="2"
          color="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 13L9 17L19 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </span>
    </label>
  );
}
