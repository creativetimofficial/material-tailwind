export default function SidebarWithBurgerMenu() {
            return (
              <div
                className="w-full place-items-center"
                dangerouslySetInnerHTML={{
                  __html: 
`
<button class="outline-none group" aria-expanded="false" aria-haspopup="dialog">
  <button class="inline-grid place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[38px] min-h-[38px] rounded-md shadow-sm hover:shadow-md bg-stone-800 border-stone-800 text-stone-50 hover:bg-stone-700 hover:border-stone-700"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="hidden h-4 w-4 stroke-2 group-data-[open=true]:block"><path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="hidden h-4 w-4 stroke-2 group-data-[open=false]:block"><path d="M3 5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 19H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
  </button>
</button>
`
                }}
              />
            );
          }