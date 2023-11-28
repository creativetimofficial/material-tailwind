export function SwitchCustomStyles() {
  return (
    <div className="inline-flex items-center">
      <div className="relative inline-block h-6 w-11 cursor-pointer rounded-full">
        <input
          id="custom-switch-component"
          type="checkbox"
          className="peer absolute h-full w-full cursor-pointer appearance-none rounded-full bg-blue-gray-100 transition-colors duration-300 checked:bg-[#2ec946] peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
        />
        <label
          className="before:content[''] absolute top-2/4 left-0.5 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-none border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:hidden before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
          htmlFor="custom-switch-component"
        ></label>
      </div>
    </div>
  );
}
