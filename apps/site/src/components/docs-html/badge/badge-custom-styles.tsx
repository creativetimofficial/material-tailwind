export default function BadgeCustomStyles() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="relative inline-flex">
  <div class="">
    <button class="inline-grid place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none data-[shape=circular]:rounded-full text-sm min-w-[38px] min-h-[38px] rounded-md shadow-sm hover:shadow-md bg-slate-200 border-slate-200 text-slate-800 hover:bg-slate-100" data-shape="default">
      <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 stroke-2">
        <path d="M18 8.4C18 6.70261 17.3679 5.07475 16.2426 3.87452C15.1174 2.67428 13.5913 2 12 2C10.4087 2 8.88258 2.67428 7.75736 3.87452C6.63214 5.07475 6 6.70261 6 8.4C6 15.8667 3 18 3 18H21C21 18 18 15.8667 18 8.4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </button>
  </div>
  <span class="absolute text-xs border leading-none grid place-items-center rounded-full min-w-3 min-h-3 data-[placement=&#x27;top-start&#x27;]:data-[overlap=&#x27;square&#x27;]:top-[6%] data-[placement=&#x27;top-start&#x27;]:data-[overlap=&#x27;square&#x27;]:left-[6%] data-[placement=&#x27;top-start&#x27;]:data-[overlap=&#x27;square&#x27;]:-translate-x-1/2 data-[placement=&#x27;top-start&#x27;]:data-[overlap=&#x27;square&#x27;]:-translate-y-1/2 data-[placement=&#x27;top-start&#x27;]:data-[overlap=&#x27;circular&#x27;]:top-[14%] data-[placement=&#x27;top-start&#x27;]:data-[overlap=&#x27;circular&#x27;]:left-[14%] data-[placement=&#x27;top-start&#x27;]:data-[overlap=&#x27;circular&#x27;]:-translate-x-1/2 data-[placement=&#x27;top-start&#x27;]:data-[overlap=&#x27;circular&#x27;]:-translate-y-1/2 data-[placement=&#x27;top-end&#x27;]:data-[overlap=&#x27;square&#x27;]:top-[6%] data-[placement=&#x27;top-end&#x27;]:data-[overlap=&#x27;square&#x27;]:right-[6%] data-[placement=&#x27;top-end&#x27;]:data-[overlap=&#x27;square&#x27;]:translate-x-1/2 data-[placement=&#x27;top-end&#x27;]:data-[overlap=&#x27;square&#x27;]:-translate-y-1/2 data-[placement=&#x27;top-end&#x27;]:data-[overlap=&#x27;circular&#x27;]:top-[14%] data-[placement=&#x27;top-end&#x27;]:data-[overlap=&#x27;circular&#x27;]:right-[14%] data-[placement=&#x27;top-end&#x27;]:data-[overlap=&#x27;circular&#x27;]:translate-x-1/2 data-[placement=&#x27;top-end&#x27;]:data-[overlap=&#x27;circular&#x27;]:-translate-y-1/2 data-[placement=&#x27;bottom-start&#x27;]:data-[overlap=&#x27;square&#x27;]:bottom-[6%] data-[placement=&#x27;bottom-start&#x27;]:data-[overlap=&#x27;square&#x27;]:left-[6%] data-[placement=&#x27;bottom-start&#x27;]:data-[overlap=&#x27;square&#x27;]:-translate-x-1/2 data-[placement=&#x27;bottom-start&#x27;]:data-[overlap=&#x27;square&#x27;]:translate-y-1/2 data-[placement=&#x27;bottom-start&#x27;]:data-[overlap=&#x27;circular&#x27;]:bottom-[14%] data-[placement=&#x27;bottom-start&#x27;]:data-[overlap=&#x27;circular&#x27;]:left-[14%] data-[placement=&#x27;bottom-start&#x27;]:data-[overlap=&#x27;circular&#x27;]:-translate-x-1/2 data-[placement=&#x27;bottom-start&#x27;]:data-[overlap=&#x27;circular&#x27;]:translate-y-1/2 data-[placement=&#x27;bottom-end&#x27;]:data-[overlap=&#x27;square&#x27;]:bottom-[6%] data-[placement=&#x27;bottom-end&#x27;]:data-[overlap=&#x27;square&#x27;]:right-[6%] data-[placement=&#x27;bottom-end&#x27;]:data-[overlap=&#x27;square&#x27;]:translate-x-1/2 data-[placement=&#x27;bottom-end&#x27;]:data-[overlap=&#x27;square&#x27;]:translate-y-1/2 data-[placement=&#x27;bottom-end&#x27;]:data-[overlap=&#x27;circular&#x27;]:bottom-[14%] data-[placement=&#x27;bottom-end&#x27;]:data-[overlap=&#x27;circular&#x27;]:right-[14%] data-[placement=&#x27;bottom-end&#x27;]:data-[overlap=&#x27;circular&#x27;]:translate-x-1/2 data-[placement=&#x27;bottom-end&#x27;]:data-[overlap=&#x27;circular&#x27;]:translate-y-1/2 text-slate-50 border-white bg-slate-950 px-1 py-1 shadow-lg shadow-black/25" data-overlap="square" data-placement="top-end">
    <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-3 w-3 stroke-2">
      <path d="M5 13L9 17L19 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  </span>
</div>
`
      }}
    />
  );
}
