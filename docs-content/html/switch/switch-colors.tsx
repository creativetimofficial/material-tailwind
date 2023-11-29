export function SwitchColors() {
  return (
    <div className="flex w-max gap-6">
      <div className="inline-flex items-center">
        <div className="relative inline-block h-4 w-8 cursor-pointer rounded-full">
          <input
            defaultChecked
            id="switch-1"
            type="checkbox"
            className="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-blue-gray-100 transition-colors duration-300 checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:before:bg-blue-500"
          />
          <label
            htmlFor="switch-1"
            className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-blue-500 peer-checked:before:bg-blue-500"
          >
            <div
              className="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
              data-ripple-dark="true"
            ></div>
          </label>
        </div>
      </div>
      <div className="inline-flex items-center">
        <div className="relative inline-block h-4 w-8 cursor-pointer rounded-full">
          <input
            defaultChecked
            id="switch-2"
            type="checkbox"
            className="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-blue-gray-100 transition-colors duration-300 checked:bg-red-500 peer-checked:border-red-500 peer-checked:before:bg-red-500"
          />
          <label
            htmlFor="switch-2"
            className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-red-500 peer-checked:before:bg-red-500"
          >
            <div
              className="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
              data-ripple-dark="true"
            ></div>
          </label>
        </div>
      </div>
      <div className="inline-flex items-center">
        <div className="relative inline-block h-4 w-8 cursor-pointer rounded-full">
          <input
            defaultChecked
            id="switch-3"
            type="checkbox"
            className="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-blue-gray-100 transition-colors duration-300 checked:bg-green-500 peer-checked:border-green-500 peer-checked:before:bg-green-500"
          />
          <label
            htmlFor="switch-3"
            className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-green-500 peer-checked:before:bg-green-500"
          >
            <div
              className="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
              data-ripple-dark="true"
            ></div>
          </label>
        </div>
      </div>
      <div className="inline-flex items-center">
        <div className="relative inline-block h-4 w-8 cursor-pointer rounded-full">
          <input
            defaultChecked
            id="switch-4"
            type="checkbox"
            className="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-blue-gray-100 transition-colors duration-300 checked:bg-amber-500 peer-checked:border-amber-500 peer-checked:before:bg-amber-500"
          />
          <label
            htmlFor="switch-4"
            className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-amber-500 peer-checked:before:bg-amber-500"
          >
            <div
              className="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
              data-ripple-dark="true"
            ></div>
          </label>
        </div>
      </div>
      <div className="inline-flex items-center">
        <div className="relative inline-block h-4 w-8 cursor-pointer rounded-full">
          <input
            defaultChecked
            id="switch-5"
            type="checkbox"
            className="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-blue-gray-100 transition-colors duration-300 checked:bg-teal-500 peer-checked:border-teal-500 peer-checked:before:bg-teal-500"
          />
          <label
            htmlFor="switch-5"
            className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-teal-500 peer-checked:before:bg-teal-500"
          >
            <div
              className="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
              data-ripple-dark="true"
            ></div>
          </label>
        </div>
      </div>
      <div className="inline-flex items-center">
        <div className="relative inline-block h-4 w-8 cursor-pointer rounded-full">
          <input
            defaultChecked
            id="switch-6"
            type="checkbox"
            className="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-blue-gray-100 transition-colors duration-300 checked:bg-indigo-500 peer-checked:border-indigo-500 peer-checked:before:bg-indigo-500"
          />
          <label
            htmlFor="switch-6"
            className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-indigo-500 peer-checked:before:bg-indigo-500"
          >
            <div
              className="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
              data-ripple-dark="true"
            ></div>
          </label>
        </div>
      </div>
      <div className="inline-flex items-center">
        <div className="relative inline-block h-4 w-8 cursor-pointer rounded-full">
          <input
            defaultChecked
            id="switch-7"
            type="checkbox"
            className="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-blue-gray-100 transition-colors duration-300 checked:bg-purple-500 peer-checked:border-purple-500 peer-checked:before:bg-purple-500"
          />
          <label
            htmlFor="switch-7"
            className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-purple-500 peer-checked:before:bg-purple-500"
          >
            <div
              className="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
              data-ripple-dark="true"
            ></div>
          </label>
        </div>
      </div>

      <div className="inline-flex items-center">
        <div className="relative inline-block h-4 w-8 cursor-pointer rounded-full">
          <input
            defaultChecked
            id="switch-8"
            type="checkbox"
            className="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-blue-gray-100 transition-colors duration-300 checked:bg-pink-500 peer-checked:border-pink-500 peer-checked:before:bg-pink-500"
          />
          <label
            htmlFor="switch-8"
            className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-pink-500 peer-checked:before:bg-pink-500"
          >
            <div
              className="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
              data-ripple-dark="true"
            ></div>
          </label>
        </div>
      </div>
    </div>
  );
}
