export function InputZipCode() {
  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <label className="block mb-1 text-sm text-slate-600">Enter Zip Code</label>
      <input
        type="number"
        inputMode="numeric"
        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder="ZIP code (02011)"
        pattern="^\d{5}$"
        maxLength={5}
        onInput={(e) => {
          // Cast e.target to HTMLInputElement to access the value property
          const input = e.target as HTMLInputElement;
          input.value = input.value.slice(0, 5); // Limit to 5 digits
        }}
      />
      <p className="flex items-center mt-2 text-xs text-slate-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          ></path>
        </svg>
        Your text helps us to provide location-specific services.
      </p>
    </div>
  );
}
