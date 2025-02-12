
export default function ProfileInfoPopover() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="min-h-72">
  <button type="button" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group" data-toggle="popover" data-placement="bottom" data-popover-class="bg-white w-5/12 md:w-3/12 text-slate-800 border border-slate-200 rounded-lg shadow-xl shadow-slate-950/[0.025] p-2 z-50"> Profile Info </button>
  <div data-popover-content class="hidden">
    <div class="mb-2 flex items-center justify-between gap-4">
      <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg" alt="profile-picture" class="inline-block object-cover object-center data-[shape=square]:rounded-none data-[shape=circular]:rounded-full data-[shape=rounded]:rounded-[current] w-11 h-11 rounded-md" data-shape="circular">
      <button class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group">Follow</button>
    </div>
    <p class="font-sans antialiased text-base text-slate-800 dark:text-white mb-1 flex items-center gap-2 font-bold">
      <span>Andrew Alexa</span> • <a href="#profile-info-popover" class="font-sans antialiased text-base text-inherit" data-tabindex="" tabindex="-1">@alex</a>
    </p>
    <small class="font-sans antialiased text-sm text-slate-500">Frontend Developer • Major interest in Web Development: motivated to achieve measurable results, to deepen my knowledge and improve my skills.</small>
    <hr class="-mx-2.5 my-2.5 border-slate-200">
    <div class="flex items-center gap-8">
      <small class="font-sans antialiased text-sm text-slate-800 dark:text-white flex items-center gap-1.5">
        <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4">
          <path d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="currentColor"></path>
          <path d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>United Kingdom </small>
      <small class="font-sans antialiased text-sm text-slate-800 dark:text-white flex items-center gap-1.5">
        <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4">
          <path d="M7 9.01L7.01 8.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M11 9.01L11.01 8.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M7 13.01L7.01 12.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M11 13.01L11.01 12.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M7 17.01L7.01 16.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M11 17.01L11.01 16.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M15 21H3.6C3.26863 21 3 20.7314 3 20.4V5.6C3 5.26863 3.26863 5 3.6 5H9V3.6C9 3.26863 9.26863 3 9.6 3H14.4C14.7314 3 15 3.26863 15 3.6V9M15 21H20.4C20.7314 21 21 20.7314 21 20.4V9.6C21 9.26863 20.7314 9 20.4 9H15M15 21V17M15 9V13M15 13H17M15 13V17M15 17H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>Material Tailwind </small>
    </div>
  </div>
</div>`
      }}
    />
  );
}
