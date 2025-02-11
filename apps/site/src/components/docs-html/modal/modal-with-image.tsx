export default function DialogWithImage() {
            return (
              <div
                className="w-full place-items-center"
                dangerouslySetInnerHTML={{
                  __html: 
`
<div class="flex items-center">
  <button data-dui-toggle="modal" data-dui-target="#exampleModalImage" class="outline-none" aria-expanded="false" aria-haspopup="dialog">
    <img alt="nature" src="https://dub.sh/xxo2Jek" class="h-64 w-auto rounded-lg object-cover object-center" />
  </button>
  <div class="fixed antialiased  inset-0 bg-stone-800 bg-opacity-75 flex justify-center items-center opacity-0 pointer-events-none transition-opacity duration-300 ease-out z-[9999]" id="exampleModalImage" aria-hidden="true">
    <div class="bg-white p-4 max-h-[calc(100vh-5rem)] overflow-auto rounded-lg w-10/12 lg:w-8/12 scale-95 transition-transform duration-300 ease-out">
      <div class="pb-0 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind/team-1.jpg" alt="Andrew Alexa" class="inline-block object-cover object-center w-11 h-11 rounded-md">
          <div class="flex flex-col">
            <p class="font-sans  text-base text-stone-800 font-semibold">Andrew Alexa</p>
            <small class="font-sans  text-sm text-stone-500">@alexandrew</small>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button class="inline-grid place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[38px] min-h-[38px] rounded-md bg-transparent border-transparent text-red-500 hover:bg-red-500/5 hover:border-red-500/5 shadow-none hover:shadow-none">
            <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.o rg/2000/svg" color="currentColor" class="h-4 w-4">
              <path d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z" stroke="currentColor" stroke-linejoin="round"></path>
            </svg>
          </button>
          <button class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-200 hover:bg-stone-100 relative bg-gradient-to-b from-white to-white border-stone-200 text-stone-700 rounded-lg hover:bg-gradient-to-b hover:from-stone-50 hover:to-stone-50 hover:border-stone-200 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.35),inset_0_-1px_0px_rgba(0,0,0,0.20)] after:pointer-events-none transition " "="">Free Download</button>
        </div>
      </div>
      <div class="my-4">
        <img alt="nature" src="https://dub.sh/xxo2Jek" class="h-[48rem] w-full rounded-lg object-cover object-center">
      </div>
      <div class="flex items-end justify-between">
        <div class="flex items-center gap-16">
          <div>
            <small class="font-sans  text-sm text-stone-500">Views</small>
            <p class="font-sans  text-base text-stone-800 font-semibold">44,082,044</p>
          </div>
          <div>
            <small class="font-sans  text-sm text-stone-500">Downloads</small>
            <p class="font-sans  text-base text-stone-800 font-semibold">553,031</p>
          </div>
        </div>
        <button class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm rounded-md py-2 px-4 bg-transparent border-transparent text-stone-800 hover:bg-stone-800/5 hover:border-stone-800/5 shadow-none hover:shadow-none">
          <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="mr-1.5 h-4 w-4">
            <path d="M20 13V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M12 15V3M12 3L8.5 6.5M12 3L15.5 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg> 
          Share 
        </button>
      </div>
    </div>
  </div>
</div>
`
                }}
              />
            );
          }