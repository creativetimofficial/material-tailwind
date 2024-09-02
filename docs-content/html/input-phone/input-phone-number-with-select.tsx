export function InputPhoneNumberWithSelect() {  
  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <label className="block mb-1 text-sm text-slate-600">
        Contact Number
      </label>

      <div className="relative">
        <select
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow appearance-none cursor-pointer">
          <option value="+33">(+33) 123-456-7890</option>
          <option value="+49">(+49) 123-456-7890</option>
          <option value="+31">(+31) 123-456-7890</option>
          <option value="+34">(+34) 123-456-7890</option>
        </select>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-600">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
        </svg>
      </div>
    </div>
  );
}
