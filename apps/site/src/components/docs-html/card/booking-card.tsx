
export default function BookingCard() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="rounded-lg border overflow-hidden bg-white border-slate-200 shadow-slate-950/5 w-full max-w-[26rem] shadow-lg">
  <div class="p-2 h-max rounded relative">
    <img class="w-full h-full rounded" src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=800&q=80" alt="ui/ux review check" />
  </div>
  <div class="w-full h-max rounded px-3.5 py-2.5">
    <div class="mb-2 flex items-center justify-between">
      <h6 class="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-current">Wooden House, Florida</h6>
      <p class="font-sans antialiased text-base text-current flex items-center gap-1.5"><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-[18px] w-[18px] text-amber-500">
          <path d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>5.0</p>
    </div>
    <p class="font-sans antialiased text-base text-slate-600">Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.</p>
    <div class="group mt-6 inline-flex flex-wrap items-center gap-3">
      <button class="inline-grid place-items-center align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none data-[shape=circular]:rounded-full text-base min-w-[46px] min-h-[46px] rounded-md shadow-sm hover:shadow-lg text-slate-800 hover:bg-slate-100 hover:bg-slate-100 cursor-pointer border border-slate-200 bg-slate-100 transition-all hover:!opacity-100 group-hover:opacity-70" data-shape="circular">
      <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-5 w-5">
            <path d="M2 17V7C2 5.89543 2.89543 5 4 5H10H14H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H14H10H4C2.89543 19 2 18.1046 2 17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M18.5 12.01L18.51 11.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M5.5 12.01L5.51 11.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </button>
       
        <button class="inline-grid place-items-center align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none data-[shape=circular]:rounded-full text-base min-w-[46px] min-h-[46px] rounded-md shadow-sm hover:shadow-lg text-slate-800 hover:bg-slate-100 hover:bg-slate-100 cursor-pointer border border-slate-200 bg-slate-100 transition-all hover:!opacity-100 group-hover:opacity-70" data-shape="circular"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-5 w-5">
            <path d="M12 19.51L12.01 19.4989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M2 8C8 3.5 16 3.5 22 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M5 12C9 9 15 9 19 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M8.5 15.5C10.7504 14.1 13.2498 14.0996 15.5001 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </button>
       
        <button class="inline-grid place-items-center align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none data-[shape=circular]:rounded-full text-base min-w-[46px] min-h-[46px] rounded-md shadow-sm hover:shadow-lg text-slate-800 hover:bg-slate-100 hover:bg-slate-100 cursor-pointer border border-slate-200 bg-slate-100 transition-all hover:!opacity-100 group-hover:opacity-70" data-shape="circular">
          <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-5 w-5">
            <path d="M17 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M9 17H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </button>
        <button class="inline-grid place-items-center align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none data-[shape=circular]:rounded-full text-base min-w-[46px] min-h-[46px] rounded-md shadow-sm hover:shadow-lg text-slate-800 hover:bg-slate-100 hover:bg-slate-100 cursor-pointer border border-slate-200 bg-slate-100 transition-all hover:!opacity-100 group-hover:opacity-70" data-shape="circular">
          <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-5 w-5">
            <path d="M7 21L17 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M2 16.4V3.6C2 3.26863 2.26863 3 2.6 3H21.4C21.7314 3 22 3.26863 22 3.6V16.4C22 16.7314 21.7314 17 21.4 17H2.6C2.26863 17 2 16.7314 2 16.4Z" stroke="currentColor"></path>
          </svg>
        </button>
        <button class="inline-grid place-items-center align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none data-[shape=circular]:rounded-full text-base min-w-[46px] min-h-[46px] rounded-md shadow-sm hover:shadow-lg text-slate-800 hover:bg-slate-100 hover:bg-slate-100 cursor-pointer border border-slate-200 bg-slate-100 transition-all hover:!opacity-100 group-hover:opacity-70" data-shape="circular">
          <svg width="1.5em" stroke-width="1.5" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-5 w-5">
            <path d="M8 18C8 20.4148 9.79086 21 12 21C15.7587 21 17 18.5 14.5 13.5C11 18 10.5 11 11 9C9.5 12 8 14.8177 8 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M12 21C17.0495 21 20 18.0956 20 13.125C20 8.15444 12 3 12 3C12 3 4 8.15444 4 13.125C4 18.0956 6.95054 21 12 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </button>
        <button class="inline-grid place-items-center align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none data-[shape=circular]:rounded-full text-base min-w-[46px] min-h-[46px] rounded-md shadow-sm hover:shadow-lg text-slate-800 hover:bg-slate-100 hover:bg-slate-100 cursor-pointer border border-slate-200 bg-slate-100 transition-all hover:!opacity-100 group-hover:opacity-70" data-shape="circular">+20</button></button>
        </div>
  </div>
  <div class="w-full px-3.5 pb-3.5 rounded pt-3"><button class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700" data-shape="default" data-width="full">Reserve</button></div>
</div>
`
      }}
    />
  );
}
