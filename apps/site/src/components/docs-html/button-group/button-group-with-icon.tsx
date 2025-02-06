export default function ButtonGroupWithIcon() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex flex-col gap-4">
  <div class="inline-flex flex-row">
    <button class="inline-flex items-center rounded-md border border-transparent bg-transparent px-3.5 py-2.5 text-center font-sans text-sm font-medium leading-none text-slate-800 transition-all duration-300 ease-in hover:border-slate-800/5 hover:bg-slate-800/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
      <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="mr-1.5 h-4 w-4 stroke-2">
        <path d="M12 11.6667H8M12 11.6667C12 11.6667 15.3333 11.6667 15.3333 8.33333C15.3333 5.00002 12 5 12 5C12 5 12 5 12 5H8.6C8.26863 5 8 5.26863 8 5.6V11.6667M12 11.6667C12 11.6667 16 11.6667 16 15.3333C16 19 12 19 12 19C12 19 12 19 12 19H8.6C8.26863 19 8 18.7314 8 18.4V11.6667" stroke="currentColor"></path>
      </svg>
      Bold
    </button>
    <button class="inline-flex items-center rounded-md border border-transparent bg-transparent px-3.5 py-2.5 text-center font-sans text-sm font-medium leading-none text-slate-800 transition-all duration-300 ease-in hover:border-slate-800/5 hover:bg-slate-800/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
      <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="mr-1.5 h-4 w-4 stroke-2">
        <path d="M11 5L14 5M17 5L14 5M14 5L10 19M10 19L7 19M10 19L13 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      Italic
    </button>
    <button class="inline-flex items-center rounded-md border border-transparent bg-transparent px-3.5 py-2.5 text-center font-sans text-sm font-medium leading-none text-slate-800 transition-all duration-300 ease-in hover:border-slate-800/5 hover:bg-slate-800/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
      <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="mr-1.5 h-4 w-4 stroke-2">
        <path d="M16 5V11C16 13.2091 14.2091 15 12 15V15C9.79086 15 8 13.2091 8 11V5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M6 19L18 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      Underline
    </button>
  </div>
  <div class="inline-flex flex-row">
    <button class="inline-flex items-center rounded-md rounded-r-none border border-slate-800 bg-transparent px-3.5 py-2.5 text-center font-sans text-sm font-medium leading-none text-slate-800 transition-all duration-300 ease-in hover:bg-slate-800 hover:text-slate-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
      <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="mr-1.5 h-4 w-4 stroke-2">
        <path d="M12 11.6667H8M12 11.6667C12 11.6667 15.3333 11.6667 15.3333 8.33333C15.3333 5.00002 12 5 12 5C12 5 12 5 12 5H8.6C8.26863 5 8 5.26863 8 5.6V11.6667M12 11.6667C12 11.6667 16 11.6667 16 15.3333C16 19 12 19 12 19C12 19 12 19 12 19H8.6C8.26863 19 8 18.7314 8 18.4V11.6667" stroke="currentColor"></path>
      </svg>
      Bold
    </button>
    <button class="inline-flex items-center rounded-none border border-l-0 border-slate-800 bg-transparent px-3.5 py-2.5 text-center font-sans text-sm font-medium leading-none text-slate-800 transition-all duration-300 ease-in hover:bg-slate-800 hover:text-slate-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
      <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="mr-1.5 h-4 w-4 stroke-2">
        <path d="M11 5L14 5M17 5L14 5M14 5L10 19M10 19L7 19M10 19L13 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      Italic
    </button>
    <button class="inline-flex items-center rounded-md rounded-l-none border border-l-0 border-slate-800 bg-transparent px-3.5 py-2.5 text-center font-sans text-sm font-medium leading-none text-slate-800 transition-all duration-300 ease-in hover:bg-slate-800 hover:text-slate-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
      <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="mr-1.5 h-4 w-4 stroke-2">
        <path d="M16 5V11C16 13.2091 14.2091 15 12 15V15C9.79086 15 8 13.2091 8 11V5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M6 19L18 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      Underline
    </button>
  </div>
  <div class="inline-flex flex-row">
    <button class="inline-flex items-center rounded-md rounded-r-none border border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
      <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="mr-1.5 h-4 w-4 stroke-2">
        <path d="M12 11.6667H8M12 11.6667C12 11.6667 15.3333 11.6667 15.3333 8.33333C15.3333 5.00002 12 5 12 5C12 5 12 5 12 5H8.6C8.26863 5 8 5.26863 8 5.6V11.6667M12 11.6667C12 11.6667 16 11.6667 16 15.3333C16 19 12 19 12 19C12 19 12 19 12 19H8.6C8.26863 19 8 18.7314 8 18.4V11.6667" stroke="currentColor"></path>
      </svg>
      Bold
    </button>
    <button class="inline-flex items-center rounded-none border border-l-0 border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
      <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="mr-1.5 h-4 w-4 stroke-2">
        <path d="M11 5L14 5M17 5L14 5M14 5L10 19M10 19L7 19M10 19L13 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      Italic
    </button>
    <button class="inline-flex items-center rounded-md rounded-l-none border border-l-0 border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
      <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="mr-1.5 h-4 w-4 stroke-2">
        <path d="M16 5V11C16 13.2091 14.2091 15 12 15V15C9.79086 15 8 13.2091 8 11V5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M6 19L18 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      Underline
    </button>
  </div>
  <div class="inline-flex flex-row">
    <button class="inline-flex items-center rounded-md rounded-r-none border border-slate-800 bg-gradient-to-tr from-slate-800 to-slate-700 px-3.5 py-2.5 text-center font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
      <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="mr-1.5 h-4 w-4 stroke-2">
        <path d="M12 11.6667H8M12 11.6667C12 11.6667 15.3333 11.6667 15.3333 8.33333C15.3333 5.00002 12 5 12 5C12 5 12 5 12 5H8.6C8.26863 5 8 5.26863 8 5.6V11.6667M12 11.6667C12 11.6667 16 11.6667 16 15.3333C16 19 12 19 12 19C12 19 12 19 12 19H8.6C8.26863 19 8 18.7314 8 18.4V11.6667" stroke="currentColor"></path>
      </svg>
      Bold
    </button>
    <button class="inline-flex items-center rounded-none border border-l-0 border-slate-800 bg-gradient-to-tr from-slate-800 to-slate-700 px-3.5 py-2.5 text-center font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
      <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="mr-1.5 h-4 w-4 stroke-2">
        <path d="M11 5L14 5M17 5L14 5M14 5L10 19M10 19L7 19M10 19L13 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      Italic
    </button>
    <button class="inline-flex items-center rounded-md rounded-l-none border border-l-0 border-slate-800 bg-gradient-to-tr from-slate-800 to-slate-700 px-3.5 py-2.5 text-center font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
      <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="mr-1.5 h-4 w-4 stroke-2">
        <path d="M16 5V11C16 13.2091 14.2091 15 12 15V15C9.79086 15 8 13.2091 8 11V5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M6 19L18 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      Underline
    </button>
  </div>
</div>`
      }}
    />
  );
}
