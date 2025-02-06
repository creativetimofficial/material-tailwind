
export default function CheckboxWithCustomIcon() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<label class="group shadow-slate-950/5 inline-block relative h-5 w-5 cursor-pointer rounded bg-transparent border-slate-200 transition-all duration-200 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none data-[checked=true]:border-slate-800 text-slate-50 border-0 shadow-none hover:shadow-none data-[checked=true]:bg-transparent" data-checked="false" for=":R0:"><input id=":R0:" type="checkbox" style="display:none" /><span data-checked="false" class="pointer-events-none text-current -translate-x-2/4 -translate-y-2/4 scale-75 transition-all duration-200 ease-in data-[checked=true]:scale-100 data-[checked=true]:opacity-100 relative left-0 top-0 opacity-100"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="absolute inset-0 h-5 w-5 text-slate-800 opacity-100 group-data-[checked=true]:opacity-0"><path d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="absolute inset-0 h-5 w-5 text-slate-800 opacity-0 group-data-[checked=true]:opacity-100"><path d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></label>
`
      }}
    />
  );
}
