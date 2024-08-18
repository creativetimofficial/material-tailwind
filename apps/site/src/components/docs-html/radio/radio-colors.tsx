export function RadioColors() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center gap-2">
        <label className="relative inline-block w-5 h-5" htmlFor="primary">
          <input
            id="primary"
            type="radio"
            value="primary"
            name="primary"
            className="peer relative h-full w-full appearance-none overflow-hidden rounded-full before:absolute before:inset-0 before:h-5 before:w-5 before:bg-surface before:transition-all before:duration-200 before:ease-in before:content-[''] checked:before:bg-primary"
          />
          <span className="absolute text-current transition-all duration-200 ease-in scale-75 opacity-0 pointer-events-none left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-primary-foreground peer-checked:scale-100 peer-checked:opacity-100">
            <svg
              width="9px"
              height="9px"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </label>
        <label className="relative inline-block w-5 h-5" htmlFor="primary">
          <input
            id="primary"
            type="radio"
            name="primary"
            value="primary"
            className="peer relative h-full w-full appearance-none overflow-hidden rounded-full before:absolute before:inset-0 before:h-5 before:w-5 before:bg-surface before:transition-all before:duration-200 before:ease-in before:content-[''] checked:before:bg-primary"
          />
          <span className="absolute text-current transition-all duration-200 ease-in scale-75 opacity-0 pointer-events-none left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-primary-foreground peer-checked:scale-100 peer-checked:opacity-100">
            <svg
              width="9px"
              height="9px"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </label>
      </div>
      <div className="flex flex-row items-center gap-2">
        <label
          className="relative inline-block w-5 h-5"
          htmlFor="secondary-color"
        >
          <input
            id="secondary-color"
            type="radio"
            value="secondary"
            name="secondary"
            className="peer relative h-full w-full appearance-none overflow-hidden rounded-full before:absolute before:inset-0 before:h-5 before:w-5 before:bg-surface before:transition-all before:duration-200 before:ease-in before:content-[''] checked:before:bg-secondary"
          />
          <span className="absolute text-current transition-all duration-200 ease-in scale-75 opacity-0 pointer-events-none left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-secondary-foreground peer-checked:scale-100 peer-checked:opacity-100">
            <svg
              width="9px"
              height="9px"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </label>
        <label
          className="relative inline-block w-5 h-5"
          htmlFor="secondary-color"
        >
          <input
            id="secondary-color"
            type="radio"
            name="secondary"
            value="secondary"
            className="peer relative h-full w-full appearance-none overflow-hidden rounded-full before:absolute before:inset-0 before:h-5 before:w-5 before:bg-surface before:transition-all before:duration-200 before:ease-in before:content-[''] checked:before:bg-secondary"
          />
          <span className="absolute text-current transition-all duration-200 ease-in scale-75 opacity-0 pointer-events-none left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-secondary-foreground peer-checked:scale-100 peer-checked:opacity-100">
            <svg
              width="9px"
              height="9px"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </label>
      </div>
      <div className="flex flex-row items-center gap-2">
        <label className="relative inline-block w-5 h-5" htmlFor="info">
          <input
            id="info"
            type="radio"
            value="info"
            name="info"
            className="peer relative h-full w-full appearance-none overflow-hidden rounded-full before:absolute before:inset-0 before:h-5 before:w-5 before:bg-surface before:transition-all before:duration-200 before:ease-in before:content-[''] checked:before:bg-info"
          />
          <span className="absolute text-current transition-all duration-200 ease-in scale-75 opacity-0 pointer-events-none left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-info-foreground peer-checked:scale-100 peer-checked:opacity-100">
            <svg
              width="9px"
              height="9px"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </label>
        <label className="relative inline-block w-5 h-5" htmlFor="info-color">
          <input
            id="info-color"
            type="radio"
            name="info"
            value="info"
            className="peer relative h-full w-full appearance-none overflow-hidden rounded-full before:absolute before:inset-0 before:h-5 before:w-5 before:bg-surface before:transition-all before:duration-200 before:ease-in before:content-[''] checked:before:bg-info"
          />
          <span className="absolute text-current transition-all duration-200 ease-in scale-75 opacity-0 pointer-events-none left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-info-foreground peer-checked:scale-100 peer-checked:opacity-100">
            <svg
              width="9px"
              height="9px"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </label>
      </div>
      <div className="flex flex-row items-center gap-2">
        <label
          className="relative inline-block w-5 h-5"
          htmlFor="success-color"
        >
          <input
            id="success-color"
            type="radio"
            value="success"
            name="success"
            className="peer relative h-full w-full appearance-none overflow-hidden rounded-full before:absolute before:inset-0 before:h-5 before:w-5 before:bg-surface before:transition-all before:duration-200 before:ease-in before:content-[''] checked:before:bg-success"
          />
          <span className="absolute text-current transition-all duration-200 ease-in scale-75 opacity-0 pointer-events-none left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-success-foreground peer-checked:scale-100 peer-checked:opacity-100">
            <svg
              width="9px"
              height="9px"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </label>
        <label className="relative inline-block w-5 h-5" htmlFor="success">
          <input
            id="success"
            type="radio"
            name="success"
            value="success"
            className="peer relative h-full w-full appearance-none overflow-hidden rounded-full before:absolute before:inset-0 before:h-5 before:w-5 before:bg-surface before:transition-all before:duration-200 before:ease-in before:content-[''] checked:before:bg-success"
          />
          <span className="absolute text-current transition-all duration-200 ease-in scale-75 opacity-0 pointer-events-none left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-success-foreground peer-checked:scale-100 peer-checked:opacity-100">
            <svg
              width="9px"
              height="9px"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </label>
      </div>
      <div className="flex flex-row items-center gap-2">
        <label
          className="relative inline-block w-5 h-5"
          htmlFor="warning-color"
        >
          <input
            id="warning-color"
            type="radio"
            value="warning"
            name="warning"
            className="peer relative h-full w-full appearance-none overflow-hidden rounded-full before:absolute before:inset-0 before:h-5 before:w-5 before:bg-surface before:transition-all before:duration-200 before:ease-in before:content-[''] checked:before:bg-warning"
          />
          <span className="absolute text-current transition-all duration-200 ease-in scale-75 opacity-0 pointer-events-none left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-warning-foreground peer-checked:scale-100 peer-checked:opacity-100">
            <svg
              width="9px"
              height="9px"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </label>
        <label className="relative inline-block w-5 h-5" htmlFor="warning">
          <input
            id="warning"
            type="radio"
            name="warning"
            value="warning"
            className="peer relative h-full w-full appearance-none overflow-hidden rounded-full before:absolute before:inset-0 before:h-5 before:w-5 before:bg-surface before:transition-all before:duration-200 before:ease-in before:content-[''] checked:before:bg-warning"
          />
          <span className="absolute text-current transition-all duration-200 ease-in scale-75 opacity-0 pointer-events-none left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-warning-foreground peer-checked:scale-100 peer-checked:opacity-100">
            <svg
              width="9px"
              height="9px"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </label>
      </div>
      <div className="flex flex-row items-center gap-2">
        <label className="relative inline-block w-5 h-5" htmlFor="error-color">
          <input
            id="error-color"
            type="radio"
            value="error"
            name="error"
            className="peer relative h-full w-full appearance-none overflow-hidden rounded-full before:absolute before:inset-0 before:h-5 before:w-5 before:bg-surface before:transition-all before:duration-200 before:ease-in before:content-[''] checked:before:bg-error"
          />
          <span className="absolute text-current transition-all duration-200 ease-in scale-75 opacity-0 pointer-events-none left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-error-foreground peer-checked:scale-100 peer-checked:opacity-100">
            <svg
              width="9px"
              height="9px"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </label>
        <label className="relative inline-block w-5 h-5" htmlFor="error">
          <input
            id="error"
            type="radio"
            name="error"
            value="error"
            className="peer relative h-full w-full appearance-none overflow-hidden rounded-full before:absolute before:inset-0 before:h-5 before:w-5 before:bg-surface before:transition-all before:duration-200 before:ease-in before:content-[''] checked:before:bg-error"
          />
          <span className="absolute text-current transition-all duration-200 ease-in scale-75 opacity-0 pointer-events-none left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-error-foreground peer-checked:scale-100 peer-checked:opacity-100">
            <svg
              width="9px"
              height="9px"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </label>
      </div>
    </div>
  );
}
