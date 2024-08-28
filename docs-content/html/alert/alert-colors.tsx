export function AlertColors() {
  return (
    <div className="block w-full">
      <div role="alert" className="mb-4 relative flex w-full p-3 text-sm text-white bg-blue-600 rounded-md">
        An info alert for showing message.
        <button className="flex items-center justify-center transition-all w-8 h-8 rounded-md text-white hover:bg-white/10 active:bg-white/10 absolute top-1.5 right-1.5" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>
      <div role="alert" className="mb-4 relative flex w-full p-3 text-sm text-white bg-red-600 rounded-md">
        An red alert for showing message.
        <button className="flex items-center justify-center transition-all w-8 h-8 rounded-md text-white hover:bg-white/10 active:bg-white/10 absolute top-1.5 right-1.5" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>
      <div role="alert" className="mb-4 relative flex w-full p-3 text-sm text-white bg-green-600 rounded-md">
        An success alert for showing message.
        <button className="flex items-center justify-center transition-all w-8 h-8 rounded-md text-white hover:bg-white/10 active:bg-white/10 absolute top-1.5 right-1.5" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>
      <div role="alert" className="mb-4 relative flex w-full p-3 text-sm text-white bg-orange-600 rounded-md">
        An warning alert for showing message.
        <button className="flex items-center justify-center transition-all w-8 h-8 rounded-md text-white hover:bg-white/10 active:bg-white/10 absolute top-1.5 right-1.5" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>
    </div>
  );
}
