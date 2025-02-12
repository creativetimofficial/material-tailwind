
export default function NotificationMenu() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="menu" data-placement="bottom">
  <button data-toggle="menu" aria-expanded="false" class="inline-grid place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[38px] min-h-[38px] rounded-md bg-transparent border-transparent text-slate-800 hover:bg-slate-800/5 hover:border-slate-800/5 shadow-none hover:shadow-none">
    <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 stroke-2">
      <path d="M9.95242 9.62272L11.5109 6.31816C11.711 5.89395 12.289 5.89395 12.4891 6.31816L14.0476 9.62272L17.5329 10.1559C17.9801 10.2243 18.1583 10.7996 17.8346 11.1296L15.313 13.7001L15.9081 17.3314C15.9845 17.7978 15.5168 18.1534 15.1167 17.9331L12 16.2177L8.88328 17.9331C8.48316 18.1534 8.01545 17.7978 8.09187 17.3314L8.68695 13.7001L6.16545 11.1296C5.8417 10.7996 6.01993 10.2243 6.46711 10.1559L9.95242 9.62272Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M22 12L23 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M12 2V1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M12 23V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M20 20L19 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M20 4L19 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M4 20L5 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M4 4L5 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M1 12L2 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  </button>
  <div data-role="menu" class="hidden min-w-40 grid max-w-lg grid-cols-1 gap-3 mt-2 bg-white border border-slate-200 rounded-lg shadow-xl shadow-slate-950/[0.025] p-1 z-10">
    <div class="w-full text-start flex items-center p-1.5 rounded gap-3 hover:bg-slate-200 cursor-pointer">
      <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg" alt="profile-picture" class="object-cover w-11 h-11 rounded-md">
      <div>
        <small class="text-sm text-slate-800 font-semibold">Tania sent you a message</small>
        <small class="flex items-center gap-1 text-xs text-slate-600">
          <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3">
            <path d="M12 6L12 12L18 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg> 13 minutes ago </small>
      </div>
    </div>
    <div class="w-full text-start flex items-center p-1.5 rounded gap-3 hover:bg-slate-200 cursor-pointer">
      <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg" alt="profile-picture" class="object-cover w-11 h-11 rounded-md">
      <div>
        <small class="text-sm font-semibold text-slate-800">Natali replied to your email</small>
        <small class="flex items-center gap-1 text-xs text-slate-600">
          <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3">
            <path d="M12 6L12 12L18 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg> 1 hour ago </small>
      </div>
    </div>
    <div class="w-full text-start flex items-center p-1.5 px-2.5 rounded gap-3 hover:bg-slate-200 cursor-pointer">
      <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg" alt="profile-picture" class="object-cover w-11 h-11 rounded-md">
      <div>
        <small class="text-sm font-semibold text-slate-800">You've received a payment</small>
        <small class="flex items-center gap-1 text-xs text-slate-600">
          <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3">
            <path d="M12 6L12 12L18 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg> 5 hours ago </small>
      </div>
    </div>
  </div>
</div>`
      }}
    />
  );
}
