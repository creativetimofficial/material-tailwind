

export default function StepperDemo() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div data-stepper-container data-initial-step="1" class="w-full">
  <div class="flex w-full items-center justify-between">
    <div aria-disabled="false" data-step class="group w-full flex items-center">
      <div class="relative">
        <span class="relative grid h-10 w-10 place-items-center rounded-full bg-slate-200 group-data-[active=true]:bg-slate-800 group-data-[active=true]:text-white group-data-[completed=true]:bg-slate-800 group-data-[completed=true]:text-white">
          1
        </span>
      </div>
      <div class="flex-1 h-1 bg-slate-200 group-data-[completed=true]:bg-slate-800"></div>
    </div>
    <div aria-disabled="true" data-step class="group w-full flex items-center">
      <div class="relative">
        <span class="relative grid h-10 w-10 place-items-center rounded-full bg-slate-200 group-data-[active=true]:bg-slate-800 group-data-[active=true]:text-white group-data-[completed=true]:bg-slate-800 group-data-[completed=true]:text-white">
          2
        </span>
      </div>
      <div class="flex-1 h-1 bg-slate-200 group-data-[completed=true]:bg-slate-800"></div>
    </div>
    <div aria-disabled="true" data-step class="group flex items-center">
      <div class="relative">
        <span class="relative grid h-10 w-10 place-items-center rounded-full bg-slate-200 group-data-[active=true]:bg-slate-800 group-data-[active=true]:text-white group-data-[completed=true]:bg-slate-800 group-data-[completed=true]:text-white">
          3
        </span>
      </div>
    </div>
  </div>

  <div class="mt-8">
    <div data-step-content="1" class="step-content hidden">
      <p class="text-xl font-semibold mb-4">Step 1 Content</p>
      <p class="text-slate-500">This is the content for step 1. Add whatever content you need here.</p>
    </div>
    <div data-step-content="2" class="step-content">
      <p class="text-xl font-semibold mb-4">Step 2 Content</p>
      <p class="text-slate-500">This is the content for step 2. Add whatever content you need here.</p>
    </div>
    <div data-step-content="3" class="step-content hidden">
      <p class="text-xl font-semibold mb-4">Step 3 Content</p>
      <p class="text-slate-500">This is the content for step 3. Add whatever content you need here.</p>
    </div>
  </div>

  <div class="mt-6 flex w-full justify-between gap-4"> 
    <button 
      data-stepper-prev 
      class="inline-flex items-center justify-center border font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700">
      Previous
    </button>
    <button 
      data-stepper-next 
      class="inline-flex items-center justify-center border font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700">
      Next
    </button>
  </div>
</div>
`
      }}
    />
  );
}
