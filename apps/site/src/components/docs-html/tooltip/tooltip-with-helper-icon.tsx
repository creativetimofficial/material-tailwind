export default function TooltipWithHelperIcon() {
            return (
              <div
                className="w-full place-items-center"
                dangerouslySetInnerHTML={{
                  __html: 
`
<div class="flex items-center justify-center">
  <button data-dui-toggle="tooltip" data-dui-placement="top" data-dui-title="David UI" data-dui-tooltip-class="bg-gray-900 text-white text-xs rounded-md py-1 px-2 shadow-md z-50" class="inline-grid place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[38px] min-h-[38px] rounded-md bg-transparent border-transparent text-stone-800 hover:bg-stone-800/5 hover:border-stone-800/5 shadow-none hover:shadow-none">
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
</div>
`
                }}
              />
            );
          }