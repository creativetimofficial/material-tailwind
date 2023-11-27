export function RadioWithDescription() {
  return (
    <div className="flex flex-col gap-8">
      <div className="inline-flex items-center">
        <label
          className="relative -mt-5 flex cursor-pointer items-center rounded-full p-3"
          htmlFor="html_version"
        >
          <input
            name="description"
            type="radio"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
            id="html_version"
          />
          <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-gray-900 opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
            </svg>
          </span>
        </label>
        <label
          className="mt-px cursor-pointer select-none font-light text-gray-700"
          htmlFor="html_version"
        >
          <div>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              HTML Version
            </p>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
              @material-tailwind/html, packed with rich components and widgets.
            </p>
          </div>
        </label>
      </div>
      <div className="inline-flex items-center">
        <label
          className="relative -mt-5 flex cursor-pointer items-center rounded-full p-3"
          htmlFor="react_version"
        >
          <input
            name="description"
            type="radio"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
            id="react_version"
          />
          <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-gray-900 opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
            </svg>
          </span>
        </label>
        <label
          className="mt-px cursor-pointer select-none font-light text-gray-700"
          htmlFor="react_version"
        >
          <div>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              React Version
            </p>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
              @material-tailwind/react, packed with rich components and widgets.
            </p>
          </div>
        </label>
      </div>
      <div className="inline-flex items-center">
        <label
          className="relative -mt-5 flex cursor-pointer items-center rounded-full p-3"
          htmlFor="react_version2"
        >
          <input
            name="description"
            type="radio"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
            id="react_version2"
          />
          <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-blue-500 opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
            </svg>
          </span>
        </label>
        <label
          className="mt-px cursor-pointer select-none font-light text-gray-700"
          htmlFor="react_version2"
        >
          <div>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              React Version
            </p>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
              @material-tailwind/react, packed with rich components and widgets.
            </p>
          </div>
        </label>
      </div>
      <div className="inline-flex items-center">
        <label
          className="relative -mt-5 flex cursor-pointer items-center rounded-full p-3"
          htmlFor="react_version3"
        >
          <input
            name="description"
            type="radio"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-green-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:before:bg-green-500 hover:before:opacity-10"
            id="react_version3"
          />
          <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-green-500 opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
            </svg>
          </span>
        </label>
        <label
          className="mt-px cursor-pointer select-none font-light text-gray-700"
          htmlFor="react_version3"
        >
          <div>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              React Version
            </p>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
              @material-tailwind/react, packed with rich components and widgets.
            </p>
          </div>
        </label>
      </div>
      <div className="inline-flex items-center">
        <label
          className="relative -mt-5 flex cursor-pointer items-center rounded-full p-3"
          htmlFor="react_version4"
        >
          <input
            name="description"
            type="radio"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-red-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-500 checked:before:bg-red-500 hover:before:opacity-10"
            id="react_version4"
          />
          <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-red-500 opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
            </svg>
          </span>
        </label>
        <label
          className="mt-px cursor-pointer select-none font-light text-gray-700"
          htmlFor="react_version4"
        >
          <div>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              React Version
            </p>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
              @material-tailwind/react, packed with rich components and widgets.
            </p>
          </div>
        </label>
      </div>
      <div className="inline-flex items-center">
        <label
          className="relative -mt-5 flex cursor-pointer items-center rounded-full p-3"
          htmlFor="react_version"
        >
          <input
            name="description"
            type="radio"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-amber-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-amber-500 checked:before:bg-amber-500 hover:before:opacity-10"
            id="react_version5"
          />
          <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-amber-500 opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
            </svg>
          </span>
        </label>
        <label
          className="mt-px cursor-pointer select-none font-light text-gray-700"
          htmlFor="react_version5"
        >
          <div>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              React Version
            </p>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
              @material-tailwind/react, packed with rich components and widgets.
            </p>
          </div>
        </label>
      </div>
      <div className="pointer-events-none inline-flex items-center opacity-50">
        <label
          className="relative -mt-5 flex cursor-pointer items-center rounded-full p-3"
          htmlFor="react_version6"
        >
          <input
            name="description"
            type="radio"
            disabled
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
            id="react_version6"
          />
          <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-gray-900 opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
            </svg>
          </span>
        </label>
        <label
          className="mt-px cursor-pointer select-none font-light text-gray-700"
          htmlFor="react_version6"
        >
          <div>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              React Version
            </p>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
              @material-tailwind/react, packed with rich components and widgets.
            </p>
          </div>
        </label>
      </div>
    </div>
  );
}
